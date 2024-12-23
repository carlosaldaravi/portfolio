import { XMarkIcon } from "@heroicons/react/24/outline";

const SidebarSection = ({
  title,
  isEditable,
  onChangeTitle,
  onRemoveSection,
  children,
}) => {
  return (
    <section className="body__info">
      <div className="flex justify-end">
        {isEditable ? (
          <input
            type="text"
            className="capitalize input_cv_edit"
            value={title}
            onChange={(e) => onChangeTitle(e.target.value)}
            placeholder={title}
          />
        ) : (
          <h2 className="body__info__title capitalize">{title}</h2>
        )}
        {isEditable && (
          <button onClick={() => onRemoveSection(title)} className="ml-2">
            <XMarkIcon className="w-5 h-5 text-red-500" />
          </button>
        )}
      </div>
      {children}
    </section>
  );
};

export default SidebarSection;
