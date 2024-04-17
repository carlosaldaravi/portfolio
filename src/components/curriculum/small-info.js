const SmallInfo = ({ title, children }) => {
  return (
    <section className="body__info">
      <h2 className="body__info__title">{title}</h2>
      {children}
    </section>
  );
};

export default SmallInfo;
