import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FormattedMessage } from "react-intl";
import ThemeContext from "@/store/theme-context";

export default function Popup({ isOpen, onClose, title, text }) {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;

  const textColor =
    theme === "dark" ? "text-light-primary" : "text-dark-primary";

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-50"
          >
            <div
              className={`inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl relative ${
                theme === "dark" ? "bg-dark-secondary" : "bg-light-secondary"
              }`}
            >
              <button
                onClick={onClose}
                className={`absolute right-3 top-2 ${textColor}`}
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
              <Dialog.Title
                as="h3"
                className={`text-3xl font-medium tracking-xxs text-gray-900 ${textColor}`}
              >
                {title}
              </Dialog.Title>

              <div className="mt-2">
                <p className={`text-lg font-thin ${textColor}`}>
                  <FormattedMessage id={text} />
                </p>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
