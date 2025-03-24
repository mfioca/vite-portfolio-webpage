
function whiterunConstructionLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}whiterun/whiterun_building_city/${folder}/${asset}?w=${width}&q=50`;
}

function whiterunSplitScreenLink(asset: string, width: number) {
  return `${import.meta.env.BASE_URL}whiterun/whiterun_minecraft_split_screen/${asset}?w=${width}&q=50`;
}

function whiterundetailLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}whiterun/whiterun_city_after/${folder}/${asset}?w=${width}&q=50`;
}
  
export { whiterunConstructionLink, whiterunSplitScreenLink, whiterundetailLink };

export const building_enterance = [
  {
    asset: "building_101.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 101",        
  },
  {
      asset: "building_102.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 102",
  },
  {
      asset: "building_103.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 103",
  },
  {
      asset: "building_104.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 104",
  },
  {
      asset: "building_105.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 105",
  },
  {
      asset: "building_106.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 106",
  },
  {
      asset: "building_107.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 107",
  },
  {
      asset: "building_108.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 108",
  },
  {
      asset: "building_109.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 109",
  },
  {
      asset: "building_111.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 111",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${whiterunConstructionLink("enterance", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const building_section_1 = [
  {
    asset: "building_200.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 200",
  },
  {
      asset: "building_201.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 201",
  },
  {
      asset: "building_202.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 202",
  },
  {
      asset: "building_203.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 203",
  },
  {
      asset: "building_204.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 204",
  },
  {
      asset: "building_205.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 205",
  },
  {
      asset: "building_206.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 206",
  },
  {
      asset: "building_207.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 207",
  },
  {
      asset: "building_208.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 208",
  },
  {
      asset: "building_209.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 209",
  },
  {
      asset: "building_210.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 210",
  },
  {
      asset: "building_211.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 211",
  },
  {
      asset: "building_212.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 212",
  },
  {
      asset: "building_213.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 213",
  },
  {
      asset: "building_214.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 214",
  },
  {
      asset: "building_215.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 215",
  },
  {
      asset: "building_216.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 216",
  },
  {
      asset: "building_217.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 217",
  },
  {
      asset: "building_218.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 218",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${whiterunConstructionLink("section_1", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const building_section_2 = [
  {
    asset: "building_301.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 301",
  },
  {
      asset: "building_302.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 302",
  },
  {
      asset: "building_303.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 303",
  },
  {
      asset: "building_304.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 304",
  },
  {
      asset: "building_305.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 305",
  },
  {
      asset: "building_306.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 306",
  },
  {
      asset: "building_307.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 307",
  },
  {
      asset: "building_308.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 308",
  },
  {
      asset: "building_309.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 309",
  },
  {
      asset: "building_310.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 310",
  },
  {
      asset: "building_311.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 311",
  },
  {
      asset: "building_312.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 312",
  },
  {
      asset: "building_313.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 313",
  },
  {
      asset: "building_314.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 314",
  },
  {
      asset: "building_315.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 315",
  },
  {
      asset: "building_316.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 316",
  },
  {
      asset: "building_317.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 317",
  },
  {
      asset: "building_318.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 318",
  },
  {
      asset: "building_319.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 319",
  },
  {
      asset: "building_320.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 320",
  },
  {
      asset: "building_321.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 321",
  },
  {
      asset: "building_322.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 322",
  },
  {
      asset: "building_323.jpeg",
      width: 1280,
      height: 680,
      alt: "Placeholder description for building 323",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${whiterunConstructionLink("section_2", asset, width)}`,
      alt,
      width,
      height,
    }),
);
  
export const building_keep = [
  {
    asset: "building_401.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 401",
},
{
    asset: "building_402.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 402",
},
{
    asset: "building_403.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 403",
},
{
    asset: "building_404.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 404",
},
{
    asset: "building_405.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 405",
},
{
    asset: "building_406.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 406",
},
{
    asset: "building_409.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 409",
},
{
    asset: "building_412.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 412",
},
{
    asset: "building_413.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 413",
},
{
    asset: "building_414.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 414",
},
{
    asset: "building_415.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 415",
},
{
    asset: "building_416.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 416",
},
{
    asset: "building_417.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 417",
},
{
    asset: "building_418.jpeg",
    width: 1280,
    height: 680,
    alt: "Placeholder description for building 418",
},
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${whiterunConstructionLink("keep", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const building_random_extras = [
  {
    asset: "random101.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for random101",
  },
  {
    asset: "random102.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for random102",
  },
  {
    asset: "random103.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for random103",
  },
  {
    asset: "random104.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for random104",
  },
  {
    asset: "random105.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for random105",
  },
  {
    asset: "random106.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for random106",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${whiterunConstructionLink("random_extras", asset, width)}`,
      alt,
      width,
      height,
    }),
);

/***********************************************************************************/
/*                          SIDE BY SIDE SECTION                                   */
/***********************************************************************************/


export const side_by_side = [
  {
    asset: "side_by_side101.jpg",
    width: 800,
    height: 900,
    alt: "Placeholder description for side_by_side101",
  },
  {
    asset: "side_by_side102.jpg",
    width: 1000,
    height: 900,
    alt: "Placeholder description for side_by_side102",
  },
  {
    asset: "side_by_side103.jpg",
    width: 600,
    height: 800,
    alt: "Placeholder description for side_by_side103",
  },
  {
    asset: "side_by_side104.jpg",
    width: 600,
    height: 500,
    alt: "Placeholder description for side_by_side104",
  },
  {
    asset: "side_by_side105.jpg",
    width: 900,
    height: 900,
    alt: "Placeholder description for side_by_side105",
  },
  {
    asset: "side_by_side106.jpg",
    width: 600,
    height: 900,
    alt: "Placeholder description for side_by_side106",
  },
  {
    asset: "side_by_side107.jpg",
    width: 700,
    height: 900,
    alt: "Placeholder description for side_by_side107",
  },
  {
    asset: "side_by_side108.jpg",
    width: 900,
    height: 800,
    alt: "Placeholder description for side_by_side108",
  },
  {
    asset: "side_by_side109.jpg",
    width: 1280,
    height: 850,
    alt: "Placeholder description for side_by_side109",
  },
  {
    asset: "side_by_side110.jpg",
    width: 800,
    height: 600,
    alt: "Placeholder description for side_by_side110",
  },
  {
    asset: "side_by_side111.jpg",
    width: 900,
    height: 800,
    alt: "Placeholder description for side_by_side111",
  },
  {
    asset: "side_by_side112.jpg",
    width: 800,
    height: 700,
    alt: "Placeholder description for side_by_side112",
  },
  {
    asset: "side_by_side113.jpg",
    width: 800,
    height: 800,
    alt: "Placeholder description for side_by_side113",
  },
  {
    asset: "side_by_side114.jpg",
    width: 800,
    height: 900,
    alt: "Placeholder description for side_by_side114",
  },
  {
    asset: "side_by_side115.jpg",
    width: 800,
    height: 600,
    alt: "Placeholder description for side_by_side115",
  },
  {
    asset: "side_by_side116.jpg",
    width: 1000,
    height: 900,
    alt: "Placeholder description for side_by_side116",
  },
  {
    asset: "side_by_side117.jpg",
    width: 900,
    height: 700,
    alt: "Placeholder description for side_by_side117",
  },
  {
    asset: "side_by_side118.jpg",
    width: 900,
    height: 1100,
    alt: "Placeholder description for side_by_side118",
  },
  {
    asset: "side_by_side119.jpg",
    width: 1100,
    height: 700,
    alt: "Placeholder description for side_by_side119",
  },
  {
    asset: "side_by_side120.jpg",
    width: 800,
    height: 600,
    alt: "Placeholder description for side_by_side120",
  },
  {
    asset: "side_by_side121.jpg",
    width: 900,
    height: 900,
    alt: "Placeholder description for side_by_side121",
  },
  {
    asset: "side_by_side122.jpg",
    width: 800,
    height: 1000,
    alt: "Placeholder description for side_by_side122",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${whiterunSplitScreenLink(asset, width)}&t=${Date.now()}`,
      alt,
      width,
      height,
    })
);


/***********************************************************************************/
/*                          After Build detail pictures                            */
/***********************************************************************************/

export const city_gates_details = [
  {
    asset: "gates_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_101",
  },
  {
    asset: "gates_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_102",
  },
  {
    asset: "gates_103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_103",
  },
  {
    asset: "gates_104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_104",
  },
  {
    asset: "gates_105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_105",
  },
  {
    asset: "gates_106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_106",
  },
  {
    asset: "gates_107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_107",
  },
  {
    asset: "gates_108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_108",
  },
  {
    asset: "gates_109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_109",
  },
  {
    asset: "gates_110.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_110",
  },
  {
    asset: "gates_111.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_111",
  },
  {
    asset: "gates_112.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_112",
  },
  {
    asset: "gates_113.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_113",
  },
  {
    asset: "gates_114.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_114",
  },
  {
    asset: "gates_115.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_115",
  },
  {
    asset: "gates_116.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for gates_116",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${whiterundetailLink("city_gates", asset, width)}`,
      alt,
      width,
      height,
    })
);

export const section_1_details = [
  {
    asset: "section1_dets_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section1_dets_101",
  },
  {
    asset: "section1_dets_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section1_dets_102",
  },
  {
    asset: "section1_dets_103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section1_dets_103",
  },
  {
    asset: "section1_dets_104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section1_dets_104",
  },
  {
    asset: "section1_dets_105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section1_dets_105",
  },
  {
    asset: "section1_dets_106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section1_dets_106",
  },
  {
    asset: "section1_dets_107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section1_dets_107",
  },
  {
    asset: "section1_dets_108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section1_dets_108",
  },
  {
    asset: "section1_dets_109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section1_dets_109",
  },
  {
    asset: "section1_dets_110.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section1_dets_110",
  },
  {
    asset: "warmaidens_e_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for warmaidens_e_1.jpg",
  },
  {
    asset: "warmaidens_e_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for warmaidens_e_2.jpg",
  },
  {
    asset: "warmaidens_i.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for warmaidens_i.jpg",
  },
  {
    asset: "breezehome_e.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for breezehome_e.jpg",
  },
  {
    asset: "breezehome_i.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for breezehome_i.jpg",
  },
  {
    asset: "the_drunken_huntsman_e.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for the_drunken_huntsman_e.jpg",
  },
  {
    asset: "the_drunken_huntsman_i.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for the_drunken_huntsman_i.jpg",
  },
  {
    asset: "severio_pelagias_house_e.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for severio_pelagias_house_e.jpg",
  },
  {
    asset: "belethors_general_goods_e.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for belethors_general_goods_e.jpg",
  },
  {
    asset: "belethors_general_goods_i.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for belethors_general_goods_i.jpg",
  },
  {
    asset: "arcadias_cauldron_e.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for arcadias_cauldron_e.jpg",
  },
  {
    asset: "arcadias_cauldron_i.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for arcadias_cauldron_i.jpg",
  },
  {
    asset: "the_bannered_mare_e.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for the_bannered_mare_e.jpg",
  },
  {
    asset: "the_bannered_mare_i_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for the_bannered_mare_i_1.jpg",
  },
  {
    asset: "the_bannered_mare_i_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for the_bannered_mare_i_2.jpg",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${whiterundetailLink("section_1", asset, width)}`,
      alt,
      width,
      height,
    })
);

export const section_2_details = [
  {
    asset: "section2_dets_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section2_dets_101",
  },
  {
    asset: "section2_dets_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section2_dets_102",
  },
  {
    asset: "section2_dets_103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section2_dets_103",
  },
  {
    asset: "section2_dets_104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section2_dets_104",
  },
  {
    asset: "section2_dets_105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section2_dets_105",
  },
  {
    asset: "section2_dets_106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section2_dets_106",
  },
  {
    asset: "section2_dets_107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section2_dets_107",
  },
  {
    asset: "section2_dets_108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section2_dets_108",
  },
  {
    asset: "section2_dets_109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for section2_dets_109",
  },
  {
    asset: "house_gray_mane_e.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for house_gray_mane_e.jpg",
  },
  {
    asset: "house_gray_mane_i.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for house_gray_mane_i.jpg",
  },
  {
    asset: "temple_of_kynareth_e.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for temple_of_kynareth_e.jpg",
  },
  {
    asset: "temple_of_kynareth_i.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for temple_of_kynareth_i.jpg",
  },
  {
    asset: "hall_of_the_dead_e.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for hall_of_the_dead_e.jpg",
  },
  {
    asset: "hall_of_the_dead_i.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for hall_of_the_dead_i.jpg",
  },
  {
    asset: "hall_of_the_dead_crypt_i_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for hall_of_the_dead_crypt_i_1.jpg",
  },
  {
    asset: "hall_of_the_dead_crypt_i_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for hall_of_the_dead_crypt_i_2.jpg",
  },
  {
    asset: "house_of_clan_battle-born_e_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for house_of_clan_battle-born_e_1.jpg",
  },
  {
    asset: "house_of_clan_battle-born_e_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for house_of_clan_battle-born_e_2.jpg",
  },
  {
    asset: "house_of_clan_battle-born_i.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for house_of_clan_battle-born_i.jpg",
  },
  {
    asset: "amrens_house_i.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for amrens_house_i.jpg",
  },
  {
    asset: "carlotta_valentias_house_i.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for carlotta_valentias_house_i.jpg",
  },
  {
    asset: "uthgerds_house_i.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for uthgerds_house_i.jpg",
  },
  {
    asset: "heimskrs_house_e.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for heimskrs_house_e.jpg",
  },
  {
    asset: "jorrvaskar_e_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for jorrvaskar_e_1.jpg",
  },
  {
    asset: "jorrvaskar_e_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for jorrvaskar_e_2.jpg",
  },
  {
    asset: "jorrvaskar_e_3.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for jorrvaskar_e_3.jpg",
  },
  {
    asset: "jorrvaskar_top_level.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for jorrvaskar_top_level.jpg",
  },
  {
    asset: "jorrvaskar_lower_level.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for jorrvaskar_lower_level.jpg",
  },
  {
    asset: "skyforge_1.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for skyforge_1.jpg",
  },
  {
    asset: "skyforge_2.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for skyforge_2.jpg",
  },
  {
    asset: "underforge.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for underforge.jpg",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${whiterundetailLink("section_2", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const keep_external_details = [
  {
    asset: "dragonsreach_dets_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_dets_101",
  },
  {
    asset: "dragonsreach_dets_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_dets_102",
  },
  {
    asset: "dragonsreach_dets_103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_dets_103",
  },
  {
    asset: "dragonsreach_dets_104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_dets_104",
  },
  {
    asset: "dragonsreach_dets_105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_dets_105",
  },
  {
    asset: "dragonsreach_dets_106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_dets_106",
  },
  {
    asset: "dragonsreach_dets_107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_dets_107",
  },
  {
    asset: "dragonsreach_dets_108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_dets_108",
  },
  {
    asset: "dragonsreach_dets_109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_dets_109",
  },
  {
    asset: "dragonsreach_dets_110.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_dets_110",
  },
  {
    asset: "dragonsreach_dets_111.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_dets_111",
  },
  {
    asset: "dragonsreach_dets_112.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_dets_112",
  },
  {
    asset: "dragonsreach_dets_113.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_dets_113",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${whiterundetailLink("keep", asset, width)}`,
      alt,
      width,
      height,
    }),
);

export const keep_interior_details = [
  {
    asset: "dragonsreach_int_101.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_101",
  },
  {
    asset: "dragonsreach_int_102.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_102",
  },
  {
    asset: "dragonsreach_int_103.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_103",
  },
  {
    asset: "dragonsreach_int_104.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_104",
  },
  {
    asset: "dragonsreach_int_105.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_105",
  },
  {
    asset: "dragonsreach_int_106.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_106",
  },
  {
    asset: "dragonsreach_int_107.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_107",
  },
  {
    asset: "dragonsreach_int_108.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_108",
  },
  {
    asset: "dragonsreach_int_109.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_109",
  },
  {
    asset: "dragonsreach_int_110.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_110",
  },
  {
    asset: "dragonsreach_int_111.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_111",
  },
  {
    asset: "dragonsreach_int_112.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_112",
  },
  {
    asset: "dragonsreach_int_113.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_113",
  },
  {
    asset: "dragonsreach_int_114.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_114",
  },
  {
    asset: "dragonsreach_int_115.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_115",
  },
  {
    asset: "dragonsreach_int_116.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_116",
  },
  {
    asset: "dragonsreach_int_117.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_117",
  },
  {
    asset: "dragonsreach_int_118.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_118",
  },
  {
    asset: "dragonsreach_int_119.jpg",
    width: 1280,
    height: 704,
    alt: "Placeholder description for dragonsreach_int_119",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: `${whiterundetailLink("keep", asset, width)}`,
      alt,
      width,
      height,
    })
);