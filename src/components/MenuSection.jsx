import MenuItem from "./MenuItem";

const MenuSection = ({ title, items }) => {
    return (
      <section id={title} className="mb-20 scroll-mt-32">
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
