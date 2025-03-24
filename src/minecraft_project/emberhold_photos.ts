
function emberholdSectionOne(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}emberhold/general_views_fort/${folder}/${asset}?w=${width}&q=50`;
}

function emberholdSectionTwo(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}emberhold/commercial_districts/${folder}/${asset}?w=${width}&q=50`;
}

function emberholdSectionThree(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}emberhold/residential_sections/${folder}/${asset}?w=${width}&q=50`;
}
  
export { emberholdSectionOne, emberholdSectionTwo, emberholdSectionThree };


export const emberhold_general_views = [
  {
    asset: "general_views101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views101",
  },
  {
    asset: "general_views102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views102",
  },
  {
    asset: "general_views103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views103",
  },
  {
    asset: "general_views104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views104",
  },
  {
    asset: "general_views105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views105",
  },
  {
    asset: "general_views106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views106",
  },
  {
    asset: "general_views107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views107",
  },
  {
    asset: "general_views108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views108",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${emberholdSectionOne("general_views", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const emberhold_fort = [
  {
    asset: "fort101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for fort101",
  },
  {
    asset: "fort102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for fort102",
  },
  {
    asset: "fort103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for fort103",
  },
  {
    asset: "fort104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for fort104",
  },
  {
    asset: "fort105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for fort105",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${emberholdSectionOne("fort", asset, width)}`,
      alt,
      width,
      height,
    }),
);

/***********************************************************************************/
/*                          COMMERCIAL DISTRICTS                                   */
/***********************************************************************************/

export const mining_district = [
  {
    asset: "mining_district101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mining_district101",
  },
  {
    asset: "mining_district102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mining_district102",
  },
  {
    asset: "mining_district103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mining_district103",
  },
  {
    asset: "mining_district104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mining_district104",
  },
  {
    asset: "mining_district105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mining_district105",
  },
  {
    asset: "mining_district106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mining_district106",
  },
  {
    asset: "mining_district107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mining_district107",
  },
  {
    asset: "mining_district108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mining_district108",
  },
  {
    asset: "mining_district109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mining_district109",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${emberholdSectionTwo("mining_district", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const town_hall = [
  {
    "asset": "town_hall101.jpg",
    "width": 1280,
    "height": 704,
    "alt": "Placeholder description for town_hall101"
  },
  {
    "asset": "town_hall102.jpg",
    "width": 1280,
    "height": 704,
    "alt": "Placeholder description for town_hall102"
  },
  {
    "asset": "town_hall103.jpg",
    "width": 1280,
    "height": 704,
    "alt": "Placeholder description for town_hall103"
  },
  {
    "asset": "town_hall104.jpg",
    "width": 1280,
    "height": 704,
    "alt": "Placeholder description for town_hall104"
  },
  {
    "asset": "town_hall105.jpg",
    "width": 1280,
    "height": 704,
    "alt": "Placeholder description for town_hall105"
  },
  {
    "asset": "town_hall106.jpg",
    "width": 1280,
    "height": 704,
    "alt": "Placeholder description for town_hall106"
  },
  {
    "asset": "town_hall107.jpg",
    "width": 1280,
    "height": 704,
    "alt": "Placeholder description for town_hall107"
  },
  {
    "asset": "town_hall108.jpg",
    "width": 1280,
    "height": 704,
    "alt": "Placeholder description for town_hall108"
  },
  {
    "asset": "town_hall109.jpg",
    "width": 1280,
    "height": 704,
    "alt": "Placeholder description for town_hall109"
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${emberholdSectionTwo("town_hall", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const town_square = [
  {
    asset: "town_square101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for town_square101",
  },
  {
    asset: "town_square102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for town_square102",
  },
  {
    asset: "town_square103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for town_square103",
  },
  {
    asset: "town_square104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for town_square104",
  },
  {
    asset: "town_square105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for town_square105",
  },
  {
    asset: "town_square106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for town_square106",
  },
  {
    asset: "town_square107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for town_square107",
  },
  {
    asset: "town_square108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for town_square108",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${emberholdSectionTwo("town_square", asset, width)}`,
      alt,
      width,
      height,
    }),
);


/***********************************************************************************/
/*                          RESIDENTIAL SECTIONS                                   */
/***********************************************************************************/

export const residential_sections = [
  {
    asset: "section_1_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_1_101",
  },
  {
    asset: "section_1_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_1_102",
  },
  {
    asset: "section_1_103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_1_103",
  },
  {
    asset: "section_1_104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_1_104",
  },
  {
    asset: "section_1_105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_1_105",
  },
  {
    asset: "section_2_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_2_101",
  },
  {
    asset: "section_2_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_2_102",
  },
  {
    asset: "section_2_103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_2_103",
  },
  {
    asset: "section_2_104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_2_104",
  },
  {
    asset: "section_2_105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_2_105",
  },
  {
    asset: "section_2_106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_2_106",
  },
  {
    asset: "section_3_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_3_101",
  },
  {
    asset: "section_3_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_3_102",
  },
  {
    asset: "section_3_103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_3_103",
  },
  {
    asset: "section_3_104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_3_104",
  },
  {
    asset: "section_3_105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section_3_105",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${emberholdSectionThree("general_pictures", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const residential_buildings = [
  {
    asset: "specific_buildings_inn_100.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for specific_buildings_inn_100.jpg",
  },
  {
    asset: "specific_buildings_inn_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for specific_buildings_inn_101.jpg",
  },
  {
    asset: "specific_buildings_inn_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for specific_buildings_inn_102.jpg",
  },
  {
    asset: "specific_buildings_inn_200.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for specific_buildings_inn_200.jpg",
  },
  {
    asset: "specific_buildings_inn_201.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for specific_buildings_inn_201.jpg",
  },
  {
    asset: "specific_buildings_inn_202.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for specific_buildings_inn_202.jpg",
  },
  {
    asset: "specific_buildings_inn_203.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for specific_buildings_inn_203.jpg",
  },
  {
    asset: "specific_buildings3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for specific_buildings3.jpg",
  },
  {
    asset: "specific_buildings4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for specific_buildings4.jpg",
  },
  {
    asset: "specific_buildings5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for specific_buildings5.jpg",
  },
  {
    asset: "specific_buildings6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for specific_buildings6.jpg",
  },
  {
    asset: "specific_buildings7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for specific_buildings7.jpg",
  },

].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${emberholdSectionThree("specific_buildings", asset, width)}`,
      alt,
      width,
      height,
    }),
);