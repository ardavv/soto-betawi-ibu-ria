export default function HowToOrder() {
  const steps = [
    {
      title: "Pilih menu favorit",
      desc: "Cek best seller dan lihat harga dengan cepat.",
      icon: "🍲",
    },
    {
      title: "Klik GoFood / GrabFood",
      desc: "Order paling cepat langsung dari aplikasi.",
      icon: "📲",
    },
    {
      title: "Pesan & tunggu hangatnya datang",
      desc: "Kalau butuh bantuan, chat WhatsApp.",
      icon: "🔥",
    },
  ];

  return (
    <section className="py-14">
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
            Cara Order
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-neutral-600">
            Tiga langkah simpel biar kamu cepat makan enak.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200/80 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-lg font-extrabold text-amber-900 shadow-sm">
                  {s.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                    Step {idx + 1}
                  </div>
                  <div className="text-sm font-extrabold text-neutral-900">
                    {s.title}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {s.desc}
              </p>
              <div className="mt-4 h-1 w-14 rounded-full bg-amber-100 transition group-hover:w-20 group-hover:bg-amber-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
