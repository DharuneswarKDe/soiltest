// This service provides location data and soil information

interface LocationData {
  district: string;
  village: string;
  soilType: string;
}

// Hardcoded location data as requested
const locationData: LocationData[] = [
  { district: "Thanjavur", village: "BUDALUR", soilType: "Clay" },
  { district: "Thanjavur", village: "KUMBAKONAM", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "LALGUDI", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "MANACHANALLUR", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "MANAPPARAI", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "MARUNGAPURI", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "MUSIRI", soilType: "Clay" },
  { district: "Thanjavur", village: "PAPIREDDIPATTI", soilType: "Clayey" },
  { district: "Thanjavur", village: "PATTUKKOTTAI", soilType: "Clayey" },
  { district: "Thanjavur", village: "PERAVURANI", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "SRIRANGAM", soilType: "Clay" },
  { district: "Thanjavur", village: "Thanjavur", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "TIRUCHIRAPALLI EAST", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "TIRUCHIRAPALLI WEST", soilType: "Clay" },
  { district: "Thanjavur", village: "TIRUTTURAIPUNDI", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "TIRUVERUMBUR", soilType: "Clay" },
  { district: "Thanjavur", village: "TIRUVIDAIMARUDUR", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "TOTTIYAM", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "TURAIYUR", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "LALGUDI", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "MANACHANALLUR", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "MANAPPARAI", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "MARUNGAPURI", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "MUSIRI", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "SRIRANGAM", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "TOTTIYAM", soilType: "Clay" },
  { district: "Tiruchirapalli", village: "TURAIYUR", soilType: "Clay" },
  { district: "Thanjavur", village: "BUDALUR", soilType: "Clayey" },
  { district: "Thanjavur", village: "KARAMBAKKUDI", soilType: "Clayey" },
  { district: "Thanjavur", village: "KUMBAKONAM", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "LALGUDI", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "MANACHANALLUR", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "MANAPPARAI", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "MUSIRI", soilType: "Clayey" },
  { district: "Thanjavur", village: "ORATTANAD", soilType: "Clayey" },
  { district: "Thanjavur", village: "PAPIREDDIPATTI", soilType: "Clayey" },
  { district: "Thanjavur", village: "PATTUKKOTTAI", soilType: "Clayey" },
  { district: "Thanjavur", village: "PERAVURANI", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "SRIRANGAM", soilType: "Clayey" },
  { district: "Thanjavur", village: "Thanjavur", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "TIRUCHIRAPALLI EAST", soilType: "Clayey" },
  { district: "Thanjavur", village: "TIRUVAIYARU", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "TIRUVERUMBUR", soilType: "Clayey" },
  { district: "Thanjavur", village: "TIRUVIDAIMARUDUR", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "TOTTIYAM", soilType: "Clayey" },
  { district: "Tiruchirapalli", village: "TURAIYUR", soilType: "Clayey" },
  { district: "Thanjavur", village: "BUDALUR", soilType: "Loamy" },
  { district: "Thanjavur", village: "KARAMBAKKUDI", soilType: "Loamy" },
  { district: "Thanjavur", village: "KUMBAKONAM", soilType: "Loamy" },
  { district: "Tiruchirapalli", village: "LALGUDI", soilType: "Loamy" },
  { district: "Tiruchirapalli", village: "MANAPPARAI", soilType: "Loamy" },
  { district: "Tiruchirapalli", village: "MARUNGAPURI", soilType: "Loamy" },
  { district: "Tiruchirapalli", village: "MUSIRI", soilType: "Loamy" },
  { district: "Thanjavur", village: "ORATTANAD", soilType: "Loamy" },
  { district: "Thanjavur", village: "PAPIREDDIPATTI", soilType: "Loamy" },
  { district: "Thanjavur", village: "PATTUKKOTTAI", soilType: "Loamy" },
  { district: "Thanjavur", village: "PERAVURANI", soilType: "Loamy" },
  { district: "Tiruchirapalli", village: "SRIRANGAM", soilType: "Loamy" },
  { district: "Thanjavur", village: "Thanjavur", soilType: "Loamy" },
  { district: "Tiruchirapalli", village: "TIRUCHIRAPALLI WEST", soilType: "Loamy" },
  { district: "Thanjavur", village: "TIRUVAIYARU", soilType: "Loamy" },
  { district: "Tiruchirapalli", village: "TIRUVERUMBUR", soilType: "Loamy" },
  { district: "Thanjavur", village: "TIRUVIDAIMARUDUR", soilType: "Loamy" },
  { district: "Tiruchirapalli", village: "TOTTIYAM", soilType: "Loamy" },
  { district: "Tiruchirapalli", village: "TURAIYUR", soilType: "Loamy" },
  { district: "Thanjavur", village: "PATTUKKOTTAI", soilType: "Sandy" },
  { district: "Thanjavur", village: "PERAVURANI", soilType: "Sandy" },
  { district: "Thanjavur", village: "TIRUTTURAIPUNDI", soilType: "Sandy" }
];

