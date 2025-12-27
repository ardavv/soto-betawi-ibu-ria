import { site } from "../data/site";

export default function TrustStrip() {
  return (
    <section className="py-4">
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-amber-100/70 bg-gradient-to-r from-white via-amber-50/70 to-emerald-50/70 px-4 py-3 shadow-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-xs font-bold text-neutral-800 shadow-sm">
            ⏰ {site.hours}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-xs font-bold text-neutral-800 shadow-sm">
            📍 Kalibata, Jakarta Selatan
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800 shadow-sm">
            ✅ Order via GoFood / GrabFood
          </span>
          <span className="ml-auto text-xs font-semibold text-neutral-500">
            Kuah lebih gurih • Best seller: Daging, Paru, Campur
          </span>
        </div>
      </div>
    </section>
  );
}
