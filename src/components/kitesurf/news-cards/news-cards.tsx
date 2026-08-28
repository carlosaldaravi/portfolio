import CardsSection from "@/components/UI/cards-section";
import NewsCard from "./news-card";
import type { NewsItem } from "@/types/kitesurf";

interface NewsCardsProps {
  news: NewsItem[];
}

const NewsCards = ({ news }: NewsCardsProps) => {
  return (
    <CardsSection className="lg:grid-cols-2">
      {news.map((n) => (
        <NewsCard key={n.id} newsItem={n} />
      ))}
    </CardsSection>
  );
};

export default NewsCards;