// Map of soil types to their corresponding image paths
const soilTypeToImage: Record<string, { 
  image: string;
  irrigationTypes: string[];
  suitableCrops: string[];
}> = {
  "Clay": {
    image: "/lovable-uploads/3665a2f8-257d-4657-9da0-87c345c86f27.png",
    irrigationTypes: [
      "DRIP IRRIGATION",
      "SPRINKLER IRRIGATION",
      "BASIN IRRIGATION",
      "SUB SURFACE TEXTILE",
      "DEEP IRRIGATION WELLS",
      "SOAKER HOSES"
    ],
    suitableCrops: [
      "PADDY",
      "COTTON",
      "SUGARCANE",
      "PULSES",
      "MILLETS",
      "BEANS",
      "CAULIFLOWER",
      "CASUARINA"
    ]
  },
  "Clayey": {
    image: "/lovable-uploads/85fc20a8-cd95-4b77-815e-495b6c6f15e2.png",
    irrigationTypes: [
      "DRIP IRRIGATION",
      "SPRINKLER IRRIGATION",
      "BASIN IRRIGATION",
      "BORDER IRRIGATION",
      "FURROW IRRIGATION",
      "PULSE DRIP IRRIGATION",
      "SUB SURFACE TEXTILE"
    ],
    suitableCrops: [
      "PADDY",
      "MAIZE",
      "CABBAGE",
      "MILLETS",
      "CAULIFLOWER",
      "SWEET POTATO",
      "MARIGOLD",
      "GREEEN GRAM",
      "BLACK GRAM",
      "CASUARINIA"
    ]
  },
  "Sandy": {
    image: "/lovable-uploads/962cdc78-4c49-4094-bf98-2fac741c4959.png",
    irrigationTypes: [
      "DRIP IRRIGATION",
      "SPRINKLER IRRIGATION",
      "FURROW IRRRIGATION",
      "PULSE DRIP IRRIGATION",
      "SUB SURFACE TEXTILE",
      "HYDROGELS"
    ],
    suitableCrops: [
      "GROUNDNUT",
      "RAGI",
      "SUGARCANE",
      "WATERMELON",
      "PEPPER(CAPSICUM)",
      "ONION",
      "BLACKGRAM",
      "TURMERIC",
      "CORIANDER",
      "PEARL MILLET"
    ]
  },
  "Loamy": {
    image: "/lovable-uploads/14920ab4-7ac8-44e1-a42a-03619f516ab2.png",
    irrigationTypes: [
      "DRIP IRRIGATION",
      "SPRINKLER IRRIGATION",
      "BASIN IRRIGATION",
      "BORDER IRRIGATION",
      "FURROW IRRIGATION",
      "SUB SURFACE IRRIGATION"
    ],
    suitableCrops: [
      "PADDY",
      "MAIZE",
      "GROUDNUT",
      "SUGARCANE",
      "BANNANA",
      "MANGO",
      "CHILLIES",
      "GINGELLY",
      "RED GRAM",
      "PAPPAYA"
    ]
  }
};
const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

// Default soil info to use when soil type is not found
const defaultSoilInfo = {
  image: "/lovable-uploads/3665a2f8-257d-4657-9da0-87c345c86f27.png", // Clay image as default
  irrigationTypes: ["Information not available"],
  suitableCrops: ["Information not available"]
};

export const getDistricts = (): string[] => {
  const districts = [...new Set(locationData.map(item => item.district.toLowerCase()))];
  return districts.map(d => capitalize(d)).sort();
  
};

export const getVillagesByDistrict = (district: string): string[] => {
  const villages = locationData
    .filter(item => item.district.toLowerCase() === district.toLowerCase())
    .map(item => item.village.toLowerCase());
  return [...new Set(villages)].map(v => capitalize(v)).sort();
};

export const getSoilInfoByLocation = (
  district: string,
  village: string
): {
  soilType: string;
  image: string;
  irrigationTypes: string[];
  suitableCrops: string[];
} | null => {
  const locationInfo = locationData.find(
    item =>
      item.district.toLowerCase() === district.toLowerCase() &&
      item.village.toLowerCase() === village.toLowerCase()
  );
  if (!locationInfo) return null;

  const soilInfo = soilTypeToImage[locationInfo.soilType] || defaultSoilInfo;
  console.log("District:", district, "Village:", village, "Matched:", locationInfo);

  return {
    soilType: locationInfo.soilType,
    image: soilInfo.image,
    irrigationTypes: soilInfo.irrigationTypes,
    suitableCrops: soilInfo.suitableCrops
  };
};

// Optional: CSV file processing stub
export const processCsvFile = (_file: File): Promise<LocationData[]> => {
  return Promise.resolve(locationData);
};