
function dwarvenKingdomLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}dwarven_kingdom/${folder}/${asset}?w=${width}&q=50`;
}


function whiterunSplitScreenLink(asset: string, width: number) {
  return `${import.meta.env.BASE_URL}whiterun_minecraft_split_screen/${asset}?w=${width}&q=50`;
}

function whiterundetailLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}whiterun_city_after/${folder}/${asset}?w=${width}&q=50`;
}
  
export { dwarvenKingdomLink, whiterunSplitScreenLink, whiterundetailLink };

export const mountain_exterior = [
  {
    asset: "mountain_ext101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_ext101",
  },
  {
    asset: "mountain_ext102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_ext102",
  },
  {
    asset: "mountain_ext103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_ext103",
  },
  {
    asset: "mountain_ext104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_ext104",
  },
  {
    asset: "mountain_ext105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_ext105",
  },
  {
    asset: "mountain_ext106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_ext106",
  },
  {
    asset: "mountain_ext107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_ext107",
  },
  {
    asset: "mountain_ext108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_ext108",
  },
  {
    asset: "mountain_ext109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_ext109",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${dwarvenKingdomLink("exterior", asset, width)}`,
      alt,
      width,
      height,
    })
);

export const governance_district = [
  // Exterior and section overview images
  {
    asset: "industrial_section101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section101",
  },
  {
    asset: "industrial_section102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section102",
  },
  {
    asset: "industrial_section103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section103",
  },
  {
    asset: "industrial_section104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section104",
  },
  {
    asset: "industrial_section105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section105",
  },
  {
    asset: "industrial_section106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section106",
  },
  {
    asset: "industrial_section107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section107",
  },
  {
    asset: "industrial_section108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section108",
  },
  {
    asset: "industrial_section109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section109",
  },
  {
    asset: "industrial_section110.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section110",
  },
  {
    asset: "industrial_section111.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section111",
  },
  {
    asset: "industrial_section112.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section112",
  },
  // Interior and room detail images
  {
    asset: "industrial_section_i_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section_i_101",
  },
  {
    asset: "industrial_section_i_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section_i_102",
  },
  {
    asset: "industrial_section_i_103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section_i_103",
  },
  {
    asset: "industrial_section_i_104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section_i_104",
  },
  {
    asset: "industrial_section_i_105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section_i_105",
  },
  {
    asset: "industrial_section_i_106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section_i_106",
  },
  {
    asset: "industrial_section_i_107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section_i_107",
  },
  {
    asset: "industrial_section_i_108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section_i_108",
  },
  {
    asset: "industrial_section_i_109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section_i_109",
  },
  {
    asset: "industrial_section_i_110.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section_i_110",
  },
  {
    asset: "industrial_section_i_111.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section_i_111",
  },
  {
    asset: "industrial_section_i_112.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for industrial_section_i_112",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${dwarvenKingdomLink("governance_district", asset, width)}`,
      alt,
      width,
      height,
    })
);

export const great_forge_district = [
  {
    asset: "forge_residential_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_101",
  },
  {
    asset: "forge_residential_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_102",
  },
  {
    asset: "forge_residential_103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_103",
  },
  {
    asset: "forge_residential_104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_104",
  },
  {
    asset: "forge_residential_105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_105",
  },
  {
    asset: "forge_residential_106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_106",
  },
  {
    asset: "forge_residential_107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_107",
  },
  {
    asset: "forge_residential_108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_108",
  },
  {
    asset: "forge_residential_109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_109",
  },
  {
    asset: "forge_residential_110.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_110",
  },
  {
    asset: "forge_residential_111.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_111",
  },
  {
    asset: "forge_residential_112.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_112",
  },
  {
    asset: "forge_residential_113.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_113",
  },
  {
    asset: "forge_residential_114.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_114",
  },
  {
    asset: "forge_residential_115.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forge_residential_115",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${dwarvenKingdomLink("great_forge_district", asset, width)}`,
      alt,
      width,
      height,
    })
);

export const bath_houses = [
  {
    asset: "spa101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for spa101",
  },
  {
    asset: "spa102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for spa102",
  },
  {
    asset: "spa103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for spa103",
  },
  {
    asset: "spa104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for spa104",
  },
  {
    asset: "spa105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for spa105",
  },
  {
    asset: "spa106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for spa106",
  },
  {
    asset: "spa107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for spa107",
  },
  {
    asset: "spa108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for spa108",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${dwarvenKingdomLink("bath_houses", asset, width)}`,
      alt,
      width,
      height,
    })
);

export const under_cave = [
  {
    asset: "deepcave101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for deepcave101",
  },
  {
    asset: "deepcave102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for deepcave102",
  },
  {
    asset: "deepcave103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for deepcave103",
  },
  {
    asset: "deepcave104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for deepcave104",
  },
  {
    asset: "deepcave105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for deepcave105",
  },
  {
    asset: "deepcave106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for deepcave106",
  },
  {
    asset: "deepcave107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for deepcave107",
  },
  {
    asset: "deepcave108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for deepcave108",
  },
  {
    asset: "deepcave109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for deepcave109",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${dwarvenKingdomLink("under_cave", asset, width)}`,
      alt,
      width,
      height,
    })
);