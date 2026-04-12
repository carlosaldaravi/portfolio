import { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface SidebarSectionProps {
  title: string;
  isEditable: boolean;
  onChangeTitle: (newTitle: string) => void;
  onRemoveSection: (title: string) => void;
  children: ReactNode;
}

const SidebarSection = ({
  title,
  isEditable,
  onChangeTitle,
  onRemoveSection,
  children,
}: SidebarSectionProps) => {
  return (
    <section className="body__info section">
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
