// const FullMoonSection = () => {
//   return (
//     <section>
//       <div className="rounded-xl px-2 py-4 bg-rose-400 my-4">
//         <h6 className="text-xs font-semibold text-gray-500 mb-6">FULL MOON</h6>
//         <div className="flex justify-between gap-3">
//           <div className="w-2/3 bg-amber-700 ">
//             <div className="flex justify-between border-b my-1 py-2">
//               <p>illumination </p>
//               <p>100%</p>
//             </div>
//             <div className="flex justify-between border-b my-1 py-2">
//               <p>MoonRise </p>
//               <p>18:44</p>
//             </div>
//             <div className="flex justify-between border-b my-1 py-2">
//               <p>NextFull Moon </p>
//               <p>30 Days</p>
//             </div>
//           </div>
//           <div className="w-1/3 h-100% bg-blue-600">pic</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FullMoonSection;
const FullMoonSection = () => {
  return (
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
          FULL MOON
        </p>

        {/* Content */}
        <div className="flex items-center gap-4">
          {/* Moon information */}
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
              <p className="text-sm text-[var(--text-secondary)]">
                Illumination
              </p>

              <p className="text-sm font-semibold text-[var(--text-primary)]">
                100%
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
              <p className="text-sm text-[var(--text-secondary)]">Moonrise</p>

              <p className="text-sm font-semibold text-[var(--text-primary)]">
                18:44
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
                Next full moon
              </p>

              <p className="text-sm font-semibold text-[var(--text-primary)]">
                30 days
              </p>
            </div>
          </div>

          {/* Moon image */}
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
              alt="Full moon"
              className="h-24 w-24 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullMoonSection;
