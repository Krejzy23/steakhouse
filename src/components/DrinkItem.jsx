const DrinkItem = ({ vols, name, description, price }) => {
  return (
    <div className="py-5 border-b border-black/10">
      {/* TOP ROW */}
      <div className="flex items-baseline justify-between gap-4 font-[urania]">
        <div className="flex items-baseline gap-3">
          {/* GRAMS */}
          {vols && (
            <span className="text-xs tracking-widest uppercase text-black/50">
              {vols}
            </span>
          )}

          {/* NAME */}
          <h3 className="text-xl sm:text-xl uppercase tracking-wide">
            {name}
          </h3>
        </div>

        {/* PRICE */}
        {price && (
          <span className="text-base sm:text-lg whitespace-nowrap">
            {price}
          </span>
        )}
      </div>

      {/* DESCRIPTION */}
      {description && (
        <p className="mt-2 ml-12 font-[urania] text-md text-black/60 leading-relaxed max-w-md">
          {description}
        </p>
      )}
    </div>
  );
};

export default DrinkItem;
