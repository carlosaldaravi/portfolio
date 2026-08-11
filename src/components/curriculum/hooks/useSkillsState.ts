import { useMemo } from "react";
import { useIntl } from "react-intl";
import { getPersonalSkillsData } from "@/data/cv.data";
import { usePersistentState } from "./usePersistentState";

interface SkillItem {
  id: string;
  skill: string;
  skillEdited: boolean;
  color?: string;
  size: string;
  head?: boolean;
  top?: string;
  left?: string;
}

interface TranslatedSkillItem extends SkillItem {
  displaySkill: string;
}

interface SkillSection {
  id: string;
  titleId: string;
  title: string;
  titleEdited: boolean;
  data: SkillItem[];
}

export interface TranslatedSkillSection extends Omit<SkillSection, "data"> {
  displayTitle: string;
  data: TranslatedSkillItem[];
}

interface UseSkillsStateReturn {
  translatedSkills: TranslatedSkillSection[];
  handleSkillChange: (sectionId: string, skillId: string, newName: string) => void;
  handleChangeTitle: (id: string, newTitle: string) => void;
  handleRemoveBubble: (sectionId: string, skillId: string) => void;
  handleRemoveSection: (id: string) => void;
}

const useSkillsState = (): UseSkillsStateReturn => {
  const intl = useIntl();
  const [skills, setSkills] = usePersistentState<SkillSection[]>(
    `skills:${intl.locale}`,
    () => getPersonalSkillsData(intl.locale) as SkillSection[]
  );

  const translatedSkills: TranslatedSkillSection[] = useMemo(() => {
    return skills.map((section) => ({
      ...section,
      displayTitle: section.titleEdited
        ? section.title
        : intl.formatMessage({ id: section.titleId }),
      data: section.data.map((item) => ({
        ...item,
        displaySkill: item.skillEdited
          ? item.skill
          : intl.formatMessage({ id: item.skill }),
      })),
    }));
  }, [skills, intl]);

  const handleSkillChange = (sectionId: string, skillId: string, newName: string) => {
    setSkills((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              data: section.data.map((item) =>
                item.id === skillId
                  ? { ...item, skill: newName, skillEdited: true }
                  : item
              ),
            }
          : section
      )
    );
  };

  const handleChangeTitle = (id: string, newTitle: string) => {
    setSkills((prev) =>
      prev.map((section) =>
        section.id === id
          ? { ...section, title: newTitle, titleEdited: true }
          : section
      )
    );
  };

  const handleRemoveBubble = (sectionId: string, skillId: string) => {
    setTimeout(() => {
      setSkills((prev) =>
        prev.map((section) =>
          section.id === sectionId
            ? {
                ...section,
                data: recalculateBubblePositions(
                  sectionId,
                  section.data.filter((item) => item.id !== skillId)
                ),
              }
            : section
        )
      );
    }, 200);
  };

  const recalculateBubblePositions = (sectionId: string, bubbles: SkillItem[]): SkillItem[] => {
    const center =
      sectionId === "personal-skill" ? { x: 28, y: 28 } : { x: 33, y: 30 };
    const radius = sectionId === "personal-skill" ? 48 : 40;

    const nonHeadCount = bubbles.filter((bubble) => !bubble.head).length;
    const angleStep = (2 * Math.PI) / nonHeadCount;

    // Use a counter over non-head bubbles (not the array index, which includes
    // the head) so the remaining bubbles are spread evenly around the circle.
    let nonHeadIndex = 0;
    return bubbles.map((bubble) => {
      if (bubble.head) return bubble;
      const angle = nonHeadIndex * angleStep;
      nonHeadIndex += 1;
      return {
        ...bubble,
        top: `${center.y + radius * Math.sin(angle)}%`,
        left: `${center.x + radius * Math.cos(angle)}%`,
      };
    });
  };

  const handleRemoveSection = (id: string) => {
    setSkills((prev) => prev.filter((section) => section.id !== id));
  };

  return {
    translatedSkills,
    handleSkillChange,
    handleChangeTitle,
    handleRemoveBubble,
    handleRemoveSection,
  };
};

export default useSkillsState;
