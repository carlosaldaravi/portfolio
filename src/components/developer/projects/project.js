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
import classes from "./project.module.css";

const Project = ({ project, index }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const bgSecondaryColor = getBgSecondaryColor(theme);
  const { isMobile } = useTools();

  return (
    <div
      className={`mx-4 min-h-[40vh] sm:flex sm:border-none shadow-lg sm:shadow-none my-6 sm:my-12 ${
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
        className={`w-full flex items-center justify-center rounded-b-xl sm:rounded-none ${
          index % 2 === 0 ? "sm:rounded-r-xl" : "sm:rounded-l-xl"
        } ${bgSecondaryColor}`}
      >
        <div className="flex flex-col h-full gap-8 p-8">
          <h3 className="text-center w-full tracking-xxs text-5xl font-bold">
            {project.name}
          </h3>

          <p className="flex-grow text-center text-2xl font-extralight">
            <FormattedMessage id={project.description} />
          </p>
          <div className={classes.gridMinMax}>
            {project.stack.map((item) => (
              <div key={item} className="flex justify-center" title={item}>
                <SVG type={SVG_TYPES[item]} />
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-2">
            <Link
              className="w-full"
              href={project.url}
              target={!isMobile ? "_blank" : ""}
            >
              <Button className="w-full">
                <FormattedMessage id="join" />
              </Button>
            </Link>
            <Link
              className="w-full"
              href={project.github.url}
              target={!isMobile ? "_blank" : ""}
            >
              <Button
                className="w-full"
                icon={SVG_TYPES.github}
                disabled={project.github.private}
              >
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
