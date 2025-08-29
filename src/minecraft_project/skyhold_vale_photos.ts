
function skyValeLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}minecraft_pictures/skyhold_vale/${folder}/${asset}?w=${width}&q=50`;
}

function skyValeInnerCityLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}minecraft_pictures/skyhold_vale/inner_city/${folder}/${asset}?w=${width}&q=50`;
}
  
export { skyValeLink, skyValeInnerCityLink };

export const skyvale_mountain = [
  {
    asset: "Skyhold_vale_mountain1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_mountain1",
  },
  {
    asset: "Skyhold_vale_mountain2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_mountain2",
  },
  {
    asset: "Skyhold_vale_mountain3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_mountain3",
  },
  {
    asset: "Skyhold_vale_mountain4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_mountain4",
  },
  {
    asset: "Skyhold_vale_mountain5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_mountain5",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${skyValeLink("mountain", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const skyvale_outskirts = [
  {
    asset: "Skyhold_vale_outskirts1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_outskirts1",
  },
  {
    asset: "Skyhold_vale_outskirts2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_outskirts2",
  },
  {
    asset: "Skyhold_vale_outskirts3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_outskirts3",
  },
  {
    asset: "Skyhold_vale_outskirts4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_outskirts4",
  },
  {
    asset: "Skyhold_vale_outskirts5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_outskirts5",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${skyValeLink("outskirts", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const skyvale_castle = [
  {
    asset: "Skyhold_vale_castle1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_castle1",
  },
  {
    asset: "Skyhold_vale_castle2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_castle2",
  },
  {
    asset: "Skyhold_vale_castle3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_castle3",
  },
  {
    asset: "Skyhold_vale_castle4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_castle4",
  },
  {
    asset: "Skyhold_vale_castle5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_castle5",
  },
  {
    asset: "Skyhold_vale_castle6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_castle6",
  },
  {
    asset: "Skyhold_vale_castle7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_castle7",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${skyValeLink("castle", asset, width)}`,
      alt,
      width,
      height,
    }),
);

/***********************************************************************************/
/*                          PORT AND MARKETPLACE                                   */
/***********************************************************************************/

export const skyvale_inner_city_construction = [
  {
    asset: "Skyhold_vale_inner_city_const1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_const1",
  },
  {
    asset: "Skyhold_vale_inner_city_const2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_const2",
  },
  {
    asset: "Skyhold_vale_inner_city_const3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_const3",
  },
  {
    asset: "Skyhold_vale_inner_city_const4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_const4",
  },
  {
    asset: "Skyhold_vale_inner_city_const5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_const5",
  },
  {
    asset: "Skyhold_vale_inner_city_const6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_const6",
  },
  {
    asset: "Skyhold_vale_inner_city_const7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_const7",
  },
  {
    asset: "Skyhold_vale_inner_city_const8.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_const8",
  },
  {
    asset: "Skyhold_vale_inner_city_const9.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_const9",
  },
  {
    asset: "Skyhold_vale_inner_city_const10.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_const10",
  },
  {
    asset: "Skyhold_vale_inner_city_const11.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_const11",
  },
  {
    asset: "Skyhold_vale_inner_city_const12.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_const12",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${skyValeInnerCityLink("construction", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const skyvale_inner_city_detail_views = [
  {
    asset: "Skyhold_vale_inner_city_details1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details1",
  },
  {
    asset: "Skyhold_vale_inner_city_details2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details2",
  },
  {
    asset: "Skyhold_vale_inner_city_details3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details3",
  },
  {
    asset: "Skyhold_vale_inner_city_details4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details4",
  },
  {
    asset: "Skyhold_vale_inner_city_details5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details5",
  },
  {
    asset: "Skyhold_vale_inner_city_details6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details6",
  },
  {
    asset: "Skyhold_vale_inner_city_details7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details7",
  },
  {
    asset: "Skyhold_vale_inner_city_details8.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details8",
  },
  {
    asset: "Skyhold_vale_inner_city_details9.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details9",
  },
  {
    asset: "Skyhold_vale_inner_city_details10.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details10",
  },
  {
    asset: "Skyhold_vale_inner_city_details11.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details11",
  },
  {
    asset: "Skyhold_vale_inner_city_details12.png",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details12",
  },
  {
    asset: "Skyhold_vale_inner_city_details13.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details13",
  },
  {
    asset: "Skyhold_vale_inner_city_details14.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details14",
  },
  {
    asset: "Skyhold_vale_inner_city_details15.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details15",
  },
  {
    asset: "Skyhold_vale_inner_city_details16.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details16",
  },
  {
    asset: "Skyhold_vale_inner_city_details17.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details17",
  },
  {
    asset: "Skyhold_vale_inner_city_details18.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for Skyhold_vale_inner_city_details18",
  }
].map(({ asset, alt, width, height }) => ({
  src: `${skyValeInnerCityLink("detail_views", asset, width)}`,
  alt,
  width,
  height,
}));

