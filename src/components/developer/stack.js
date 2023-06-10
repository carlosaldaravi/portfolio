import SectionTitle from "@/components/UI/section-title";
import SVG from "../svg";

const Stack = ({ stack }) => {
  return (
    <>
      <SectionTitle
        title="page.developer.stack"
        description="page.developer.stack.description"
        className="section-title-big-vars"
      />
      <div className="mt-8 grid grid-cols-3 max-w-sm mx-auto">
        {stack.map((s) => (
          <div key={s.id} className="mx-auto self-center scale-105">
            <SVG type={s.svg} size="h-20 w-20" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Stack;
