"use client";

import OverlayCards from "@/components/about/overlay-cards";
import AboutHeader from "@/components/about/header";
import Page from "@/components/UI/page";

export default function AboutContent() {
  const cards = [
    {
      name: "page.about.kitesurfCardTitle",
      text: "page.about.kitesurfCard",
      img: "bg-[url('/images/kitesurf-img.jpg')]",
      before: "before:bg-[url('/images/kitesurf-img.jpg')]",
    },
    {
      name: "page.about.instructorCardTitle",
      text: "page.about.instructorCard",
      img: "bg-[url('/images/instructor.jpeg')]",
      before: "before:bg-[url('/images/instructor.jpeg')]",
    },
    {
      name: "page.about.paddleCardTitle",
      text: "page.about.paddleCard",
      img: "bg-[url('/images/yo-padel.png')]",
      before: "before:bg-[url('/images/yo-padel.png')]",
    },
    {
      name: "page.about.cineCardTitle",
      text: "page.about.cineCard",
      img: "bg-[url('/images/films.png')]",
      before: "before:bg-[url('/images/films.png')]",
    },
  ];

  return (
    <Page>
      <AboutHeader />
      <OverlayCards cards={cards} />
    </Page>
  );
}
