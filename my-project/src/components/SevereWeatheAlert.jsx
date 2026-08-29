import { TbAlertTriangleFilled } from "react-icons/tb";
const SevereWeatheAlert = () => {
  return (
    <>
      <div className="w-full rounded-xl border border-red-200 bg-red-50 px-4 py-3">
        <div className="flex items-start gap-3">
          {/* Alert icon */}
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
            <TbAlertTriangleFilled className="size-7" />
          </div>

          {/* Alert content */}
          <div className="min-w-0 flex-1">
            <h3 className="text-xs font-bold tracking-wide text-red-700">
              SEVERE WEATHER
            </h3>

            <p className="mt-1 text-sm font-medium text-gray-800">
              Heavy rain warning
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Heavy rainfall is expected in your area.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SevereWeatheAlert;
