/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CV — SINGLE SOURCE OF TRUTH  (edit THIS file to make the CV yours)
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Everything the CV shows lives here: name, profession, contact, languages,
 * skills, experience, education, certifications, awards and the "other info"
 * blurb. Change the values below and the whole /curriculum page (and its PDF)
 * updates — no need to touch components or the translation files.
 *
 * Bilingual fields are written as `{ es, en }` pairs so the CV reads correctly
 * in both languages. Language-invariant data (emails, dates, star levels,
 * bubble colours/positions) is a plain value.
 *
 * The generic UI labels (section titles like "Experience", the field labels
 * "Email"/"Website", "present", "hours", star captions) stay in
 * `src/lang/{es,en}.json` — you normally don't need to touch those.
 *
 * See `docs/guides/CV_TEMPLATE.md` for a step-by-step "make it yours" guide.
 */

export type Localized = { es: string; en: string };

const pick = (v: Localized | string, locale: string): string =>
  typeof v === "string" ? v : v[locale === "en" ? "en" : "es"];

// ─── Identity ──────────────────────────────────────────────────────────────
const IDENTITY = {
  name: "Carlos",
  surname: "Aldaravi",
  profession: { es: "Desarrollador Web & Apps", en: "Web & Apps Developer" } as Localized,
};

// ─── Sidebar: contact ────────────────────────────────────────────────────────
// `labelId` is a generic i18n label (Website/Address/Email/GitHub). `value` is
// yours. Add/remove entries freely.
const CONTACT = [
  { id: "p-info-website", labelId: "page.curriculum.sidebar.website", value: "https://carlosaldaravi.com" },
  { id: "p-info-address", labelId: "page.curriculum.sidebar.address", value: "Elche, Alicante" },
  { id: "p-info-linkedin", labelId: "page.curriculum.sidebar.linkedin", value: "linkedin.com/in/carlos-aldaravi" },
  { id: "p-info-email", labelId: "page.curriculum.sidebar.email", value: "carlosaldaravi@gmail.com" },
  { id: "p-info-github", labelId: "page.curriculum.sidebar.github", value: "github.com/carlosaldaravi" },
];

// ─── Sidebar: languages ──────────────────────────────────────────────────────
// `languageId` is a generic i18n label; `starsFilled` is 1..5.
const LANGUAGES = [
  { id: "lang-1", languageId: "spanish", starsFilled: 5 },
  { id: "lang-2", languageId: "english", starsFilled: 4 },
  { id: "lang-3", languageId: "catalonian", starsFilled: 3 },
];

// ─── Sidebar: skill bubbles ──────────────────────────────────────────────────
// `head` is the big central bubble. `color`/`size`/`top`/`left` lay the cloud
// out (tweak visually). Personal-skill labels are bilingual; programming
// labels are brand names (same in both languages).
const SKILLS = [
  {
    id: "personal-skill",
    titleId: "page.curriculum.sidebar.personalSkills",
    data: [
      { id: "personal-skill-1", label: { es: "Trabajo en equipo", en: "Teamwork" }, color: "blue-500", size: "12rem", head: true },
      { id: "personal-skill-2", label: { es: "Responsabilidad", en: "Responsibility" }, color: "blue-800", size: "9.5rem", top: "-14%", left: "-14%" },
      { id: "personal-skill-3", label: { es: "Compromiso", en: "Commitment" }, color: "green-500", size: "7.8rem", top: "-25%", left: "35%" },
      { id: "personal-skill-4", label: { es: "Proactividad", en: "Proactivity" }, color: "orange-500", size: "5em", top: "10%", left: "73%" },
      { id: "personal-skill-5", label: { es: "Adaptabilidad", en: "Adaptability" }, color: "red-500", size: "8rem", top: "63%", left: "-8%" },
      { id: "personal-skill-6", label: { es: "Aprendizaje rápido", en: "Quick Learning" }, color: "pink-500", size: "7rem", top: "52%", left: "75%" },
      { id: "personal-skill-7", label: { es: "Resolución problemas", en: "Problem Solving" }, color: "green-900", size: "7.5rem", top: "78%", left: "40%" },
    ],
  },
  {
    id: "programming-skill",
    titleId: "page.curriculum.sidebar.programming",
    data: [
      { id: "programming-skill-1", label: "react", color: "blue-500", size: "12rem", head: true },
      { id: "programming-skill-2", label: "angular", size: "5.3rem", top: "25%", left: "-3%" },
      { id: "programming-skill-3", label: "css", size: "4.7rem", top: "82%", left: "22%" },
      { id: "programming-skill-4", label: "node", size: "4.9rem", top: "58%", left: "69%" },
      { id: "programming-skill-5", label: "sql", size: "4.7rem", top: "-2%", left: "60%" },
      { id: "programming-skill-6", label: "html", size: "4.9rem", top: "-15%", left: "29%" },
      { id: "programming-skill-7", label: "vue", size: "4.6rem", top: "60%", left: "7%" },
      { id: "programming-skill-8", label: "tailwind", size: "5.5rem", top: "80%", left: "50%" },
      { id: "programming-skill-9", label: "laravel", size: "5rem", top: "28%", left: "72%" },
      { id: "programming-skill-10", label: "git", size: "4.8rem", top: "4%", left: "7%" },
    ],
  },
];

