
function stardewValleyGeneralLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}minecraft_pictures/pelican_town/${folder}/${asset}?w=${width}&q=50`;
}

function stardewValleyMainCityLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}minecraft_pictures/pelican_town/Main_city/${folder}/${asset}?w=${width}&q=50`;
}

function stardewValleyFarmBusPathLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}minecraft_pictures/pelican_town/farm_bus_path/${folder}/${asset}?w=${width}&q=50`;
}

function stardewValleyForestLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}minecraft_pictures/pelican_town/forest/${folder}/${asset}?w=${width}&q=50`;
}

function stardewValleyMountainLakeLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}minecraft_pictures/pelican_town/Mountain_train/${folder}/${asset}?w=${width}&q=50`;
}
  
export { stardewValleyGeneralLink, 
  stardewValleyMainCityLink, 
  stardewValleyFarmBusPathLink, 
  stardewValleyForestLink, 
  stardewValleyMountainLakeLink 
};


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

/*************************************************************************/
/*                          Main City                                    */
/*************************************************************************/

export const MainCityConstruction = [
  {
    asset: "lc_construction_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_1",
  },
  {
    asset: "lc_construction_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_2",
  },
  {
    asset: "lc_construction_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_3",
  },
  {
    asset: "lc_construction_4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_4",
  },
  {
    asset: "lc_construction_5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_5",
  },
  {
    asset: "lc_construction_6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_6",
  },
  {
    asset: "lc_construction_7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_7",
  },
  {
    asset: "lc_construction_8.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_8",
  },
  {
    asset: "lc_construction_9.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_9",
  },
  {
    asset: "lc_construction_10.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_10",
  },
  {
    asset: "lc_construction_11.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_11",
  },
  {
    asset: "lc_construction_12.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_12",
  },
  {
    asset: "lc_construction_13.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_13",
  },
  {
    asset: "lc_construction_14.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_14",
  },
  {
    asset: "lc_construction_15.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_15",
  },
  {
    asset: "lc_construction_16.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_16",
  },
  {
    asset: "lc_construction_17.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_17",
  },
  {
    asset: "lc_construction_18.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_18",
  },
  {
    asset: "lc_construction_19.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_construction_19",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyMainCityLink("Construction", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const MainCityProgress = [
  {
    asset: "lc_progress_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_1",
  },
  {
    asset: "lc_progress_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_2",
  },
  {
    asset: "lc_progress_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_3",
  },
  {
    asset: "lc_progress_4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_4",
  },
  {
    asset: "lc_progress_5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_5",
  },
  {
    asset: "lc_progress_6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_6",
  },
  {
    asset: "lc_progress_7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_7",
  },
  {
    asset: "lc_progress_8.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_8",
  },
  {
    asset: "lc_progress_9.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_9",
  },
  {
    asset: "lc_progress_10.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_10",
  },
  {
    asset: "lc_progress_11.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_11",
  },
  {
    asset: "lc_progress_12.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_12",
  },
  {
    asset: "lc_progress_13.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_13",
  },
  {
    asset: "lc_progress_14.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_14",
  },
  {
    asset: "lc_progress_15.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_15",
  },
  {
    asset: "lc_progress_16.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_16",
  },
  {
    asset: "lc_progress_17.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_17",
  },
  {
    asset: "lc_progress_18.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for lc_progress_18",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyMainCityLink("Progress", asset, width)}`,
      alt,
      width,
      height,
    }),
);

/*************************************************************************/
/*                      Farm Bus Path                                    */
/*************************************************************************/

