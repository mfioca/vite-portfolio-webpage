
function randomPlaces(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}minecraft_pictures/random_places/${folder}/${asset}?w=${width}&q=50`;
}
  
export { randomPlaces };


export const abandoned_tower = [
  {
    asset: "abandonded_tower101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for abandonded_tower101.jpg",
  },
  {
    asset: "abandonded_tower102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for abandonded_tower102.jpg",
  },
  {
    asset: "abandonded_tower103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for abandonded_tower103.jpg",
  },
  {
    asset: "abandonded_tower104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for abandonded_tower104.jpg",
  },
  {
    asset: "abandonded_tower105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for abandonded_tower105.jpg",
  },
  {
    asset: "abandonded_tower106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for abandonded_tower106.jpg",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${randomPlaces("abandonded_tower", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const lonely_outpost = [
  {
    asset: "lonely_outpost101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lonely_outpost101.jpg",
  },
  {
    asset: "lonely_outpost102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lonely_outpost102.jpg",
  },
  {
    asset: "lonely_outpost103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lonely_outpost103.jpg",
  },
  {
    asset: "lonely_outpost104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lonely_outpost104.jpg",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${randomPlaces("lonely_outpost", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const whiterun_tunnel = [
  {
    asset: "whiterun_tunnel101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for whiterun_tunnel101.jpg",
  },
  {
    asset: "whiterun_tunnel102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for whiterun_tunnel102.jpg",
  },
  {
    asset: "whiterun_tunnel103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for whiterun_tunnel103.jpg",
  },
  {
    asset: "whiterun_tunnel104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for whiterun_tunnel104.jpg",
  },
  {
    asset: "whiterun_tunnel105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for whiterun_tunnel105.jpg",
  },
  {
    asset: "whiterun_tunnel106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for whiterun_tunnel106.jpg",
  },
  {
    asset: "whiterun_tunnel107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for whiterun_tunnel107.jpg",
  },
  {
    asset: "whiterun_tunnel108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for whiterun_tunnel108.jpg",
  },
  {
    asset: "whiterun_tunnel109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for whiterun_tunnel109.jpg",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${randomPlaces("whiterun_tunnel", asset, width)}`,
      alt,
      width,
      height,
    }),
);
