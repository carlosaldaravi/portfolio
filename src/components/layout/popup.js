import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FormattedMessage } from "react-intl";
import ThemeContext from "@/store/theme-context";
import Portal from "@/hoc/portal";
import SVG from "../svg";

const Popup = ({ isOpen, onClose, title, text, stack, rol }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;

  const textColor =
    theme === "dark" ? "text-light-primary" : "text-dark-primary";

  return (
    <Portal>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto z-50"
          onClose={onClose}
        >
          <div className="popop min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />

            {/* <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span> */}

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-50"
            >
              <div className={`card`}>
                <button
                  onClick={onClose}
                  className={`absolute right-3 top-2 ${textColor}`}
                >
                  <XMarkIcon className="h-8 w-8" />
                </button>
                <div className="mt-2 front">
                  <Dialog.Title
                    as="h3"
                    className={`text-4xl font-medium tracking-xxs text-gray-900 ${textColor}`}
                  >
                    {title}
                  </Dialog.Title>
                  <p
                    className={`my-2 text-lg capitalize font-semibold ${textColor}`}
                  >
                    {rol}
                  </p>
                  <p className={`text-lg font-thin ${textColor}`}>
                    <FormattedMessage id={text} />
                  </p>
                  <div className="mt-4 flex justify-between items-center w-full">
                    {stack.map((item) => (
                      <SVG key={item} type={item}></SVG>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Portal>
  );
};
export default Popup;