export const FarmBusPathConstruction = [
  {
    asset: "farm_bus_const_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_const_1",
  },
  {
    asset: "farm_bus_const_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_const_2",
  },
  {
    asset: "farm_bus_const_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_const_3",
  },
  {
    asset: "farm_bus_const_4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_const_4",
  },
  {
    asset: "farm_bus_const_5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_const_5",
  },
  {
    asset: "farm_bus_const_6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_const_6",
  },
  {
    asset: "farm_bus_const_7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_const_7",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyFarmBusPathLink("construction", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const FarmBusPathProgress = [
  {
    asset: "farm_bus_prog_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_prog_1",
  },
  {
    asset: "farm_bus_prog_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_prog_2",
  },
  {
    asset: "farm_bus_prog_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_prog_3",
  },
  {
    asset: "farm_bus_prog_4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_prog_4",
  },
  {
    asset: "farm_bus_prog_5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_prog_5",
  },
  {
    asset: "farm_bus_prog_6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_prog_6",
  },
  {
    asset: "farm_bus_prog_7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_prog_7",
  },
  {
    asset: "farm_bus_prog_8.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for farm_bus_prog_8",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyFarmBusPathLink("progress", asset, width)}`,
      alt,
      width,
      height,
    }),
);

/*************************************************************************/
/*                             Forest                                    */
/*************************************************************************/

export const ForestConstruction = [
  {
    asset: "forest_const_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_1",
  },
  {
    asset: "forest_const_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_2",
  },
  {
    asset: "forest_const_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_3",
  },
  {
    asset: "forest_const_4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_4",
  },
  {
    asset: "forest_const_5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_5",
  },
  {
    asset: "forest_const_6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_6",
  },
  {
    asset: "forest_const_7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_7",
  },
  {
    asset: "forest_const_8.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_8",
  },
  {
    asset: "forest_const_9.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_9",
  },
  {
    asset: "forest_const_10.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_10",
  },
  {
    asset: "forest_const_11.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_11",
  },
  {
    asset: "forest_const_12.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_12",
  },
  {
    asset: "forest_const_13.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_13",
  },
  {
    asset: "forest_const_14.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_14",
  },
  {
    asset: "forest_const_15.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_15",
  },
  {
    asset: "forest_const_16.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_16",
  },
  {
    asset: "forest_const_17.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_const_17",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyForestLink("construction", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const ForestProgress = [
  {
    asset: "forest_prog_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_1",
  },
  {
    asset: "forest_prog_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_2",
  },
  {
    asset: "forest_prog_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_3",
  },
  {
    asset: "forest_prog_4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_4",
  },
  {
    asset: "forest_prog_5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_5",
  },
  {
    asset: "forest_prog_6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_6",
  },
  {
    asset: "forest_prog_7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_7",
  },
  {
    asset: "forest_prog_8.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_8",
  },
  {
    asset: "forest_prog_9.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_9",
  },
  {
    asset: "forest_prog_10.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_10",
  },
  {
    asset: "forest_prog_11.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_11",
  },
  {
    asset: "forest_prog_12.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_12",
  },
  {
    asset: "forest_prog_13.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_13",
  },
  {
    asset: "forest_prog_14.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for forest_prog_14",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyForestLink("progress", asset, width)}`,
      alt,
      width,
      height,
    }),
);

/*************************************************************************/
/*                          Mountain Lake                                */
/*************************************************************************/

export const MountainLakeConstruction = [
  {
    asset: "mountain_const_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_1",
  },
  {
    asset: "mountain_const_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_2",
  },
  {
    asset: "mountain_const_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_3",
  },
  {
    asset: "mountain_const_4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_4",
  },
  {
    asset: "mountain_const_5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_5",
  },
  {
    asset: "mountain_const_6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_6",
  },
  {
    asset: "mountain_const_7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_7",
  },
  {
    asset: "mountain_const_8.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_8",
  },
  {
    asset: "mountain_const_9.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_9",
  },
  {
    asset: "mountain_const_10.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_10",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyMountainLakeLink("construction", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const MountainLakeProgress = [
  {
    asset: "mount_prog_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mount_prog_1",
  },
  {
    asset: "mount_prog_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mount_prog_2",
  },
  {
    asset: "mount_prog_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mount_prog_3",
  },
  {
    asset: "mount_prog_4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mount_prog_4",
  },
  {
    asset: "mount_prog_5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mount_prog_5",
  },
  {
    asset: "mount_prog_6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mount_prog_6",
  },
  {
    asset: "mount_prog_7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mount_prog_7",
  },
  {
    asset: "mount_prog_8.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mount_prog_8",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyMountainLakeLink("progress", asset, width)}`,
      alt,
      width,
      height,
    }),
);