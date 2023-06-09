type items = {
  ferro_rods: {
    id: number;
    name: { en: string; es: string };
    brand?: string;
    price: number;
    description: { en: string; es: string };
    specs?: { diameter?: string; handle?: string };
    img?: string;
  }[];
};

const items: items = {
  ferro_rods: [
    {
      id: 0,
      name: { en: "Iluminación en la Oscuridad", es: "Glow in Dark" },
      description: {
        en: "Start a fire easily and quickly with just a spark. This ferro rod produces a 5,400°F (approx) spark, which gives you a great advantage in any weather conditions.",
        es: "",
      },
      specs: {
        diameter: "5/16",
        handle: "Glow in the Dark (color tint may vary)",
      },
      price: 7,
    },
    {
      id: 1,
      name: { en: "FireRod replacement rod", es: "Glow in Dark" },
      description: {
        en: `Replacement: 

          To replace an Exotac ferro rod, simply unscrew the rod from the Exotac handle and screw in the new rod. Ensure the rod is a snug fit into the rod holder. An optional drop of blue or purple Loctite will help retain the rod if it becomes loose.`,
        es: "",
      },
      specs: {
        diameter: "5/16",
        handle: "Glow in the Dark (color tint may vary)",
      },
      price: 7,
    },
  ],
};

export default items;
