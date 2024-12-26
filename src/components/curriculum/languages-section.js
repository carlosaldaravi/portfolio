import { useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { personalLanguagesData } from "@/data/sidebar";
import StarsSection from "./stars-section";

const LanguagesSection = ({ isEditable }) => {
  const intl = useIntl();
  const [languages, setLanguages] = useState(personalLanguagesData);

  const translatedLanguages = useMemo(() => {
    return languages.map((lang) => ({
      ...lang,
      displayTitle: lang.languageEdited
        ? lang.language
        : intl.formatMessage({ id: lang.languageId }),
    }));
  }, [languages, intl]);

  const handleLanguageChange = (id, starsFilled) => {
    setLanguages((prev) =>
      [
        ...prev.map((lang) =>
          lang.id === id ? { ...lang, starsFilled } : lang
        ),
      ].sort((a, b) => b.starsFilled - a.starsFilled)
    );
  };

  const handleLanguageNameChange = (id, language) => {
    setLanguages((prev) =>
      prev.map((lang) =>
        lang.id === id ? { ...lang, language, languageEdited: true } : lang
      )
    );
  };

  const handleAddLanguage = () => {
    const newLanguage = {
      id: `lang-${languages.length + 1}-${Math.random()
        .toString(36)
        .substr(2, 5)}`,
      languageId: "language",
      language: intl.formatMessage({ id: "language" }),
      starsFilled: 1,
      languageEdited: false,
    };
    setLanguages((prev) => [...prev, newLanguage]);
  };

  const handleRemoveLanguage = (id) => {
    setLanguages((prev) => prev.filter((lang) => lang.id !== id));
  };

  return (
    <div>
      {translatedLanguages.map((lang) => (
        <div key={lang.id} className="flex items-center space-x-2">
          {isEditable ? (
            <div className="flex">
              <input
                type="text"
                value={lang.displayTitle}
                onChange={(e) =>
                  handleLanguageNameChange(lang.id, e.target.value)
                }
                className="input_cv_edit"
                placeholder={lang.displayTitle}
              />
              <StarsSection
                language={lang.displayTitle}
                starsFilled={lang.starsFilled}
                isEditable={isEditable}
                onChange={(stars) => handleLanguageChange(lang.id, stars)}
              />
            </div>
          ) : (
            <StarsSection
              language={lang.displayTitle}
              starsFilled={lang.starsFilled}
              isEditable={isEditable}
              onChange={(stars) => handleLanguageChange(lang.id, stars)}
            />
          )}
          {isEditable && (
            <button
              onClick={() => handleRemoveLanguage(lang.id)}
              className="ml-2"
            >
              <XMarkIcon className="w-5 h-5 text-red-500" />
            </button>
          )}
        </div>
      ))}
      {isEditable && (
        <button onClick={handleAddLanguage} className="flex items-center mt-4">
          <PlusIcon className="w-5 h-5 text-green-500 mr-2" />
          <span>{intl.formatMessage({ id: "addLanguage" })}</span>
        </button>
      )}
    </div>
  );
};

export default LanguagesSection;
