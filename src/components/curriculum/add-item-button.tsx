import { PlusIcon } from "@heroicons/react/24/outline";

interface AddItemButtonProps {
  onAdd: () => void;
  label: string;
}

/** Dashed "add one more entry" control every editable CV section shares. */
const AddItemButton = ({ onAdd, label }: AddItemButtonProps) => (
  <button
    type="button"
    onClick={onAdd}
    aria-label={label}
    className="w-full h-12 flex justify-center items-center border border-dashed cursor-pointer bg-transparent"
  >
    <PlusIcon className="w-12 h-12 stroke-green-600" />
  </button>
);

export default AddItemButton;
