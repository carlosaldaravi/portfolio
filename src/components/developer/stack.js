import SectionTitle from "@/components/UI/section-title";
import SVG from "../svg";
import { SVG_TYPES } from "@/types/svg";

const Stack = ({ stack }) => {
  return (
    <>
      <SectionTitle
        title="page.developer.stack"
        className="section-title-big-vars"
      />
      <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-7 gap-12 max-w-xl sm:max-w-6xl mx-auto">
        {stack.map((s) => (
          <div
            key={s.id}
            className="mx-auto self-center"
            title={s.name}
          >
            <SVG type={SVG_TYPES[s.svg]} className={"opacity-100"} size={"h-24 w-24"} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Stack;
