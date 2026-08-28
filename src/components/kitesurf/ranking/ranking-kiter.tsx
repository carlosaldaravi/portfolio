import { getBgSecondaryColor } from "@/tools/theme";
import { useTheme } from "@/store/theme-context";
import type { Kiter } from "@/types/kitesurf";
interface RankingKiterProps {
  kiter: Kiter;
}

const RankingKiter = ({ kiter }: RankingKiterProps) => {
  const { theme } = useTheme();
  const bgSecondaryColor = getBgSecondaryColor(theme);
  return (
    <div
      className={`p-4 grid grid-cols-ranking border-b last:border-0 text-2xl sm:text-3xl bg-opacity-20 ${bgSecondaryColor}`}
    >
      <div className="">{kiter.position}</div>
      <div className="">{kiter.name}</div>
      <div className="">{kiter.height}m</div>
    </div>
  );
};
export default RankingKiter;
