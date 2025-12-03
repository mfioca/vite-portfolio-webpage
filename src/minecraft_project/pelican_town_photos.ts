
function stardewValleyGeneralLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}minecraft_pictures/pelican_town/${folder}/${asset}?w=${width}&q=50`;
}
  
export { stardewValleyGeneralLink };


export const GridReference = [
  {
    asset: "Stardew_reference_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Stardew_reference_1",
  },
  {
    asset: "Stardew_reference_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Stardew_reference_2",
  },
  {
    asset: "Stardew_reference_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Stardew_reference_3",
  },
  {
    asset: "Stardew_reference_4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Stardew_reference_4",
  },
  {
    asset: "Stardew_reference_5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Stardew_reference_5",
  },
  {
    asset: "Stardew_reference_6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Stardew_reference_6",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyGeneralLink("Stardew_grid", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const SidebySide = [
  {
    asset: "side_by_side1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for side_by_side1",
  },
  {
    asset: "side_by_side2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for side_by_side2",
  },
  {
    asset: "side_by_side3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for side_by_side3",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyGeneralLink("side_by_side", asset, width)}`,
      alt,
      width,
      height,
    }),
);


export const Beach = [
  {
    asset: "Beach_construction_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_1",
  },
  {
    asset: "Beach_construction_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_2",
  },
  {
    asset: "Beach_construction_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_3",
  },
  {
    asset: "Beach_construction_4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_4",
  },
  {
    asset: "Beach_construction_5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_5",
  },
  {
    asset: "Beach_construction_6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_6",
  },
  {
    asset: "Beach_construction_7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_7",
  },
  {
    asset: "Beach_construction_8.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_8",
  },
  {
    asset: "Beach_construction_9.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_9",
  },
  {
    asset: "Beach_construction_10.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_10",
  },
  {
    asset: "Beach_construction_11.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_11",
  },
  {
    asset: "Beach_construction_12.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_12",
  },
  {
    asset: "Beach_construction_13.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_13",
  },
  {
    asset: "Beach_construction_14.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Beach_construction_14",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyGeneralLink("Beach", asset, width)}`,
      alt,
      width,
      height,
    }),
);
