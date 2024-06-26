const SidebarSection = ({ title, children }) => {
  return (
    <section className="body__info">
      <h2 className="body__info__title capitalize">{title}</h2>
      {children}
    </section>
  );
};

export default SidebarSection;
