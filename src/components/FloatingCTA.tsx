"use client";

import { site } from "../data/site";
import { buildWhatsAppLink, defaultWaMessage } from "../lib/links";

export default function FloatingCTA() {
  const waMessage = defaultWaMessage(site.brand);
  const waLink = buildWhatsAppLink(site.waNumber, waMessage);

  return (
    <div
      role="navigation"
      aria-label="Aksi cepat pemesanan"
      className="fixed bottom-3 left-1/2 z-50 w-[min(720px,calc(100%-20px))] -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white/85 p-2 shadow-lg backdrop-blur"
    >
      <div className="grid grid-cols-3 gap-2">
        <a
          className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-3 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-emerald-700 active:translate-y-[1px]"
          href={site.gofoodUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buka GoFood"
        >
          GoFood
        </a>

        <a
          className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-3 text-sm font-extrabold text-neutral-900 shadow-sm hover:bg-neutral-50 active:translate-y-[1px]"
          href={site.grabfoodUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buka GrabFood"
        >
          GrabFood
        </a>

        <a
          className="inline-flex items-center justify-center rounded-xl border border-amber-200 bg-amber-50 px-3 py-3 text-sm font-extrabold text-neutral-900 shadow-sm hover:bg-amber-100 active:translate-y-[1px]"
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat WhatsApp"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
