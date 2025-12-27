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
            (Placeholder) Nanti kamu bisa ganti dengan review asli.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.quote}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-neutral-700">
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
