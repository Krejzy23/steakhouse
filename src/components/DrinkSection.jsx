import DrinkItem from "./DrinkItem";

const DrinkSection = ({ title, items }) => {
  if (!Array.isArray(items)) return null;

  return (
    <section className="mb-2">
      <div className="flex flex-col items-center">
        <h2 className="mb-2 font-[robert-medium] text-2xl md:text-4xl uppercase tracking-wide">
          {title}
        </h2>
        <div className="h-px w-2/3 bg-black/30" />
      </div>

      {items.map((item, i) => (
        <DrinkItem
          key={i}
          vols={item.vols}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </section>
  );
};

export default DrinkSection;
