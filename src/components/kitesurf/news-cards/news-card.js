import { FormattedMessage } from "react-intl";
import Link from "next/link";

const NewsCard = ({ newsItem }) => {
  const bgImage = {
    backgroundImage: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.95)
      ),
      url("${newsItem.img}")
      `,
  };

  return (
    <Link
      href={newsItem.url}
      rel="noopener noreferrer"
      target="_blank"
      className="card-container"
    >
      <div className="card">
        <div className={`card-img`} style={bgImage}></div>
        <div className="card-img-hovered" style={bgImage}></div>
        <div className="card-info">
          <div className="card-about">
            <a className="card-tag tag-news">
              <FormattedMessage id="page.kitesurf.news" />
            </a>
            <div>{newsItem.date}</div>
          </div>
          <h3 className="card-title text-2xl">{newsItem.title}</h3>
          <div className="card-source">
            <FormattedMessage id="by" /> {newsItem.source}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
