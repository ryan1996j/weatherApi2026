const WindDetail = () => {
  return (
    <div>
      <section className="my-4">
        <div className="rounded-xl border border-gray-200 bg-white px-4 pt-4 shadow-sm">
          {/* Header */}
          <p className="text-xs font-bold tracking-wide text-gray-500">WIND</p>

          {/* Content */}
          <div className=" flex items-center gap-4">
            {/* Moon information */}
            <div className="flex-1">
              <div className="flex items-center justify-between border-b border-gray-600 py-1">
                <p className="text-sm text-gray-500">Wind</p>
                <p className="text-sm font-semibold text-gray-800">7 km/h</p>
              </div>

              <div className="flex items-center justify-between border-b border-gray-600 py-1">
                <p className="text-sm text-gray-500">Gusts</p>
                <p className="text-sm font-semibold text-gray-800">17 km/h</p>
              </div>

              <div className="flex items-center justify-between border-b border-gray-600 py-1">
                <p className="text-sm text-gray-500">Direction</p>
                <p className="text-sm font-semibold text-gray-800">189 S</p>
              </div>
            </div>

            {/* Moon image */}
            <div className="flex h-28 w-28 shrink-0  rounded-full bg-gray-50">
              <img
                src="/moon.png"
                alt="Full moon"
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
