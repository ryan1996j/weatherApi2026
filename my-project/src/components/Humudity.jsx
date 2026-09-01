const Humudity = () => {
  return (
    <div>
      <div
        className="
    flex
    h-full
    w-full
    flex-col
    rounded-2xl
    border
    border-[var(--glass-border)]
    bg-[var(--glass-bg)]
    px-4
    py-2
    backdrop-blur-md
    shadow-xl
  "
      >
        {/* Header */}
        <p
          className="
      py-3
      text-xs
      font-bold
      uppercase
      tracking-wide
      text-[var(--text-secondary)]
    "
        >
          Humidity
        </p>

        {/* Description */}
        <p className="text-md text-[var(--text-secondary)]">
          Higher than yesterday
        </p>

        {/* Humidity value */}
        <p
          className="
      py-4
      text-lg
      font-bold
      text-[var(--text-primary)]
    "
        >
          90%
        </p>
      </div>
    </div>
  );
};

export default Humudity;
