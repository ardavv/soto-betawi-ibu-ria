export default function Testimonials() {
  const testimonials = [
    {
      quote: "Sotonya enak, gurih, ringan Bpk ibunya baik, ramah Isian jg lmyn",
      name: "Indra",
    },
    {
      quote:
        "sotonya enak bangett, berkaldu dan ngga pelit isinya recommended banget pokoknya, apalagi kalo makan bareng² temen cucook bgtt",
      name: "Anisah Fikriani",
    },
    {
      quote:
        "Sotonya mantap kuahnya gurih, satu porsi soto dapet dagingnya banyak👍👍",
      name: "Imas Suhayati",
    },
  ];

  return (
    <section className="py-14">
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
            Kata Mereka
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-neutral-600">
            Pelanggan Soto Betawi Ibu Ria
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.quote}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200/80 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  Review pelanggan
                </span>
                <span className="text-xl text-emerald-400">“</span>
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-neutral-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs font-bold text-neutral-500">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
