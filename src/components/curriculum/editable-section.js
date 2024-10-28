import { XMarkIcon } from "@heroicons/react/24/outline";

const EditableSection = ({ isEditable, bigSection, onRemove, children }) => {
  return (
    <>
      {isEditable ? (
        <div
          className={`w-full relative flex items-start ${
            isEditable ? "border p-2 space-x-2 mr-1" : "space-x-4"
          }`}
        >
          <div className="text-yellow-400">
            <XMarkIcon
              title="Remove section"
              className={`absolute bg-white cursor-pointer stroke-red-500 ${
                bigSection
                  ? "-top-6 -right-6 size-14"
                  : "-top-4 -right-2 size-8"
              }`}
              onClick={onRemove}
            />
          </div>
          <div>{children}</div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default EditableSection;
