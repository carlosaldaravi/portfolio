import { Dispatch, SetStateAction } from "react";
import { useIntl } from "react-intl";
import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";
import { PlusIcon } from "@heroicons/react/24/outline";

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
  const handleCertificationChange = (updatedCertification: CertificationData) => {
    setCertifications((prevCertifications) =>
      prevCertifications.map((cert) =>
        cert.id === updatedCertification.id ? updatedCertification : cert
      )
    );
  };

  const handleCertificationText = (id: string, text: string) => {
    setCertifications((prevCertifications) =>
      prevCertifications.map((cert) =>
        cert.id === id ? { ...cert, hours: text } : cert
      )
    );
  };

  const handleOnRemoveCertification = (id: string) => {
    setCertifications(certifications.filter((cert) => cert.id !== id));
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
            onChange={(updated) =>
              handleCertificationChange(updated as CertificationData)
            }
            isEditable={isEditable}
          >
            <PrettyParagraph
              text={cert.hours + intl.formatMessage({ id: "hours" })}
              onChangeText={(text) => handleCertificationText(cert.id, text)}
              isEditable={isEditable}
            />
          </TimeLineEvent>
        </EditableSection>
      ))}
      {isEditable && (
        <div
          className="w-full h-12 flex justify-center items-center border border-dashed cursor-pointer"
          onClick={() =>
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
            ])
          }
        >
          <span>
            <PlusIcon className="w-12 h-12 stroke-green-600" />
          </span>
        </div>
      )}
    </CurriculumSection>
  );
};

export default Certification;
