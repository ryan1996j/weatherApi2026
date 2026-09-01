const FeelsLike = () => {
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
          Feels Like
        </p>

        {/* Temperature */}
        <p
          className="
      py-4
      text-lg
      font-bold
      text-[var(--text-primary)]
    "
        >
          30°
        </p>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)]">
          It feels warmer than the actual temperature
        </p>
      </div>
    </div>
  );
};

export default FeelsLike;
