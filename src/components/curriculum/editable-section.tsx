import { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface EditableSectionProps {
  isEditable: boolean;
  bigSection: boolean;
  onRemove: () => void;
  children: ReactNode;
}

const EditableSection = ({
  isEditable,
  bigSection,
  onRemove,
  children,
}: EditableSectionProps) => {
  return (
    <>
      {isEditable ? (
        <div
          className={`w-full relative flex items-start ${
            isEditable ? "border p-2 space-x-2 mr-1" : "space-x-4"
          }`}
        >
          <button
            type="button"
            aria-label="Remove section"
            onClick={onRemove}
            className={`absolute bg-white cursor-pointer border-none p-0 text-yellow-400 ${
              bigSection ? "-top-6 -right-6" : "-top-4 -right-2"
            }`}
          >
            <XMarkIcon
              className={`stroke-red-500 ${bigSection ? "size-14" : "size-8"}`}
            />
          </button>
          <div>{children}</div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default EditableSection;
