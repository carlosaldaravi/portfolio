import OverlayCards from "@/components/about/overlay-cards";
import AboutHeader from "@/components/about/header";
import Page from "@/components/UI/page";
import { useEffect } from "react";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";
import Head from "next/head";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

const About = () => {
  const tracker = useTracker();
  const intl = useIntl();
  const { locale } = useRouter();
  const description = intl.formatMessage({ id: "page.about.description" });
  const title = "Carlos Aldaravi - About";
  const url = "https://carlosaldaravi.com/about";

  useEffect(() => {
    tracker.page(TRACKING_TYPES.page.about);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={locale} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
      </Head>
      <AboutHeader />
      <OverlayCards cards={cards} />
    </Page>
  );
};

export default About;
