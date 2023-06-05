import { FormattedMessage } from "react-intl";

const SectionTitle = ({ title, className, description }) => {
  return (
    <>
      <h3 className={`section-title ${className}`}>{title}</h3>
      {description && (
        <p className="text-center text-xl sm:text-2xl mt-8 text-gray-500">
          <FormattedMessage id={description} />
        </p>
      )}
    </>
  );
};

export default SectionTitle;
