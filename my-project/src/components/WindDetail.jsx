const WindDetail = () => {
  return (
    <div>
      <section className="my-4">
        <div
          className="
      rounded-2xl
      border
      border-[var(--glass-border)]
      bg-[var(--glass-bg)]
      px-4
      pt-4
      shadow-xl
      backdrop-blur-md
    "
        >
          {/* Header */}
          <p
            className="
        text-xs
        font-bold
        tracking-wide
        text-[var(--text-secondary)]
      "
          >
            WIND
          </p>

          {/* Content */}
          <div className="flex items-center gap-4">
            {/* Wind information */}
            <div className="flex-1">
              <div
                className="
            flex
            items-center
            justify-between
            border-b
            border-[var(--border)]
            py-1
          "
              >
                <p className="text-sm text-[var(--text-secondary)]">Wind</p>

                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  7 km/h
                </p>
              </div>

              <div
                className="
            flex
            items-center
            justify-between
            border-b
            border-[var(--border)]
            py-1
          "
              >
                <p className="text-sm text-[var(--text-secondary)]">Gusts</p>

                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  17 km/h
                </p>
              </div>

              <div
                className="
            flex
            items-center
            justify-between
            border-b
            border-[var(--border)]
            py-1
          "
              >
                <p className="text-sm text-[var(--text-secondary)]">
                  Direction
                </p>

                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  189° S
                </p>
              </div>
            </div>

            {/* Wind icon/image */}
            <div
              className="
          flex
          h-28
          w-28
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[var(--moon-bg)]
        "
            >
              <img
                src="/moon.png"
                alt="Wind"
                className="h-24 w-24 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WindDetail;