// ─── Main: experience ────────────────────────────────────────────────────────
// A date ending in "- " renders as "… - present". `title`/`text` are bilingual.
const EXPERIENCE = [
  {
    id: "experience-1", order: 1, date: "01/2025 - ",
    title: { es: "CEO & Founder", en: "CEO & Founder" }, place: "Padeldoor Software SL",
    text: {
      es: "Fundador y CEO de Padeldoor Software SL. Creación de la única app diseñada exclusivamente para pádel: una red social deportiva con sistema de ranking ELO, gestión automatizada de torneos y ligas, organización de partidos y perfiles públicos con estadísticas. Liderazgo completo del producto desde la idea hasta su lanzamiento y monetización.",
      en: "Founder and CEO of Padeldoor Software SL. Built the only app designed exclusively for padel: a sports social network featuring an ELO ranking system, automated tournament and league management, match organization, and public player profiles with statistics. Full product leadership from concept to launch and monetization.",
    },
  },
  {
    id: "experience-2", order: 2, date: "01/2023 - 05/2026",
    title: { es: "Desarrollador Full-Stack", en: "Full-Stack Developer" }, place: "Surfr. (Freelance)",
    text: {
      es: "Desarrollo full-stack como autónomo para Surfr., app holandesa de seguimiento de rendimiento en kitesurf, windsurf y wing con detección automática de saltos, previsión meteorológica y ranking social, usada por más de 150.000 riders en más de 120 países. Trabajé con React Native, TypeScript, Java y PostgreSQL.",
      en: "Full-stack freelance developer for Surfr., a Dutch app that tracks kitesurf, windsurf and wing performance with automatic jump detection, weather forecasting and social leaderboards, used by over 150,000 riders across 120+ countries. Worked with React Native, TypeScript, Java and PostgreSQL.",
    },
  },
  {
    id: "experience-3", order: 3, date: "08/2023 - 01/2025",
    title: { es: "Líder Técnico", en: "Tech Lead" }, place: "EVM Group",
    text: {
      es: "Trabajando como Full-Stack senior en el grupo EVM desempeñando el rol de lider técnico en tamiz.es",
      en: "Working as a Full-Stack senior in the EVM group playing the role of technical leader in tamiz.es",
    },
  },
  {
    id: "experience-4", order: 4, date: "04/2021 - 01/2023",
    title: { es: "Desarrollador Full-Stack", en: "Full-Stack Developer" }, place: "Inbenta",
    text: {
      es: "Creación de microservicios, soporte e implementación de nuevas funcionalidades a clientes, metodología ágil. JavaScript y VueJS en el Frontend y PHP en el Backend.",
      en: "Implementation of microservices, new features and support to clients. JavaScript and VueJS on Frontend and PHP on Backend.",
    },
  },
  {
    id: "experience-5", order: 5, date: "08/2020 - 04/2021",
    title: { es: "Desarrollador Backend", en: "Backend Developer" }, place: "Z1",
    text: {
      es: "Migración de proyecto con más de un millón de descargas en la App Store. Mi misión principal fue añadir tipado ya que el proyecto fue creado en JavaScript y con la migración se pasó a TypeScript.",
      en: "Migration of a project with more than one million downloads on the App Store. My main mission was to add typing since the project was created in JavaScript and with the migration it was moved to TypeScript.",
    },
  },
  {
    id: "experience-6", order: 6, date: "07/2018 - 07/2020",
    title: { es: "Desarrollador Full-Stack", en: "Full-Stack Developer" }, place: "Conwork",
    text: {
      es: "Creación y soporte de CRM's a empresas de transportes. Usábamos PHP pero hicimos algunos proyectos en los que tuve que utilizar también Angular, Vue y Node.",
      en: "Creation and support of CRM's for transportation companies. We used PHP but I also had to use Angular, Vue, and Node for some projects.",
    },
  },
];

