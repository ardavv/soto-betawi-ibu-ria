"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  categoryLabels,
  menuItems,
  type MenuCategory,
  type MenuItem,
} from "../data/site";
import { formatRupiah } from "../lib/format";

type PickerValue = MenuCategory | "ALL";

const categoryOrder: MenuCategory[] = ["MENU_UTAMA", "SIDE", "MINUMAN"];

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function PriceChip({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center rounded-full border border-amber-200 bg-linear-to-r from-amber-50 to-amber-100 px-3 py-1 text-xs font-extrabold text-amber-900 shadow-sm">
      {formatRupiah(value)}
    </span>
  );
}

function MenuCard({ item, highlight }: { item: MenuItem; highlight: boolean }) {
  return (
    <div
      className={classNames(
        "group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
        highlight
          ? "border-emerald-300 ring-2 ring-emerald-200"
          : "border-neutral-200"
      )}
    >
      <div className="relative h-44 w-full">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
          priority={item.isBestSeller === true}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

        {item.isBestSeller ? (
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-extrabold text-white shadow-sm">
              Best Seller
            </span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-extrabold text-amber-900 shadow-sm">
              Recommended
            </span>
          </div>
        ) : null}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-extrabold tracking-tight text-neutral-900">
              {item.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {item.description}
            </p>
          </div>
          <PriceChip value={item.price} />
        </div>
      </div>
    </div>
  );
}

function SegmentedButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "rounded-xl px-4 py-2 text-sm font-extrabold transition",
        active
          ? "bg-neutral-900 text-white shadow-sm"
          : "bg-white text-neutral-800 hover:bg-neutral-50"
      )}
    >
      {children}
    </button>
  );
}

export default function MenuSection() {
  const [picked, setPicked] = useState<PickerValue>("ALL");
  const [bestOnly, setBestOnly] = useState(false);

  const bestSellers = useMemo(
    () => menuItems.filter((m) => m.isBestSeller),
    []
  );

  const filteredItems = useMemo(() => {
    let items = menuItems;

    if (bestOnly) {
      items = items.filter((m) => m.isBestSeller);
      return items;
    }

    if (picked !== "ALL") {
      items = items.filter((m) => m.category === picked);
    }

    return items;
  }, [picked, bestOnly]);

  const grouped = useMemo(() => {
    const map: Record<MenuCategory, MenuItem[]> = {
      MENU_UTAMA: [],
      SIDE: [],
      MINUMAN: [],
    };
    for (const it of filteredItems) map[it.category].push(it);
    return map;
  }, [filteredItems]);

  const showGrouped = !bestOnly && picked === "ALL";

  return (
    <section id="menu" className="py-14">
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="rounded-3xl border border-neutral-200/70 bg-white/80 p-6 shadow-sm backdrop-blur md:p-8">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
                Menu
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                Kuah lebih gurih, pilihan lengkap. Gunakan picker untuk cari
                cepat.
              </p>
            </div>

            {/* Picker */}
            <div className="flex flex-col gap-2 md:items-end">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl border border-amber-100/70 bg-white p-1 shadow-sm">
                <SegmentedButton
                  active={picked === "ALL" && !bestOnly}
                  onClick={() => {
                    setPicked("ALL");
                    setBestOnly(false);
                  }}
                >
                  Semua
                </SegmentedButton>
                {categoryOrder.map((c) => (
                  <SegmentedButton
                    key={c}
                    active={picked === c && !bestOnly}
                    onClick={() => {
                      setPicked(c);
                      setBestOnly(false);
                    }}
                  >
                    {categoryLabels[c]}
                  </SegmentedButton>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setBestOnly((v) => !v)}
                className={classNames(
                  "inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-extrabold shadow-sm transition",
                  bestOnly
                    ? "border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100"
                    : "border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50"
                )}
              >
                <span
                  className={classNames(
                    "h-2 w-2 rounded-full",
                    bestOnly ? "bg-emerald-600" : "bg-neutral-300"
                  )}
                />
                {bestOnly ? "Menampilkan Best Seller" : "Highlight Best Seller"}
              </button>
            </div>
          </div>

          {/* Render */}
          {showGrouped ? (
            <div className="space-y-8">
              {categoryOrder.map((cat) => {
                const items = grouped[cat];
                if (items.length === 0) return null;
                return (
                  <div key={cat}>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-extrabold tracking-tight text-neutral-900">
                        {categoryLabels[cat]}
                      </h3>
                      <span className="text-xs text-neutral-500">
                        Scan cepat • Harga jelas
                      </span>
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
                      {items.map((it) => (
                        <MenuCard
                          key={it.id}
                          item={it}
                          highlight={!!it.isBestSeller}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {filteredItems.map((it) => (
                <MenuCard
                  key={it.id}
                  item={it}
                  highlight={bestOnly ? true : !!it.isBestSeller}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
