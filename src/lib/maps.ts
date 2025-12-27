export const buildGoogleMapsEmbedSrc = (address: string) => {
  const q = encodeURIComponent(address);
  return `https://www.google.com/maps?q=${q}&output=embed`;
};
