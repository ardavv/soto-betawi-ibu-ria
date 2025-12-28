import Image from "next/image";
import MenuSection from "../components/MenuSection";
import FloatingCTA from "../components/FloatingCTA";
import CopyButton from "../components/CopyButton";
import TrustStrip from "../components/TrustStrip";
import HowToOrder from "../components/HowToOrder";
import Testimonials from "../components/Testimonials";
import { site, menuItems } from "../data/site";
import { buildGoogleMapsEmbedSrc } from "../lib/maps";
import { formatRupiah } from "../lib/format";
import GigiBalangBar from "@/components/GigiBalangBar";

function BestSellerRow() {
  const best = menuItems.filter((m) => m.isBestSeller === true).slice(0, 3);

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {best.map((item) => (
        <div
          key={item.id}
          className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="relative h-44 w-full">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="absolute left-3 top-3 inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs font-extrabold text-white shadow-sm">
              Best Seller
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-extrabold tracking-tight text-neutral-900">
                  {item.name}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </div>
              </div>

              <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-extrabold text-amber-900">
                {formatRupiah(item.price)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  const mapsEmbedSrc = buildGoogleMapsEmbedSrc(site.address);

  return (
    <main className="min-h-screen bg-neutral-50 pb-28 text-neutral-900">
      {/* Background glow halus */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute left-0 top-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-orange-200/25 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/90 shadow-sm backdrop-blur">
        {/* Gigi Balang (Betawi) */}
        <GigiBalangBar className="border-b border-neutral-200" />

        <div className="border-b border-neutral-200">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-4">
            <div>
              <div className="text-sm font-extrabold tracking-tight text-neutral-900">
                {site.brand}
              </div>
              <div className="mt-1 text-xs text-neutral-500">{site.hours}</div>
            </div>

            <nav className="flex items-center gap-2">
              <a
                className="rounded-xl px-3 py-2 text-sm font-bold text-neutral-700 hover:bg-neutral-100"
                href="#menu"
              >
                Menu
              </a>
              <a
                className="rounded-xl px-3 py-2 text-sm font-bold text-neutral-700 hover:bg-neutral-100"
                href="#lokasi"
              >
                Lokasi
              </a>
              <a
                className="hidden rounded-xl bg-emerald-600 px-3 py-2 text-sm font-extrabold text-white shadow-sm hover:bg-emerald-700 md:inline-flex"
                href={site.gofoodUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GoFood
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12">
        <div className="mx-auto w-full max-w-5xl px-5">
          <div className="relative overflow-hidden rounded-3xl border border-amber-100/70 bg-gradient-to-br from-white via-amber-50/60 to-emerald-50/60 p-6 shadow-sm backdrop-blur md:p-8">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-10 h-64 w-64 rounded-full bg-emerald-200/35 blur-3xl" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/80 px-3 py-2 text-xs font-extrabold text-amber-900 shadow-sm">
                  ✨ Kuah lebih gurih • Best seller: Daging, Paru, Campur
                </div>

                <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 md:text-5xl">
                  {site.tagline}
                </h1>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Lihat menu & harga, lalu order cepat lewat GoFood/GrabFood.
                  Kalau butuh bantuan, chat WhatsApp.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    // { label: "4.9/5", desc: "Rating pelanggan" },
                    { label: "20+ Tahun", desc: "Resep keluarga" },
                    { label: "Buka", desc: site.hours },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/70 bg-white/70 px-3 py-3 text-center shadow-sm"
                    >
                      <div className="text-sm font-extrabold text-neutral-900">
                        {item.label}
                      </div>
                      <div className="text-[11px] font-semibold text-neutral-500">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-bold text-neutral-700">
                    ⏰ {site.hours}
                  </span>
                  <span className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-bold text-neutral-700">
                    📍 Kalibata, Jakarta Selatan
                  </span>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800">
                    ✅ Order via GoFood / GrabFood
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
                    href={site.gofoodUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buka di GoFood
                  </a>

                  <a
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-extrabold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
                    href={site.grabfoodUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buka di GrabFood
                  </a>

                  <a
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-extrabold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
                    href="#menu"
                  >
                    Lihat Menu
                  </a>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {[
                    "Kuah santan gurih, ringan di lidah",
                    "Porsi pas, isi daging melimpah",
                    "Bisa makan di tempat atau delivery",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-neutral-200 bg-white/90 px-3 py-3 text-xs font-semibold text-neutral-700 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-relaxed text-neutral-500">
                  Tips: kalau baru pertama kali coba, mulai dari{" "}
                  <span className="font-extrabold text-neutral-800">
                    Daging
                  </span>{" "}
                  atau{" "}
                  <span className="font-extrabold text-neutral-800">
                    Campur
                  </span>
                  .
                </p>
              </div>

              <div className="grid gap-3">
                <div className="relative h-80 overflow-hidden rounded-3xl border border-white/80 bg-white shadow-lg">
                  <Image
                    src="/images/soto-betawi-daging.webp"
                    alt="Soto Betawi"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 shadow-lg">
                    <div className="text-xs font-semibold text-emerald-700">
                      Signature Bowl
                    </div>
                    <div className="text-sm font-extrabold text-neutral-900">
                      Soto Betawi Daging
                    </div>
                  </div>
                </div>

                {/* Mini gallery (tambah foto gerobak di sini) */}
                <div className="grid grid-cols-4 gap-3">
                  <div className="relative h-24 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-sm">
                    <Image
                      src="/images/peyek.jpg"
                      alt="Peyek"
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-24 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-sm">
                    <Image
                      src="/images/es-teh-manis.jpg"
                      alt="Es Teh Manis"
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-24 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-sm">
                    <Image
                      src="/images/soto-betawi-ayam.webp"
                      alt="Soto Betawi Ayam"
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-24 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-sm">
                    <Image
                      src="/images/gerobak.jpg"
                      alt="Outlet / Gerobak Soto Betawi Ibu Ria Kalibata"
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip />

      {/* NEW: Outlet & Suasana */}
      <section className="py-14">
        <div className="mx-auto w-full max-w-5xl px-5">
          <div className="rounded-3xl border border-neutral-200/70 bg-white/80 p-6 shadow-sm backdrop-blur md:p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <div className="relative h-[320px] w-full md:h-[360px]">
                  <Image
                    src="/images/gerobak.jpg"
                    alt="Outlet / Gerobak Soto Betawi Ibu Ria Kalibata"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50 px-3 py-2 text-xs font-extrabold text-amber-900 shadow-sm">
                  🏪 Outlet di Kalibata • Buka setiap hari
                </div>

                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-neutral-900">
                  Datang langsung atau order online—sama-sama gampang.
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Buat yang lagi di sekitar Kalibata, kamu bisa mampir. Buat
                  yang pengen praktis, tinggal klik GoFood/GrabFood. Kuahnya
                  dibuat tetap{" "}
                  <span className="font-extrabold text-neutral-800">gurih</span>{" "}
                  dan nikmat.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-2">
                  <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-extrabold text-neutral-900">
                      Cepat & jelas
                    </div>
                    <div className="mt-1 text-sm text-neutral-600">
                      Lokasi mudah ditemukan, jam buka konsisten.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-extrabold text-neutral-900">
                      Best seller aman buat pertama kali
                    </div>
                    <div className="mt-1 text-sm text-neutral-600">
                      Daging • Paru • Campur — favorit banyak orang.
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-emerald-700 active:translate-y-[1px]"
                    href={site.gofoodUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order via GoFood
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-extrabold text-neutral-900 shadow-sm hover:bg-neutral-50 active:translate-y-[1px]"
                    href={site.grabfoodUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order via GrabFood
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Seller */}
      <section className="py-14">
        <div className="mx-auto w-full max-w-5xl px-5">
          <div className="rounded-3xl border border-neutral-200/70 bg-white/80 p-6 shadow-sm backdrop-blur md:p-8">
            <div className="mb-5">
              <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
                Best Seller
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                Paling sering dipesan—Daging, Paru, dan Campur.
              </p>
            </div>

            <BestSellerRow />

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-emerald-700 active:translate-y-[1px]"
                href={site.gofoodUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order via GoFood
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-extrabold text-neutral-900 shadow-sm hover:bg-neutral-50 active:translate-y-[1px]"
                href={site.grabfoodUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order via GrabFood
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <MenuSection />

      {/* Cara Order */}
      <HowToOrder />

      {/* Lokasi */}
      <section id="lokasi" className="py-14">
        <div className="mx-auto w-full max-w-5xl px-5">
          <div className="rounded-3xl border border-neutral-200/70 bg-white/80 p-6 shadow-sm backdrop-blur md:p-8">
            <div className="mb-5">
              <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
                Lokasi & Jam Buka
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                Datang langsung atau order online via GoFood/GrabFood.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-extrabold tracking-tight text-neutral-900">
                  Alamat
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {site.address}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-amber-600 active:translate-y-[1px]"
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buka Google Maps
                  </a>
                  <CopyButton textToCopy={site.address} />
                </div>

                <div className="mt-5 border-t border-neutral-200 pt-4">
                  <div className="flex items-center justify-between gap-3 py-2">
                    <span className="text-sm text-neutral-500">Jam buka</span>
                    <span className="text-sm font-extrabold text-neutral-900">
                      {site.hours}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 py-2">
                    <span className="text-sm text-neutral-500">Order</span>
                    <span className="text-sm font-extrabold text-neutral-900">
                      Offline, GoFood,dan GrabFood
                    </span>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63457.013236310704!2d106.7741466216797!3d-6.255387799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3656b67dae9%3A0x2b8c98240bc45cb3!2sSoto%20Betawi%20Bu%20Ria%20Kalibata!5e0!3m2!1sid!2sid!4v1766893363318!5m2!1sid!2sid"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-80 w-full border-0 md:h-[380px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-start justify-between gap-4 px-5">
          <div>
            <div className="text-sm font-extrabold tracking-tight text-neutral-900">
              {site.brand}
            </div>
            <div className="mt-2 text-sm text-neutral-600">{site.hours}</div>
            <div className="mt-1 text-sm text-neutral-600">
              Kuah lebih gurih • Kalibata, Jakarta Selatan
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              className="rounded-xl px-3 py-2 text-sm font-bold text-neutral-700 hover:bg-neutral-100"
              href="#menu"
            >
              Menu
            </a>
            <a
              className="rounded-xl px-3 py-2 text-sm font-bold text-neutral-700 hover:bg-neutral-100"
              href="#lokasi"
            >
              Lokasi
            </a>
            <a
              className="rounded-xl bg-emerald-600 px-3 py-2 text-sm font-extrabold text-white shadow-sm hover:bg-emerald-700"
              href={site.gofoodUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GoFood
            </a>
            <a
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-extrabold text-neutral-900 shadow-sm hover:bg-neutral-50"
              href={site.grabfoodUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GrabFood
            </a>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <FloatingCTA />
    </main>
  );
}
