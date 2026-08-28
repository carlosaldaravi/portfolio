import { useMemo } from "react";
import { useIntl } from "react-intl";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { getPersonalLanguagesData } from "@/data/cv.data";
import { usePersistentState } from "./hooks/usePersistentState";
import { patchById, removeById } from "./item-list";
import StarsSection from "./stars-section";

interface LanguageData {
  id: string;
  languageId: string;
  language: string;
  languageEdited: boolean;
  starsFilled: number;
}

interface TranslatedLanguage extends LanguageData {
  displayTitle: string;
}

interface LanguagesSectionProps {
  isEditable: boolean;
}

const LanguagesSection = ({ isEditable }: LanguagesSectionProps) => {
  const intl = useIntl();
  const [languages, setLanguages] = usePersistentState<LanguageData[]>("languages", getPersonalLanguagesData);

  const translatedLanguages: TranslatedLanguage[] = useMemo(() => {
    return languages.map((lang) => ({
      ...lang,
      displayTitle: lang.languageEdited
        ? lang.language
        : intl.formatMessage({ id: lang.languageId }),
    }));
  }, [languages, intl]);

  const handleLanguageChange = (id: string, starsFilled: number) => {
    setLanguages((prev) =>
      patchById(prev, id, { starsFilled }).sort(
        (a, b) => b.starsFilled - a.starsFilled
      )
    );
  };

  const handleLanguageNameChange = (id: string, language: string) => {
    setLanguages((prev) => patchById(prev, id, { language, languageEdited: true }));
  };

  const handleAddLanguage = () => {
    setLanguages((prev) => [
      ...prev,
      {
        id: `lang-${prev.length + 1}-${Math.random().toString(36).slice(2, 7)}`,
        languageId: "language",
        language: intl.formatMessage({ id: "language" }),
        starsFilled: 1,
        languageEdited: false,
      },
    ]);
  };

  const handleRemoveLanguage = (id: string) => {
    setLanguages((prev) => removeById(prev, id));
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
