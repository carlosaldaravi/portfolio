import OverlayCards from "@/components/about/overlay-cards";
import AboutHeader from "@/components/about/header";
import Page from "@/components/UI/page";

const About = () => {
  const cards = [
    {
      name: "page.about.kitesurfCardTitle",
      text: "page.about.kitesurfCard",
      img: "bg-[url('/kitesurf-img.jpg')]",
      before: "before:bg-[url('/kitesurf-img.jpg')]",
    },
    {
      name: "page.about.instructorCardTitle",
      text: "page.about.instructorCard",
      img: "bg-[url('/instructor.jpeg')]",
      before: "before:bg-[url('/instructor.jpeg')]",
    },
    {
      name: "page.about.padelCardTitle",
      text: "page.about.padelCard",
      img: "bg-[url('/yo-padel.png')]",
      before: "before:bg-[url('/yo-padel.png')]",
    },
    {
      name: "page.about.gamesCardTitle",
      text: "page.about.gamesCard",
      img: "bg-[url('/game.jpeg')]",
      before: "before:bg-[url('/game.jpeg')]",
    },
    {
      name: "page.about.cineCardTitle",
      text: "page.about.cineCard",
      img: "bg-[url('/films.png')]",
      before: "before:bg-[url('/films.png')]",
    },
  ];

  return (
    <Page>
      <AboutHeader />
      <OverlayCards cards={cards} />
    </Page>
  );
};

export default About;
