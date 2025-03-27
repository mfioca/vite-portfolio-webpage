
function portCityTownLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}minecraft_pictures/crowhaven/town/${folder}/${asset}?w=${width}&q=50`;
}

function portCityPortLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}minecraft_pictures/crowhaven/port/${folder}/${asset}?w=${width}&q=50`;
}
  
export { portCityTownLink, portCityPortLink };

export const town_generalviews = [
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
  },
  {
    asset: "general_views109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views109",
  },
  {
    asset: "general_views110.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views110",
  },
  {
    asset: "general_views111.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views111",
  },
  {
    asset: "general_views112.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views112",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${portCityTownLink("general_views", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const town_buildings = [
  {
    asset: "buildings_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_101",
  },
  {
    asset: "buildings_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_102",
  },
  {
    asset: "buildings_103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_103",
  },
  {
    asset: "buildings_104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_104",
  },
  {
    asset: "buildings_105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_105",
  },
  {
    asset: "buildings_106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_106",
  },
  {
    asset: "buildings_107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_107",
  },
  {
    asset: "buildings_108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_108",
  },
  {
    asset: "buildings_109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_109",
  },
  {
    asset: "buildings_110.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_110",
  },
  {
    asset: "buildings_111.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_111",
  },
  {
    asset: "buildings_112.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_112",
  },
  {
    asset: "buildings_113.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_113",
  },
  {
    asset: "buildings_114.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_114",
  },
  {
    asset: "buildings_115.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_115",
  },
  {
    asset: "buildings_116.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_116",
  },
  {
    asset: "buildings_117.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_117",
  },
  {
    asset: "buildings_118.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_118",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${portCityTownLink("buildings", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const town_scenery = [
  {
    asset: "details_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for details_1",
  },
  {
    asset: "details_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for details_2",
  },
  {
    asset: "details_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for details_3",
  },
  {
    asset: "details_4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for details_4",
  },
  {
    asset: "details_5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for details_5",
  },
  {
    asset: "details_6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for details_6",
  },
  {
    asset: "details_7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for details_7",
  },
  {
    asset: "details_8.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for details_8",
  },
  {
    asset: "details_9.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for details_9",
  },
  {
    asset: "details_10.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for details_10",
  },
  {
    asset: "details_11.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for details_11",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${portCityTownLink("detail", asset, width)}`,
      alt,
      width,
      height,
    }),
);

/***********************************************************************************/
/*                          PORT AND MARKETPLACE                                   */
/***********************************************************************************/

export const port_general_views = [
  {
    asset: "general_views_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views_101",
  },
  {
    asset: "general_views_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views_102",
  },
  {
    asset: "general_views_103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views_103",
  },
  {
    asset: "general_views_104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views_104",
  },
  {
    asset: "general_views_105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views_105",
  },
  {
    asset: "general_views_106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for general_views_106",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${portCityPortLink("general_views", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const port_buildings_details = [
  {
    asset: "buildings_dets_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_dets_1",
  },
  {
    asset: "buildings_dets_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_dets_2",
  },
  {
    asset: "buildings_dets_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_dets_3",
  },
  {
    asset: "buildings_dets_4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_dets_4",
  },
  {
    asset: "buildings_dets_5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_dets_5",
  },
  {
    asset: "buildings_dets_6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_dets_6",
  },
  {
    asset: "buildings_dets_7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_dets_7",
  },
  {
    asset: "buildings_dets_8.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_dets_8",
  },
  {
    asset: "buildings_dets_9.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_dets_9",
  },
  {
    asset: "buildings_dets_10.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_dets_10",
  },
  {
    asset: "buildings_dets_11.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_dets_11",
  },
  {
    asset: "buildings_dets_12.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for buildings_dets_12",
  },
].map(({ asset, alt, width, height }) => ({
  src: `${portCityPortLink("buildings_and_details", asset, width)}`,
  alt,
  width,
  height,
}));

export const port_boats = [
  {
    asset: "boats_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for boats_101",
  },
  {
    asset: "boats_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for boats_102",
  },
  {
    asset: "boats_103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for boats_103",
  },
  {
    asset: "boats_104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for boats_104",
  },
  {
    asset: "boats_105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for boats_105",
  },
  {
    asset: "boats_106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for boats_106",
  },
].map(({ asset, alt, width, height }) => ({
  src: `${portCityPortLink("boats", asset, width)}`,
  alt,
  width,
  height,
}));