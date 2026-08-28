/**
 * Structural list of the CV's main sections: the id `main-section` switches on
 * to pick a renderer, and the generic i18n label for its title. The content
 * itself lives in the single source of truth, `src/data/cv.data.ts`.
 */
export interface CvSection {
  id: string;
  titleId: string;
  title: string;
  titleEdited: boolean;
}

export const sectionsData: CvSection[] = [
  {
    id: "section-experience",
    titleId: "page.developer.experience",
    title: "",
    titleEdited: false,
  },
  {
    id: "section-education",
    titleId: "page.curriculum.body.education.title",
    title: "",
    titleEdited: false,
  },
  {
    id: "section-certifications",
    titleId: "page.curriculum.body.certifications",
    title: "",
    titleEdited: false,
  },
  {
    id: "section-honors-and-awards",
    titleId: "page.curriculum.body.honorsAndAwards.title",
    title: "",
    titleEdited: false,
  },
  {
    id: "section-other-info",
    titleId: "page.curriculum.body.otherInfo.title",
    title: "",
    titleEdited: false,
  },
];
