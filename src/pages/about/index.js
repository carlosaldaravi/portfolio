import OverlayCards from "../../components/about/overlay-cards";
import AboutHeader from "../../components/about/header";

const About = () => {
  const cards = [
    {
      "name": "kitesurf",
      "text": "page.about.kitesurfCard",
      "img": "bg-[url('/kitesurf.JPG')]",
      "before": "before:bg-[url('/kitesurf.JPG')]"
    },
    {
      "name": "kite instructor",
      "text": "page.about.instructorCard",
      "img": "bg-[url('/instructor.jpeg')]",
      "before": "before:bg-[url('/instructor.jpeg')]"
    },
    {
      "name": "padel",
      "text": "page.about.padelCard",
      "img": "bg-[url('/yo-padel.png')]",
      "before": "before:bg-[url('/yo-padel.png')]"
    },
    {
      "name": "juegos",
      "text": "page.about.gamesCard",
      "img": "bg-[url('/game.jpeg')]",
      "before": "before:bg-[url('/game.jpeg')]"
    },
    {
      "name": "cine",
      "text": "page.about.cineCard",
      "img": "bg-[url('/films.png')]",
      "before": "before:bg-[url('/films.png')]"
    }
  ];

  return (
    <section className="mb-10">
      <AboutHeader />
      <OverlayCards cards={cards} />
    </section>
  );
};

export default About;
