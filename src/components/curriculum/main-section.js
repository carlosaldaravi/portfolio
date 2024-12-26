import { useIntl } from "react-intl";
import { useMemo, useState } from "react";
import EditableSection from "./editable-section";
import Experience from "./experience";
import Education from "./education";
import Certification from "./certification";
import HonorAndAward from "./honor-and-award";
import OtherInfo from "./other-info";
import {
  certificationsData,
  educationsData,
  experiencesData,
  honorsAndAwardsData,
  otherInfoData,
  sectionsData,
} from "@/data/sections-data";

const MainSection = ({ isEditable }) => {
  const intl = useIntl();
  const [sections, setSections] = useState(sectionsData);
  const translatedSections = useMemo(() => {
    return sections.map((section) => ({
      ...section,
      displayTitle: section.titleEdited
        ? section.title
        : intl.formatMessage({ id: section.titleId }),
    }));
  }, [sections, intl]);

  const [experiences, setExperiences] = useState(experiencesData);
  const translatedExperiences = useMemo(() => {
    return experiences.map((exp) => ({
      ...exp,
      date:
        exp.dateEdited || exp.id !== "experience-1"
          ? exp.date
          : exp.date + intl.formatMessage({ id: "present" }),
      title: exp.titleEdited
        ? exp.title
        : exp.titleId !== ""
        ? intl.formatMessage({ id: exp.titleId })
        : "",
      place: exp.placeEdited ? exp.place : exp.place,
      text: exp.textEdited
        ? exp.text
        : exp.textId !== ""
        ? intl.formatMessage({ id: exp.textId })
        : "",
    }));
  }, [experiences, intl]);

  const [educations, setEducations] = useState(educationsData);
  const translatedEducations = useMemo(() => {
    return educations.map((edu) => ({
      ...edu,
      title: edu.titleEdited
        ? edu.title
        : edu.titleId !== ""
        ? intl.formatMessage({ id: edu.titleId })
        : "",
      place: edu.placeEdited
        ? edu.place
        : edu.placeId !== ""
        ? intl.formatMessage({ id: edu.placeId })
        : "",
      text1: edu.text1Edited
        ? edu.text1
        : edu.text1Id !== ""
        ? intl.formatMessage({ id: edu.text1Id })
        : "",
      text2: edu.text2Edited
        ? edu.text2
        : edu.text2Id !== ""
        ? intl.formatMessage({ id: edu.text2Id })
        : "",
    }));
  }, [educations, intl]);

  const [certifications, setCertifications] = useState(certificationsData);
  const translatedCertifications = useMemo(() => {
    return certifications.map((cert) => ({
      ...cert,
    }));
  }, [certifications]);

  const [honorsAndAwards, setHonorsAndAwards] = useState(honorsAndAwardsData);
  const translatedHonorsAndAwards = useMemo(() => {
    return honorsAndAwards.map((honor) => ({
      ...honor,
      title: honor.titleEdited
        ? honor.title
        : honor.titleId !== ""
        ? intl.formatMessage({ id: honor.titleId })
        : "",
      text: honor.textEdited
        ? honor.text
        : honor.textId !== ""
        ? intl.formatMessage({ id: honor.textId })
        : "",
    }));
  }, [honorsAndAwards, intl]);

  const [otherInfo, setOtherInfo] = useState(otherInfoData);
  const translatedOtherInfo = useMemo(() => {
    return otherInfo.map((info) => ({
      ...info,
      text: info.textEdited
        ? info.text
        : info.textId !== ""
        ? intl.formatMessage({ id: info.textId })
        : "",
    }));
  }, [otherInfo, intl]);

  const handleChangeSectionTitle = (sectionId, newTitle) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === "section-" + sectionId
          ? { ...section, title: newTitle, titleEdited: true }
          : section
      )
    );
  };

  const handleOnRemoveSection = (id) => {
    setSections(sections.filter((s) => s.id !== id));
  };

  return (
    <div className="main__right__body">
      {translatedSections.map(({ id, displayTitle }) => (
        <div key={`section-${id}`} className="section">
          <EditableSection
            isEditable={isEditable}
            bigSection={true}
            onRemove={() => handleOnRemoveSection(id)}
          >
            {id === "section-experience" && (
              <Experience
                title={displayTitle}
                isEditable={isEditable}
                experiences={translatedExperiences}
                setExperiences={setExperiences}
                onChangeTitle={(sectionId, newTitle) =>
                  handleChangeSectionTitle(sectionId, newTitle)
                }
              />
            )}
            {id === "section-education" && (
              <Education
                title={displayTitle}
                isEditable={isEditable}
                educations={translatedEducations}
                setEducations={setEducations}
                onChangeTitle={(sectionId, newTitle) =>
                  handleChangeSectionTitle(sectionId, newTitle)
                }
              />
            )}
            {id === "section-certifications" && (
              <Certification
                title={displayTitle}
                isEditable={isEditable}
                certifications={translatedCertifications}
                setCertifications={setCertifications}
                onChangeTitle={(sectionId, newTitle) =>
                  handleChangeSectionTitle(sectionId, newTitle)
                }
              />
            )}
            {id === "section-honors-and-awards" && (
              <HonorAndAward
                title={displayTitle}
                isEditable={isEditable}
                honorsAndAwards={translatedHonorsAndAwards}
                setHonorsAndAwards={setHonorsAndAwards}
                onChangeTitle={(sectionId, newTitle) =>
                  handleChangeSectionTitle(sectionId, newTitle)
                }
              />
            )}
            {id === "section-other-info" && (
              <OtherInfo
                title={displayTitle}
                isEditable={isEditable}
                otherInfo={translatedOtherInfo}
                setOtherInfo={setOtherInfo}
                onChangeTitle={(sectionId, newTitle) =>
                  handleChangeSectionTitle(sectionId, newTitle)
                }
              />
            )}
          </EditableSection>
        </div>
      ))}
    </div>
  );
};

export default MainSection;
