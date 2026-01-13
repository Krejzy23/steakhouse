import MenuItem from "./MenuItem";

const MenuSection = ({ title, items }) => {
  if (!Array.isArray(items)) return null;

  return (
    <section className="mb-20">
      <h2 className="mb-6 font-serif text-3xl sm:text-4xl uppercase tracking-wide">
        {title}
      </h2>

      {items.map((item, i) => (
        <MenuItem
          key={i}
          grams={item.grams}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </section>
  );
};

export default MenuSection;
