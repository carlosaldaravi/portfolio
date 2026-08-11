import { useCallback } from "react";
import EditableSection from "./editable-section";
import Experience from "./experience";
import Education from "./education";
import Certification from "./certification";
import HonorAndAward from "./honor-and-award";
import OtherInfo from "./other-info";
import { useIntl } from "react-intl";
import { sectionsData } from "@/data/sections-data";
import {
  getCertificationsData,
  getEducationsData,
  getExperiencesData,
  getHonorsAndAwardsData,
  getOtherInfoData,
} from "@/data/cv.data";
import { useTranslatedData } from "./hooks/useTranslatedData";

interface MainSectionProps {
  isEditable: boolean;
}

const SECTION_FIELDS = [{ idKey: "titleId", valueKey: "displayTitle", editedKey: "titleEdited" }];
const EXPERIENCE_FIELDS = [
  { idKey: "titleId", valueKey: "title", editedKey: "titleEdited" },
  { idKey: "textId", valueKey: "text", editedKey: "textEdited" },
];
const EDUCATION_FIELDS = [
  { idKey: "titleId", valueKey: "title", editedKey: "titleEdited" },
  { idKey: "placeId", valueKey: "place", editedKey: "placeEdited" },
  { idKey: "text1Id", valueKey: "text1", editedKey: "text1Edited" },
  { idKey: "text2Id", valueKey: "text2", editedKey: "text2Edited" },
];
const HONOR_FIELDS = [
  { idKey: "titleId", valueKey: "title", editedKey: "titleEdited" },
  { idKey: "textId", valueKey: "text", editedKey: "textEdited" },
];
const OTHER_INFO_FIELDS = [{ idKey: "textId", valueKey: "text", editedKey: "textEdited" }];

const MainSection = ({ isEditable }: MainSectionProps) => {
  const { locale } = useIntl();
  // Content resolved from the single source of truth for the active locale.
  // The locale is a route segment, so a language change remounts this tree —
  // capturing the arrays on first render is safe.
  const experienceTransform = useCallback(
    (exp: { date: string; dateEdited: boolean }, formatMessage: (d: { id: string }) => string) => ({
      date:
        exp.dateEdited || !exp.date.endsWith("- ")
          ? exp.date
          : exp.date + formatMessage({ id: "present" }),
    }),
    []
  );

  // `sections` is structural (holds Component refs) → not persisted (null key).
  // The content arrays persist per locale so edits survive a reload.
  const [translatedSections, setSections] = useTranslatedData<typeof sectionsData[number], typeof sectionsData[number] & { displayTitle: string }>(sectionsData, SECTION_FIELDS, undefined, null);
  const [translatedExperiences, setExperiences] = useTranslatedData(getExperiencesData(locale), EXPERIENCE_FIELDS, experienceTransform, `experiences:${locale}`);
  const [translatedEducations, setEducations] = useTranslatedData(getEducationsData(locale), EDUCATION_FIELDS, undefined, `educations:${locale}`);
  const [translatedCertifications, setCertifications] = useTranslatedData(getCertificationsData(), [], undefined, `certifications:${locale}`);
  const [translatedHonorsAndAwards, setHonorsAndAwards] = useTranslatedData(getHonorsAndAwardsData(locale), HONOR_FIELDS, undefined, `awards:${locale}`);
  const [translatedOtherInfo, setOtherInfo] = useTranslatedData(getOtherInfoData(locale), OTHER_INFO_FIELDS, undefined, `otherInfo:${locale}`);

  const handleChangeSectionTitle = (sectionId: string, newTitle: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === "section-" + sectionId ? { ...s, title: newTitle, titleEdited: true } : s
      )
    );
  };

  const handleOnRemoveSection = (id: string) => {
    setSections((prev) => prev.filter((s) => s.id !== id));
  };

  const renderSectionContent = (id: string, title: string) => {
    switch (id) {
      case "section-experience":
        return <Experience title={title} isEditable={isEditable} experiences={translatedExperiences} setExperiences={setExperiences} onChangeTitle={handleChangeSectionTitle} />;
      case "section-education":
        return <Education title={title} isEditable={isEditable} educations={translatedEducations} setEducations={setEducations} onChangeTitle={handleChangeSectionTitle} />;
      case "section-certifications":
        return <Certification title={title} isEditable={isEditable} certifications={translatedCertifications} setCertifications={setCertifications} onChangeTitle={handleChangeSectionTitle} />;
      case "section-honors-and-awards":
        return <HonorAndAward title={title} isEditable={isEditable} honorsAndAwards={translatedHonorsAndAwards} setHonorsAndAwards={setHonorsAndAwards} onChangeTitle={handleChangeSectionTitle} />;
      case "section-other-info":
        return <OtherInfo title={title} isEditable={isEditable} otherInfo={translatedOtherInfo} setOtherInfo={setOtherInfo} onChangeTitle={handleChangeSectionTitle} />;
      default:
        return null;
    }
  };

  return (
    <div className="main__right__body">
      {translatedSections.map(({ id, displayTitle }) => (
        <div key={`section-${id}`} className="section">
          <EditableSection isEditable={isEditable} bigSection={true} onRemove={() => handleOnRemoveSection(id)}>
            {renderSectionContent(id, displayTitle as string)}
          </EditableSection>
        </div>
      ))}
    </div>
  );
};

export default MainSection;
