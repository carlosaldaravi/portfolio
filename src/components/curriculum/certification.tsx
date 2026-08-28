import { Dispatch, SetStateAction } from "react";
import { useIntl } from "react-intl";
import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";
import AddItemButton from "./add-item-button";
import { patchById, removeById, replaceById } from "./item-list";

interface CertificationData {
  id: string;
  date: string;
  title: string;
  place: string;
  hours: string;
  hoursEdited?: boolean;
}

interface CertificationProps {
  title: string;
  isEditable: boolean;
  certifications: CertificationData[];
  setCertifications: Dispatch<SetStateAction<CertificationData[]>>;
  onChangeTitle: (sectionId: string, newTitle: string) => void;
}

const Certification = ({
  title,
  isEditable,
  certifications,
  setCertifications,
  onChangeTitle,
}: CertificationProps) => {
  const intl = useIntl();
  const hoursLabel = intl.formatMessage({ id: "hours" });

  const handleCertificationChange = (updatedCertification: CertificationData) => {
    setCertifications((prev) => replaceById(prev, updatedCertification));
  };

  const handleCertificationText = (id: string, text: string) => {
    // The paragraph shows "<hours> <label>" but `hours` must store only the
    // number — strip a trailing label so editing doesn't append it twice
    // ("25 horashoras"). The label comes from the translations, so escape it
    // before it becomes a pattern.
    const escapedLabel = hoursLabel.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const hours = text.replace(new RegExp(`\\s*${escapedLabel}\\s*$`), "").trim();
    setCertifications((prev) => patchById(prev, id, { hours, hoursEdited: true }));
  };

  const handleOnRemoveCertification = (id: string) => {
    setCertifications((prev) => removeById(prev, id));
  };

  const handleAddCertification = () => {
    setCertifications((prev) => [
      ...prev,
      {
        id: `cert-${prev.length + 1}`,
        date: "",
        title: "",
        place: "",
        hours: "",
        hoursEdited: false,
      },
    ]);
  };

  return (
    <CurriculumSection
      title={title}
      isEditable={isEditable}
      onChangeSectionTitle={(newTitle) => {
        onChangeTitle("certifications", newTitle);
      }}
    >
      {certifications.map((cert) => (
        <EditableSection
          key={cert.id}
          isEditable={isEditable}
          bigSection={false}
          onRemove={() => handleOnRemoveCertification(cert.id)}
        >
          <TimeLineEvent
            item={cert}
            onChange={handleCertificationChange}
            isEditable={isEditable}
          >
            <PrettyParagraph
              text={`${cert.hours} ${hoursLabel}`}
              onChangeText={(text) => handleCertificationText(cert.id, text)}
              isEditable={isEditable}
            />
          </TimeLineEvent>
        </EditableSection>
      ))}
      {isEditable && (
        <AddItemButton
          onAdd={handleAddCertification}
          label={intl.formatMessage({ id: "addEntry" })}
        />
      )}
    </CurriculumSection>
  );
};

export default Certification;
