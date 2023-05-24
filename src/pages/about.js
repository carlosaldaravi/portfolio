import Image from "next/image";
import classes from "./about.module.css";
import { FormattedMessage } from "react-intl";
import OverlayCard from "../components/overlay-card";

const About = () => {
  const cards = [
    {
      name: "kitesurf",
      text: "Me inicié en este deporte en el 2006. Me he especializado en saltos con mucho tiempo de vuelo de tal manera que en julio del 2021, logré un salto considerado como récord mundial en Tarifa. Gracias a él conseguí aparecer en distintos medios como deportes cuatro, las noticias de antena 3 y zapeando de la sexta. Puedes ver este salto en mi sección de kitesurf.",
      img: "bg-[url('/kitesurf.JPG')]",
      before: "before:bg-[url('/kitesurf.JPG')]",
    },
    {
      name: "kite instructor",
      text: "He iniciado en este maravilloso deporte a cientos de alumnos ya que durante 12 años de mi vida he sido instructor de kitesurf.",
      img: "bg-[url('/instructor.jpeg')]",
      before: "before:bg-[url('/instructor.jpeg')]",
    },
    {
      name: "padel",
      text: "Desde 2023 se ha unido un nuevo hobby a mi lista, el pádel. Me encanta el dinamísmo que proporciona este deporte y trabajar en equipo con estrategia para ser capaces de ganar cada punto.",
      img: "bg-[url('/yo-padel.png')]",
      before: "before:bg-[url('/yo-padel.png')]",
    },
    {
      name: "juegos",
      text: "Me considero algo \"friki\" de los juegos. Siempre he preferido los juegos de ordenador a los de consolas. Me gusta jugar al League of Legends, al Counter Strike, al Playerunknown's Battleground. Aunque el CS fue el juego de mis inicios y ahora al que más juego es al LOL.",
      img: "bg-[url('/game.jpeg')]",
      before: "before:bg-[url('/game.jpeg')]",
    },
    {
      name: "cine",
      text: "Me encantan las películas y las series aunque suelo pasar más tiempo viendo series que películas. Mis preferidas son las basadas en hechos reales y las de la segunda guerra mundial.",
      img: "bg-[url('/films.png')]",
      before: "before:bg-[url('/films.png')]",
    },
  ];
  return (
    <div className="h-[70vh]">
      <div className={`${classes.wrapper} mx-auto`}>
        <div className="ml-12 mt-12">
          <div className={`${classes.header} text-2xl sm:text-4xl`}>
            <FormattedMessage id="page.about.title" />
          </div>
        </div>
        <div className={`${classes.right}`}>
          <Image
            src="/yo-dev.JPG"
            alt=""
            width={200}
            height={200}
            className={`float-right translate-x-6 sm:translate-x-14 ${classes.imagen}`}
          />
        </div>
      </div>
      <div
        className={`${classes.content} mx-auto top-24 text-justify sm:text-start z-50`}
      >
        {/* <FormattedMessage id="page.about.description" /> */}
      </div>
      <OverlayCard cards={cards} />
    </div>
  );
};

export default About;