// ─── Main: education ─────────────────────────────────────────────────────────
const EDUCATION = [
  {
    id: "education-1", date: "2015 - 2019",
    title: { es: "Ingeniero Multimedia", en: "Multimedia Engineer" },
    place: { es: "Universidad de Alicante", en: "University of Alicante" },
    text1: {
      es: "Trabajo de Fin de Grado: Creé una Progressive Web App (PWA) para una escuela de deportes acuáticos. Utilicé VueJS y Tailwind para el frontend, y NestJS para el backend, con PostgreSQL como base de datos. Implementé CI/CD, con el backend alojado en Heroku y el frontend en Netlify. ocean-platform.netlify.app",
      en: "Final Degree Project: I created a Progressive Web App (PWA) for a water sports school. I used VueJS and Tailwind for the frontend, and NestJS in NodeJS for the backend, with PostgreSQL as the database. Implemented CI/CD, with the backend hosted on Heroku and the frontend on Netlify. ocean-platform.netlify.app",
    },
    text2: {
      es: "Último año universitario: Desarrollamos una aplicación similar a Infojobs en un equipo de cinco personas. kwee.ovh",
      en: "Final Year of University: We developed an application similar to Infojobs in a team of five. kwee.ovh",
    },
    gpa: "7,8/10",
  },
];

// ─── Main: certifications ────────────────────────────────────────────────────
// `hours` is just the number; the "hours"/"horas" suffix is added by the UI.
const CERTIFICATIONS = [
  { id: "cert-1", date: "04/2023", title: "Next.js and React - The Complete Guide", place: "Udemy", hours: "25" },
  { id: "cert-2", date: "02/2023", title: "React - The Complete Guide (incl Hooks, React Router, Redux)", place: "Udemy", hours: "58.5" },
  { id: "cert-3", date: "12/2022", title: "Mastering React", place: "CodewithMosh", hours: "13" },
  { id: "cert-4", date: "12/2020", title: "Professional Git y Github course", place: "Platzi", hours: "6" },
  { id: "cert-5", date: "03/2020", title: "NestJS: Zero to Hero - Modern TypeScript back-end development", place: "Platzi", hours: "6.5" },
  { id: "cert-6", date: "01/2019", title: "Angular: real time applications with Sockets and REST", place: "Udemy", hours: "8" },
  { id: "cert-7", date: "11/2018", title: "TypeScript", place: "Udemy", hours: "6.5" },
  { id: "cert-8", date: "11/2018", title: "Node: from 0 to expert", place: "Udemy", hours: "11.5" },
  { id: "cert-9", date: "08/2018", title: "Git + GitHub", place: "Udemy", hours: "7" },
];

// ─── Main: honors & awards ───────────────────────────────────────────────────
const AWARDS = [
  {
    id: "award-1", date: "10/2017",
    title: { es: "Premio", en: "Award" }, place: "Hackaton",
    text: {
      es: "Por la empresa Dinapsis al proyecto realizado en grupo en el Hackatón de Turismo que organizó la Universidad de Alicante en la sede de Torrevieja.",
      en: "By the company Dinapsis to the project carried out in group in the Hackaton of Tourism that made the University of Alicante in the headquarters of Torrevieja.",
    },
  },
  {
    id: "award-2", date: "03/2017",
    title: { es: "Premio", en: "Award" }, place: "Hack for good",
    text: {
      es: "Por la empresa AdSalsa al proyecto realizado en grupo en el Hack For Good organizado por la Universidad de Alicante junto con Telefónica.",
      en: "By the company AdSalsa to the project carried out in group in the Hack For Good organized by the University of Alicante together with Telefónica.",
    },
  },
];

