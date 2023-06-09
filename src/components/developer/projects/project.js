import { FormattedMessage } from "react-intl";
import Image from "next/image";
import SVG from "@/components/svg";
import { SVG_TYPES } from "@/types/svg";
import { useContext } from "react";
import ThemeContext from "@/store/theme-context";
import Button from "@/components/UI/button";
import Link from "next/link";
import { useTools } from "@/hooks/useTools";
import { getBgSecondaryColor } from "@/tools/theme";

const Project = ({ project, index }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const bgSecondaryColor = getBgSecondaryColor(theme);
  const { isMobile } = useTools();

  return (
    <div
      className={`min-h-[40vh] sm:flex sm:border-none shadow-lg sm:shadow-none p-4 my-12 sm:my-40 ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } `}
    >
      <Image
        className={`mx-auto sm:w-1/2 rounded-t-xl sm:rounded-none ${
          index % 2 === 0 ? "sm:rounded-l-xl" : "sm:rounded-r-xl"
        }`}
        src={project.img}
        alt="project image"
        width={1200}
        height={800}
        style={{ objectFit: "cover" }}
      />

      <div
        className={`w-full flex items-center mx-auto rounded-b-xl sm:rounded-none ${
          index % 2 === 0 ? "sm:rounded-r-xl" : "sm:rounded-l-xl"
        } ${bgSecondaryColor}`}
      >
        <div className="sm:w-[30rem] mx-auto mt-10 sm:mt-0">
          <h3 className="text-center w-full tracking-xxs mb-12 text-5xl font-bold">
            {project.name}
          </h3>

          <p className="text-center text-2xl font-extralight">
            <FormattedMessage id={project.description} />
          </p>
          <div className="flex mt-12">
            {project.stack.map((item) => (
              <div key={item} className="mx-auto self-center">
                <SVG type={SVG_TYPES[item]} />
              </div>
            ))}
          </div>
          <div className="w-full px-6 mb-4 inline-block">
            <Link href={project.url} target={!isMobile ? "_blank" : ""}>
              <Button className="mt-12 w-full">
                <FormattedMessage id="show" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
