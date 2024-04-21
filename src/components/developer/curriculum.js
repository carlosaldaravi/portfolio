import SectionTitle from "@/components/UI/section-title";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import SVG from "../svg";

const Curriculum = () => {
  return (
    <>
      <SectionTitle
        title="page.developer.curriculum"
        className="my-12 section-title-big-vars"
      />
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="cursor-pointer flex justify-center items-center gap-8">
          <Link
            href={`/curriculum`}
            className="cursor-pointer flex flex-col justify-center items-center gap-8"
          >
            <h3 className="text-4xl">
              <FormattedMessage id="show" /> PDF
            </h3>
            <SVG type={"document"} size={48} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
