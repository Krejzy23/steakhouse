const MenuItem = ({ grams, name, description, price }) => {
    return (
      <div className="py-5 border-b border-black/10">
        {/* TOP ROW */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-3">
            {/* GRAMS */}
            {grams && (
              <span className="text-xs lowercase tracking-widest text-black/50">
                {grams}
              </span>
            )}
  
            {/* NAME */}
            <h3 className="font-[circular-web] text-lg sm:text-xl uppercase tracking-wide">
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
          <p className="mt-2 ml-12 italic text-sm text-black/60 leading-relaxed max-w-md">
            {description}
          </p>
        )}
      </div>
    );
  };
  
  export default MenuItem;
  