import { useIntl } from "react-intl";
import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";
import { PlusIcon } from "@heroicons/react/24/outline";

const Certification = ({
  title,
  isEditable,
  certifications,
  setCertifications,
  onChangeTitle,
}) => {
  const intl = useIntl();
  const handleCertificationChange = (updatedCertification) => {
    setCertifications((prevCertifications) =>
      prevCertifications.map((cert) =>
        cert.id === updatedCertification.id ? updatedCertification : cert
      )
    );
  };

  const handleCertificationText = (id, text) => {
    setCertifications((prevCertifications) =>
      prevCertifications.map((cert) =>
        cert.id === id ? { ...cert, hours: text } : cert
      )
    );
  };

  const handleOnRemoveCertification = (id) => {
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
            onChange={handleCertificationChange}
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
