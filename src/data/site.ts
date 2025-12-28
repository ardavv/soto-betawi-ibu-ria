export const site = {
  brand: "Soto Betawi Ibu Ria Kalibata",
  tagline:
    "Soto Betawi dengan kuah lebih gurih—hangat, nikmat, dan bikin nagih.",
  hours: "Senin–Minggu, 10.00–21.00",
  address:
    "Pusat Kuliner, RT.7/RW.7, Kalibata, Kec. Pancoran, Kota Jakarta Selatan, DKI Jakarta 12760",
  mapsUrl: "https://maps.app.goo.gl/FwVaV6usXtW3thqD7",
  gofoodUrl:
    "https://gofood.co.id/jakarta/restaurant/soto-betawi-ibu-ria-kalibata-2ec9ea87-fb92-4ad5-b889-59b6f0f49baa",
  grabfoodUrl:
    "https://r.grab.com/g/6-20251227_145128_4d9bca6a89424e05adb4bfb42cd516b9_MEXMPS-6-C7MWLJEENVNHCX",
  waNumber: "6281212900184",
} as const;

export type MenuCategory = "MENU_UTAMA" | "SIDE" | "MINUMAN";

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  isBestSeller?: boolean;
  image: { src: string; alt: string };
};

export const menuItems: MenuItem[] = [
  {
    id: "soto-daging",
    name: "Soto Betawi Daging",
    category: "MENU_UTAMA",
    price: 32000,
    description: "Daging empuk dengan kuah lebih gurih khas Betawi.",
    isBestSeller: true,
    image: {
      src: "/images/soto-betawi-daging.webp",
      alt: "Soto Betawi Daging",
    },
  },
  {
    id: "soto-paru",
    name: "Soto Betawi Paru",
    category: "MENU_UTAMA",
    price: 32000,
    description: "Paru gurih, mantap buat yang suka tekstur.",
    isBestSeller: true,
    image: { src: "/images/soto-betawi-daging.webp", alt: "Soto Betawi Paru" },
  },
  {
    id: "soto-campur",
    name: "Soto Betawi Campur",
    category: "MENU_UTAMA",
    price: 32000,
    description: "Komplit: daging + paru dalam satu porsi.",
    isBestSeller: true,
    image: {
      src: "/images/soto-betawi-daging.webp",
      alt: "Soto Betawi Campur",
    },
  },
  {
    id: "soto-ayam",
    name: "Soto Betawi Ayam",
    category: "MENU_UTAMA",
    price: 25000,
    description: "Versi ayam yang lebih ringan tapi tetap gurih.",
    image: { src: "/images/soto-betawi-ayam.webp", alt: "Soto Betawi Ayam" },
  },
  {
    id: "kerupuk",
    name: "Kerupuk",
    category: "SIDE",
    price: 3000,
    description: "Renyes gurih pendamping soto.",
    image: { src: "/images/kerupuk-putih.webp", alt: "Pelengkap (Kerupuk)" },
  },
  {
    id: "emping",
    name: "Emping",
    category: "SIDE",
    price: 5000,
    description:
      "Emping renyah gurih pelengkap soto. (pembelian soto sudah dilengkapi emping)",
    image: { src: "/images/emping.png", alt: "Pelengkap (Emping)" },
  },
  {
    id: "peyek",
    name: "Peyek",
    category: "SIDE",
    price: 7000,
    description: "Gurih, kriuk, bikin nambah.",
    image: { src: "/images/peyek.jpg", alt: "Peyek" },
  },
  {
    id: "teh-manis",
    name: "Teh Manis (Es/Panas)",
    category: "MINUMAN",
    price: 5000,
    description: "Segar dan pas buat teman makan.",
    image: { src: "/images/es-teh-manis.jpg", alt: "Teh manis es/panas" },
  },
  {
    id: "jeruk",
    name: "Jeruk (Es/Panas)",
    category: "MINUMAN",
    price: 10000,
    description: "Jeruk segar, balance sama kuah gurih.",
    image: { src: "/images/jeruk-es-panas.webp", alt: "Jeruk es/panas" },
  },
];

export const categoryLabels: Record<MenuCategory, string> = {
  MENU_UTAMA: "Menu Utama",
  SIDE: "Side",
  MINUMAN: "Minuman",
};
