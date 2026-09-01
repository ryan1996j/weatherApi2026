const Pressure = () => {
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
          shadow-xl
          backdrop-blur-md
        "
      >
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
          Pressure
        </p>

        <p className="py-4 text-lg font-bold text-[var(--text-primary)]">
          1000.4 mb
        </p>
      </div>
    </div>
  );
};

export default Pressure;
