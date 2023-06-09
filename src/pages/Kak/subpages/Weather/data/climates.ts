// import { background } from "./backgrounds";

// const [
//   backgrounds_snow,
//   backgrounds_rain,
//   backgrounds_sunny,
//   backgrounds_partly_cloudy,
//   backgrounds_cloudy,
//   backgrounds_hailing,
//   backgrounds_lightning,
// ] = background;

// const sunny = {
//   backgrounds: backgrounds_sunny,
//   humidity: Math.floor(Math.random() * 100),
//   precipitation: 0,
//   Visibility: 100,
//   wind: Math.floor(Math.random() * 47) + 1,
// };
// const partly_cloudy = {
//   backgrounds: backgrounds_partly_cloudy,
//   humidity: Math.floor(Math.random() * 70) + 31,
//   precipitation: Math.floor(Math.random() * 41),
//   Visibility: Math.floor(Math.random() * 31) + 70,
//   wind: 30 + Math.floor(Math.random() * 55) + 1,
// };
// const cloudy = {
//   backgrounds: backgrounds_cloudy,
//   humidity: Math.floor(Math.random() * 71),
//   precipitation: Math.floor(Math.random() * 71),
//   Visibility: Math.floor(Math.random() * 55) + 1,
//   wind: Math.floor(Math.random() * 55) + 1,
// };
// const rainy = {
//   backgrounds: backgrounds_rain,
//   humidity: Math.floor(Math.random() * 21) + 20,
//   precipitation: Math.floor(Math.random() * 31),
//   Visibility: Math.floor(Math.random() * 61),
//   wind: Math.floor(Math.random() * 60) + 1,
// };
// const snowy = {
//   backgrounds: backgrounds_snow,
//   humidity: Math.floor(Math.random() * 101),
//   precipitation: Math.floor(Math.random() * 31) + 70,
//   Visibility: Math.floor(Math.random() * 40),
//   wind: Math.floor(Math.random() * 65) + 1,
// };
// const lightning = {
//   backgrounds: backgrounds_lightning,
//   humidity: Math.floor(Math.random() * 41) + 60,
//   precipitation: 0,
//   Visibility: Math.floor(Math.random() * 66),
//   wind: Math.floor(Math.random() * 41) + 60,
// };
// const thunderstorm = {
//   backgrounds: backgrounds_hailing,
//   humidity: Math.floor(Math.random() * 31) + 70,
//   precipitation: 0,
//   Visibility: 0,
//   wind: Math.floor(Math.random() * 61) + 40,
// };

// const hailing = {
//   backgrounds: backgrounds_hailing,
//   humidity: Math.floor(Math.random() * 31) + 70,
//   precipitation: 0,
//   Visibility: 0,
//   wind: Math.floor(Math.random() * 61) + 40,
// };

// const climates = [
//   {
//     state: "Hot",
//     temp_min: 29,
//     temp_max: 48,
//     possibleStates: {
//       common: [sunny],
//       uncommon: [partly_cloudy, cloudy, rainy],
//       rare: [],
//       legendary: [hailing],
//     },
//   },
//   {
//     state: "Warm",
//     temp_min: 16,
//     temp_max: 29,
//     possibleStates: {
//       common: [sunny],
//       uncommon: [cloudy, rainy],
//       rare: [],
//       legendary: [hailing],
//     },
//   },
//   {
//     state: "Cold",
//     temp_min: 0,
//     temp_max: 16,
//     possibleStates: {
//       common: [sunny],
//       uncommon: [cloudy, rainy],
//       rare: [],
//       legendary: [hailing],
//     },
//   },
//   {
//     state: "Freezing",
//     temp_min: -48,
//     temp_max: -0,
//     possibleStates: {
//       common: [sunny],
//       uncommon: [cloudy, rainy],
//       rare: [],
//       legendary: [hailing],
//     },
//   },
// ];

// const weather = () => {
//   const r = Math.floor(Math.random() * climates.length);
//   return climates[r];
// };

// const temp = (min: number, max: number) => {
//   let rest = min - max;
//   return Math.floor(Math.random() * rest) + max;
// };

// const rarity = () => {
//   const rng = Math.floor(Math.random() * 100) + 1;
//   if (rng <= 5) {
//     return "Legendary";
//   }
//   if (rng >= 5 && rng <= 15) {
//     return "Rare";
//   }
//   if (rng >= 15 && rng <= 35) {
//     return "Uncommon";
//   }
//   if (rng >= 35 && rng <= 100) {
//     return "Common";
//   }
// };

// const bigBang = () => {
//   const w = weather();
//   const t = temp(w.temp_min, w.temp_max);
//   let r = rarity();

//   const backgroundBuilder = () => {
//     let style = {
//       backgroundImage: "",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     };

//     if (r === "Common") {
//       const r1 =
//         w.possibleStates.common[
//           Math.floor(Math.random() * w.possibleStates.common.length)
//         ];
//       const r2 =
//         r1.backgrounds[Math.floor(Math.random() * r1.backgrounds.length)];
//         return r2
//     }
//     if (r === "Uncommon") {
//       const r1 =
//         w.possibleStates.uncommon[
//           Math.floor(Math.random() * w.possibleStates.uncommon.length)
//         ];
//       const r2 =
//         r1.backgrounds[Math.floor(Math.random() * r1.backgrounds.length)];
//         return r2
//     }
//     if (r === "Rare") {
//       const r1 =
//         w.possibleStates.uncommon[
//           Math.floor(Math.random() * w.possibleStates.rare.length)
//         ];
//       const r2 =
//         r1.backgrounds[Math.floor(Math.random() * r1.backgrounds.length)];
//       console.log("Rare has no backgrounds yet!");
//       return r2
//     }
//     if (r === "Legendary") {
//       const r1 =
//         w.possibleStates.legendary[
//           Math.floor(Math.random() * w.possibleStates.legendary.length)
//         ];
//       const r2 =
//         r1.backgrounds[Math.floor(Math.random() * r1.backgrounds.length)];
//         return r2
//     }
// };
// return { weather: w, temp: t, background: backgroundBuilder() };
// };

// export { bigBang };
