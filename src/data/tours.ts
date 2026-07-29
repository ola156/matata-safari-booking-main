export type TourCategory = "excursion" | "multiday" | "flyin" | "addon";

export interface TourItem {
  id: string;
  title: string;
  category: TourCategory;
  duration: string;
  durationDays?: number;
  price: string;
  priceValue?: number;
  priceUSD?: number;
  priceUnit?: string;
  departureLocation?: string;
  highlights?: string[];
  featuredAccommodation?: string[];
  image?: string;
  description?: string;
};

export const CONTACT_INFO = {
  primaryPhone: "+254715268098",
  secondaryPhone: "+254100838570",
  email: "safarisaleskenia@gmail.com",
} as const;

export const EXCURSIONS: TourItem[] = [
  {
    id: "safari-blue-watamu",
    title: "1 Day Safari Blue Watamu (Dolphin Boat)",
    category: "excursion",
    duration: "1 Day",
    price: "$100 USD per person",
    priceValue: 100,
    image: "dolphin-2.jpg",
    description: "Expert Guide",
  },
  {
    id: "safari-blue-wasini",
    title: "1 Day Safari Blue Wasini (Dolphin Dhow)",
    category: "excursion",
    duration: "1 Day",
    price: "$100 USD per person",
    priceValue: 100,
    image: "dolphin-2.jpg",
    description: "Expert Guide",
  },
  {
    id: "tsavo-east-express",
    title: "1-Day Mombasa to Tsavo East Safari",
    category: "excursion",
    duration: "1 Day",
    price: "$200 USD per person",
    priceValue: 200,
    priceUSD: 200,
    priceUnit: "per person",
    image: "g-jeep (2).jpg",
    description: "Expert Guide",
  },
];

export const MULTI_DAY_SAFARIS: TourItem[] = [
  {
    id: "tsavo-2-days",
    title: "2 Days / 1 Night Tsavo East Safari Boma Simba or Lion Hill Safari ",
    category: "multiday",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    price: "$300 USD per person",
    priceValue: 300,
    priceUSD: 300,
    priceUnit: "per person",
    departureLocation: "Coastal Destinations (Mombasa, Diani, Watamu, Malindi)",
    highlights: [
      "Overnight stay at Voi Safari Lodge, Boma Simba, or Lion Hill Safari Lodge",
      "Pickup & transfers from coastal destinations",
      "Game drives in Tsavo East National Park",
      "Full board accommodation & park fees included",
    ],
    description: "Expert Guide",
  },
  {
    id: "best-of-tsavo",
    title: " 3 Days / 2 Nights Tsavo East & West Overnight Voi Lodge & Ngulia",
    category: "multiday",
    duration: "3 Days",
    price: "$450 USD per person",
    priceValue: 450,
    image: "g-tour-guide.jpg",
    description: "Expert Guide",
  },
  {
    id: "tsavo-amboseli",
    title: "3 Days Tsavo East & Amboseli",
    category: "multiday",
    duration: "3 Days",
    price: "$720 USD per person",
    priceValue: 720,
    image: "g-jeep.jpg",
    description: "Expert Guide",
  },
  {
    id: "classic-safari",
    title: "3-Day Mombasa to Tsavo East Safari",
    category: "multiday",
    duration: "3 Days",
    price: "$1,250 USD",
    priceValue: 1250,
    priceUSD: 1250,
    priceUnit: "per package",
    image: "g-safari.jpg",
    featuredAccommodation: [
      "Voi Safari Lodge",
      "Boma Simba",
      "Lion Hill Safari Lodge",
    ],
    description: "Expert Guide",
  },
  {
    id: "explore-safari",
    title: "3 days 2 nights Masai Mara, (4x4 jeep, all-inclusive), Overnight Rhino camp / Lenchada.",
    category: "multiday",
    duration: "5 Days",
    price: "$950 USD",
    priceValue: 950,
    priceUSD: 950,
    priceUnit: "per package",
    image: "g-jeep (3).jpeg",
    featuredAccommodation: [
      "Rhino camp",
      "4x4 jeep inclusive",
    ],
    description: "Expert Guide",
  },

   {
    id: "explorer-safari",
    title: "5 Days Tsavo East,West,Taita hills,Amboseli (mt kilimanjaro).",
    category: "multiday",
    duration: "5 Days",
    price: "$1,800 USD",
    priceValue: 1800,
    priceUSD: 1800,
    priceUnit: "per package",
    image: "g-jeep (3).jpeg",
    featuredAccommodation: [
      "Voi Safari Lodge",
      "Boma Simba",
      "Lion Hill Safari Lodge",
    ],
    description: "Expert Guide",
  },
  {
    id: "ultimate-safari",
    title: " 7 days Masai Mara,Lake Nakuru, Lake Naivasha,Amboseli( view mt kilimanjaro) Tsavo east.",
    category: "multiday",
    duration: "7 Days",
    price: "$3,850 USD",
    priceValue: 3850,
    priceUSD: 3850,
    priceUnit: "per package",
    image: "g-jeep (4).jpg",
    featuredAccommodation: [
      "Voi Safari Lodge",
      "Boma Simba",
      "Lion Hill Safari Lodge",
    ],
    description: "Expert Guide",
  },
];

export const FLY_IN_SAFARIS: TourItem[] = [
  {
    id: "flight-safari-mombasa-masai-mara",
    title: "Flight Safari: Mombasa to Masai Mara",
    category: "flyin",
    duration: "Fly-in",
    price: "Starting from $1,550 USD per person",
    priceValue: 1550,
    description: "Expert Guide",
  },
];

export const OPTIONAL_ADDONS: TourItem[] = [
  {
    id: "hot-air-balloon",
    title: "Masai Mara Hot Air Balloon Safari",
    category: "addon",
    duration: "Optional Add-on",
    price: "Starting from $480 USD per person",
    priceValue: 480,
    description: "Expert Guide",
  },
];

export const TOURS_DATA: TourItem[] = [
  ...EXCURSIONS,
  ...MULTI_DAY_SAFARIS,
  ...FLY_IN_SAFARIS,
  ...OPTIONAL_ADDONS,
];

export const ALL_TOURS = TOURS_DATA;
