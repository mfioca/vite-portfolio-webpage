import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}whiterun_building_city/${folder}/${asset}?w=${width}&q=75`;
}
  
export { breakpoints, assetLink };

export const building_enterance = [
    {
      asset: "building_101.jpeg",
      width: 1080,
      height: 780,
      alt: "Placeholder description for building 101",
    },
    {
      asset: "building_102.jpeg",
      width: 1280,
      height: 300,
      alt: "Placeholder description for building 102",
    },
    {
      asset: "building_103.jpeg",
      width: 1280,
      height: 1420,
      alt: "Placeholder description for building 103",
    },
    {
      asset: "building_104.jpeg",
      width: 1680,
      height: 800,
      alt: "Placeholder description for building 104",
    },
    {
      asset: "building_105.jpeg",
      width: 1280,
      height: 900,
      alt: "Placeholder description for building 105",
    },
    {
      asset: "building_106.jpeg",
      width: 1280,
      height: 600,
      alt: "Placeholder description for building 106",
    },
    {
      asset: "building_107.jpeg",
      width: 1280,
      height: 700,
      alt: "Placeholder description for building 107",
    },
    {
      asset: "building_108.jpeg",
      width: 1280,
      height: 1500,
      alt: "Placeholder description for building 108",
    },
    {
      asset: "building_109.jpeg",
      width: 1000,
      height: 900,
      alt: "Placeholder description for building 109",
    },
    {
      asset: "building_110.jpeg",
      width: 1280,
      height: 800,
      alt: "Placeholder description for building 110",
    },
    {
      asset: "building_111.jpeg",
      width: 1280,
      height: 350,
      alt: "Placeholder description for building 111",
    },
].map(
    ({ asset, alt, width, height }) =>
        ({
            src: assetLink("enterance", asset, width),
            alt,
            width,
            height,
            srcSet: breakpoints.map((breakpoint) => ({
                src: assetLink("enterance", asset, width),
                width: breakpoint,
                height: Math.round(breakpoint * (height / width)), // Maintain aspect ratio
        })),
    }) as Photo,
);

export const building_section_1 = [
  {
    asset: "building_201.jpeg",
    width: 1080,
    height: 780,
    alt: "Placeholder description for building 201",
  },
  {
    asset: "building_202.jpeg",
    width: 1280,
    height: 400,
    alt: "Placeholder description for building 202",
  },
  {
    asset: "building_203.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 203",
  },
  {
    asset: "building_204.jpeg",
    width: 1000,
    height: 900,
    alt: "Placeholder description for building 204",
  },
  {
    asset: "building_205.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 205",
  },
  {
    asset: "building_206.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 206",
  },
  {
    asset: "building_207.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 207",
  },
  {
    asset: "building_208.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 208",
  },
  {
    asset: "building_209.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 209",
  },
  {
    asset: "building_210.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 210",
  },
  {
    asset: "building_211.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 211",
  },
  {
    asset: "building_212.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 212",
  },
  {
    asset: "building_213.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 213",
  },
  {
    asset: "building_214.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 214",
  },
  {
    asset: "building_215.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 215",
  },
  {
    asset: "building_216.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 216",
  },
  {
    asset: "building_217.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 217",
  },
  {
    asset: "building_218.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 218",
  },
].map(
  ({ asset, alt, width, height }) =>
      ({
        src: assetLink("section_1", asset, width),
          alt,
          width,
          height,
          srcSet: breakpoints.map((breakpoint) => ({
              src: assetLink("section_1", asset, width),
              width: breakpoint,
              height: Math.round(breakpoint * (height / width)), // Maintain aspect ratio
      })),
  }) as Photo,
);

export const building_section_2 = [
  {
    asset: "building_301.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 301",
  },
  {
    asset: "building_302.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 302",
  },
  {
    asset: "building_303.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 303",
  },
  {
    asset: "building_304.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 304",
  },
  {
    asset: "building_305.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 305",
  },
  {
    asset: "building_306.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 306",
  },
  {
    asset: "building_307.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 307",
  },
  {
    asset: "building_308.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 308",
  },
  {
    asset: "building_309.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 309",
  },
  {
    asset: "building_310.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 310",
  },
  {
    asset: "building_311.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 311",
  },
  {
    asset: "building_312.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 312",
  },
  {
    asset: "building_313.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 313",
  },
  {
    asset: "building_314.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 314",
  },
  {
    asset: "building_315.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 315",
  },
  {
    asset: "building_316.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 316",
  },
  {
    asset: "building_317.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 317",
  },
  {
    asset: "building_318.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 318",
  },
  {
    asset: "building_319.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 319",
  },
  {
    asset: "building_320.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 320",
  },
  {
    asset: "building_321.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 321",
  },
  {
    asset: "building_322.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 322",
  },
  {
    asset: "building_323.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 323",
  },
].map(
  ({ asset, alt, width, height }) =>
      ({
          src: assetLink("section_2", asset, width),
          alt,
          width,
          height,
          srcSet: breakpoints.map((breakpoint) => ({
              src: assetLink("section_2", asset, width),
              width: breakpoint,
              height: Math.round(breakpoint * (height / width)), // Maintain aspect ratio
          })),
  }) as Photo,
);
  
export const building_keep = [
  {
    asset: "building_401.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 401",
  },
  {
    asset: "building_402.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 402",
  },
  {
    asset: "building_403.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 403",
  },
  {
    asset: "building_404.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 404",
  },
  {
    asset: "building_405.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 405",
  },
  {
    asset: "building_406.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 406",
  },
  {
    asset: "building_407.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 407",
  },
  {
    asset: "building_408.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 408",
  },
  {
    asset: "building_409.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 409",
  },
  {
    asset: "building_410.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 410",
  },
  {
    asset: "building_411.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 411",
  },
  {
    asset: "building_412.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 412",
  },
  {
    asset: "building_413.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 413",
  },
  {
    asset: "building_414.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 414",
  },
  {
    asset: "building_415.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 415",
  },
  {
    asset: "building_416.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 416",
  },
  {
    asset: "building_417.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 417",
  },
  {
    asset: "building_418.jpeg",
    width: 1280,
    height: 720,
    alt: "Placeholder description for building 418",
  },
].map(
  ({ asset, alt, width, height }) =>
      ({
          src: assetLink("keep", asset, width),
          alt,
          width,
          height,
          srcSet: breakpoints.map((breakpoint) => ({
              src: assetLink("keep", asset, width),
              width: breakpoint,
              height: Math.round(breakpoint * (height / width)), // Maintain aspect ratio
          })),
  }) as Photo,
);