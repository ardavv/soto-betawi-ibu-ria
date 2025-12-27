"use client";

import { useState } from "react";

type CopyButtonProps = {
  textToCopy: string;
  className?: string;
};

export default function CopyButton({ textToCopy, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onCopy = async () => {
    setError(null);
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setError("Gagal menyalin. Coba manual ya.");
    }
  };

  return (
    <div className={className ?? ""}>
      <button
        type="button"
        onClick={onCopy}
        className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-extrabold text-neutral-900 shadow-sm hover:bg-neutral-50 active:translate-y-[1px]"
        aria-label="Salin alamat"
      >
        {copied ? "Tersalin ✅" : "Copy alamat"}
      </button>
      {error ? <div className="mt-2 text-xs text-red-600">{error}</div> : null}
    </div>
  );
}
