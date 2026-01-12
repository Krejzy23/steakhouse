const MenuItem = ({ grams, name, description, price }) => {
    return (
      <div className="py-5 border-b border-black/10">
        {/* TOP ROW */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-3">
            {/* GRAMS */}
            {grams && (
              <span className="text-xs tracking-widest uppercase text-black/50">
                {grams}
              </span>
            )}
  
            {/* NAME */}
            <h3 className="font-serif text-lg sm:text-xl uppercase tracking-wide">
              {name}
            </h3>
          </div>
  
          {/* PRICE */}
          {price && (
            <span className="text-base sm:text-lg font-medium whitespace-nowrap">
              {price}
            </span>
          )}
        </div>
  
        {/* DESCRIPTION */}
        {description && (
          <p className="mt-2 text-sm text-black/70 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    );
  };
  
  export default MenuItem;
  