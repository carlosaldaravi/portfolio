import CardsSection from "../../../components/UI/cards-section";
import NewsCard from "./news-card";

const NewsCards = ({ news }) => {
  console.log("news: ", news);
  return (
    <CardsSection>
      {news.map((n) => (
        <NewsCard key={n.source} newsItem={n} />
      ))}
    </CardsSection>
  );
};

export default NewsCards;