// ─── Main: other info ────────────────────────────────────────────────────────
const OTHER_INFO = {
  es: "Soy una persona a la que le gusta aprender y superar retos, apasionado por las nuevas tecnologías y la era digital. Me gustan los deportes, especialmente aquellos que tienen que ver con el mar y la navegación. También me gusta viajar y conocer nuevos lugares, personas y culturas. Durante los años que he trabajado como instructor de kitesurf, he podido viajar a muchos países del mundo. Me apasiona el mar y el kitesurf es mi afición favorita. Me gustaría y tengo la capacidad de aprender nuevas habilidades y nuevos idiomas, el conocimiento es todo. Realmente disfruto programando en Javascript y especialmente con cualquiera de sus frameworks como Vue, React o Angular.",
  en: "I am a person who likes to learn and overcome challenges, passionate about new technologies and the digital age. I like sports, especially those that have to do with the sea and sailing. I also like to travel and meet new places, people and cultures. During the years I've been working as a kitesurf instructor I've been able to travel to a lot of countries in the world. I'm passionate about the sea and kitesurfing is my favourite hobby. I would like and I'm able to learn new skills and new languages, knowledge is everything. I really enjoy programming Javascript and especially with any of its frameworks Vue, React or Angular.",
};

// ─────────────────────────────────────────────────────────────────────────────
//  Adapters: resolve the config for a locale into the shapes the components
//  consume. Text is filled as a LITERAL with an empty `*Id`, so
//  `useTranslatedData` renders it directly (no i18n lookup) while keeping the
//  edit-mode contract intact.
// ─────────────────────────────────────────────────────────────────────────────

export const getIdentity = (locale: string) => ({
  name: IDENTITY.name,
  surname: IDENTITY.surname,
  profession: pick(IDENTITY.profession, locale),
});

export const getPersonalInfoData = () =>
  CONTACT.map((c) => ({
    id: c.id,
    titleId: c.labelId,
    title: "",
    text: c.value,
    titleEdited: false,
    textEdited: false,
  }));

export const getPersonalLanguagesData = () =>
  LANGUAGES.map((l) => ({
    id: l.id,
    languageId: l.languageId,
    language: "",
    languageEdited: false,
    starsFilled: l.starsFilled,
  }));

export const getPersonalSkillsData = (locale: string) =>
  SKILLS.map((section) => ({
    id: section.id,
    titleId: section.titleId,
    title: "",
    titleEdited: false,
    data: section.data.map((b) => ({
      id: b.id,
      // Literal skill with skillEdited:true so useTranslatedData renders it
      // verbatim (the field's idKey and valueKey are both "skill").
      skill: pick(b.label, locale),
      skillEdited: true,
      color: b.color,
      size: b.size,
      ...(("top" in b) ? { top: b.top } : {}),
      ...(("left" in b) ? { left: b.left } : {}),
      ...(("head" in b) ? { head: b.head } : {}),
    })),
  }));

export const getExperiencesData = (locale: string) =>
  EXPERIENCE.map((e) => ({
    id: e.id,
    order: e.order,
    date: e.date,
    dateEdited: false,
    titleId: "",
    title: pick(e.title, locale),
    titleEdited: false,
    place: e.place,
    placeEdited: false,
    textId: "",
    text: pick(e.text, locale),
    textEdited: false,
  }));

export const getEducationsData = (locale: string) =>
  EDUCATION.map((e) => ({
    id: e.id,
    date: e.date,
    dateEdited: false,
    titleId: "",
    title: pick(e.title, locale),
    titleEdited: false,
    placeId: "",
    place: pick(e.place, locale),
    placeEdited: false,
    text1Id: "",
    text1: pick(e.text1, locale),
    text1Edited: false,
    text2Id: "",
    text2: pick(e.text2, locale),
    text2Edited: false,
    gpa: e.gpa,
    gpaEdited: false,
  }));

export const getCertificationsData = () =>
  CERTIFICATIONS.map((c) => ({ ...c }));

export const getHonorsAndAwardsData = (locale: string) =>
  AWARDS.map((a) => ({
    id: a.id,
    date: a.date,
    titleId: "",
    title: pick(a.title, locale),
    titleEdited: false,
    place: a.place,
    textId: "",
    text: pick(a.text, locale),
    textEdited: false,
  }));

export const getOtherInfoData = (locale: string) => [
  { id: "info-1", textId: "", text: pick(OTHER_INFO, locale), textEdited: false },
];
