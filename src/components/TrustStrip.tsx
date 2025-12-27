import { site } from "../data/site";

export default function TrustStrip() {
  return (
    <section className="py-3">
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-2 text-xs font-bold text-neutral-800">
            ⏰ {site.hours}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-2 text-xs font-bold text-neutral-800">
            📍 Kalibata, Jakarta Selatan
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800">
            ✅ Order via GoFood / GrabFood
          </span>
          <span className="ml-auto text-xs text-neutral-500">
            Kuah lebih gurih • Best seller: Daging, Paru, Campur
          </span>
        </div>
      </div>
    </section>
  );
}
