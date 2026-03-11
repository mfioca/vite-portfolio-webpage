function stardewValleyLink(region: string, folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}minecraft_pictures/pelican_town/${region}/${folder}/${asset}?w=${width}&q=50`;
}

export { stardewValleyLink };


export const PelicanTownOverview = {
  src: `${import.meta.env.BASE_URL}minecraft_pictures/pelican_town/Pelican_Town.jpg`,
  width: 1600,
  height: 900,
  alt: "Full overview screenshot of the Pelican Town build",
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
      src: `${stardewValleyLink("","Stardew_grid", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const SidebySide = [
  {
    asset: "side_by_side_1.jpg",
    width: 900,
    height: 1140,
    alt: "Placeholder description for side_by_side_1",
  },
  {
    asset: "side_by_side_2.jpg",
    width: 900,
    height: 1140,
    alt: "Placeholder description for side_by_side_2",
  },
  {
    asset: "side_by_side_3.jpg",
    width: 900,
    height: 1140,
    alt: "Placeholder description for side_by_side_3",
  },
  {
    asset: "side_by_side_4.jpg",
    width: 900,
    height: 1140,
    alt: "Placeholder description for side_by_side_4",
  },
  {
    asset: "side_by_side_5.jpg",
    width: 900,
    height: 1140,
    alt: "Placeholder description for side_by_side_5",
  },
  {
    asset: "side_by_side_6.jpg",
    width: 900,
    height: 1140,
    alt: "Placeholder description for side_by_side_6",
  },
  {
    asset: "side_by_side_7.jpg",
    width: 900,
    height: 1140,
    alt: "Placeholder description for side_by_side_7",
  },
  {
    asset: "side_by_side_8.jpg",
    width: 900,
    height: 1140,
    alt: "Placeholder description for side_by_side_8",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyLink("", "side_by_side", asset, width)}`,
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
      src: `${stardewValleyLink("","Beach", asset, width)}`,
      alt,
      width,
      height,
    }),
);

/*************************************************************************/
/*                         Showcase Pictures                             */
/*************************************************************************/

export const ShowcasePictures = [
  { asset: "town.jpg", width: 1280, height: 704, alt: "Pelican Town overview" },
  { asset: "community_center.jpg", width: 1280, height: 704, alt: "Community Center area" },
  { asset: "beach.jpg", width: 1280, height: 704, alt: "Pelican Town beach" },
  { asset: "bus_stop.jpg", width: 1280, height: 704, alt: "Bus stop area" },
  { asset: "farm.jpg", width: 1280, height: 704, alt: "Farm area" },
  { asset: "forest.jpg", width: 1280, height: 704, alt: "Cindersap forest overview" },
  { asset: "forest_1.jpg", width: 1280, height: 704, alt: "Cindersap forest detail" },
  { asset: "secret_forest.jpg", width: 1280, height: 704, alt: "Secret forest area" },
  { asset: "mountain_lake.jpg", width: 1280, height: 704, alt: "Mountain lake region" },
  { asset: "rock_quarry.jpg", width: 1280, height: 704, alt: "Rock quarry area" },
  { asset: "train.jpg", width: 1280, height: 704, alt: "Railroad area" },
  { asset: "desert.jpg", width: 1280, height: 704, alt: "Calico desert recreation" },
].map(
  ({ asset, alt, width, height }) => ({
    src: `${stardewValleyLink("", "showcase_pictures", asset, width)}`,
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
      src: `${stardewValleyLink("Main_city", "Construction", asset, width)}`,
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
      src: `${stardewValleyLink("Main_city", "Progress", asset, width)}`,
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
      src: `${stardewValleyLink("farm_bus_path", "construction", asset, width)}`,
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
      src: `${stardewValleyLink("farm_bus_path", "progress", asset, width)}`,
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
      src: `${stardewValleyLink("forest", "construction", asset, width)}`,
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
      src: `${stardewValleyLink("forest", "progress", asset, width)}`,
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
  },
  {
    asset: "mountain_const_11.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_11",
  },
  {
    asset: "mountain_const_12.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_12",
  },
  {
    asset: "mountain_const_13.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_13",
  },
  {
    asset: "mountain_const_14.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_14",
  },
  {
    asset: "mountain_const_15.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mountain_const_15",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyLink("Mountain_train", "construction", asset, width)}`,
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
  },
  {
    asset: "mount_prog_9.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mount_prog_9",
  },
  {
    asset: "mount_prog_10.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mount_prog_10",
  },
  {
    asset: "mount_prog_11.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for mount_prog_11",
  }
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyLink("Mountain_train", "progress", asset, width)}`,
      alt,
      width,
      height,
    }),
);

/*************************************************************************/
/*                          Desert Area                                  */
/*************************************************************************/

export const DesertConstruction = [
  {
    asset: "desert_const_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for desert_const_1",
  },
  {
    asset: "desert_const_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for desert_const_2",
  },
  {
    asset: "desert_const_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for desert_const_3",
  },
  {
    asset: "desert_const_4.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for desert_const_4",
  },
  {
    asset: "desert_const_5.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for desert_const_5",
  },
  {
    asset: "desert_const_6.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for desert_const_6",
  },
    {
    asset: "desert_const_7.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for desert_const_7",
  },
  {
    asset: "desert_const_8.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for desert_const_8",
  },
  {
    asset: "desert_const_9.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for desert_const_9",
  },
  {
    asset: "desert_const_10.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for desert_const_10",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${stardewValleyLink("Desert_area", "construction", asset, width)}`,
      alt,
      width,
      height,
    }),
);

