type PageHeroProps = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-box glass">
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-text">{description}</p>
        </div>
      </div>
    </section>
  );
}