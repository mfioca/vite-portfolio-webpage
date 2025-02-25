import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(folder: string, asset: string, width: number) {
  return `${import.meta.env.BASE_URL}whiterun_building_city/${folder}/${asset}?w=${width}&q=75`;
}
  
export { breakpoints, assetLink };

export const enterance_photos = [
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
      height: 720,
      alt: "Placeholder description for building 103",
    },
    {
      asset: "building_104.jpeg",
      width: 1280,
      height: 720,
      alt: "Placeholder description for building 104",
    },
    {
      asset: "building_105.jpeg",
      width: 1280,
      height: 720,
      alt: "Placeholder description for building 105",
    },
    {
      asset: "building_106.jpeg",
      width: 1280,
      height: 720,
      alt: "Placeholder description for building 106",
    },
    {
      asset: "building_107.jpeg",
      width: 1280,
      height: 720,
      alt: "Placeholder description for building 107",
    },
    {
      asset: "building_108.jpeg",
      width: 1280,
      height: 720,
      alt: "Placeholder description for building 108",
    },
    {
      asset: "building_109.jpeg",
      width: 1280,
      height: 720,
      alt: "Placeholder description for building 109",
    },
    {
      asset: "building_110.jpeg",
      width: 1280,
      height: 720,
      alt: "Placeholder description for building 110",
    },
    {
      asset: "building_111.jpeg",
      width: 1280,
      height: 720,
      alt: "Placeholder description for building 111",
    },
].map(
    ({ asset, alt, width, height }) =>
        ({
            src: assetLink(asset, width),
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

export const section_1 = [
  {
    asset: "building_201.jpeg",
    width: 1080,
    height: 780,
    alt: "Placeholder description for building 201",
  },
  {
    asset: "building_202.jpeg",
    width: 1280,
    height: 720,
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
    width: 1280,
    height: 720,
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
        src: assetLink(asset, width),
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


  
 