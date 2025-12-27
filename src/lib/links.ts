export const buildWhatsAppLink = (waNumber: string, message: string) => {
  const normalized = waNumber.replace(/[^\d]/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${normalized}?text=${encoded}`;
};

export const defaultWaMessage = (brand: string) => {
  const lines = [
    `Halo ${brand} 👋`,
    `Saya mau tanya/pesan.`,
    ``,
    `Rencana order via GoFood/GrabFood.`,
    `Boleh info rekomendasi best seller & stok hari ini?`,
    ``,
    `Terima kasih 🙏`,
  ];
  return lines.join("\n");
};
