export type ScheduleItem = {
  label?: string;
  time?: string;
  text?: string; // For text-based items e.g. "Followed by Dinner" or "Vivah Sanskar — Shubh Lagnanusar"
};

export type LocationId = "residenciaFamiliar" | "sharmaFarms";

export type VenueLocation = {
  id: LocationId;
  name: string;
  address: string[];
  googleMapsUrl: string;
  embedUrl?: string;
};

export type WeddingEvent = {
  id: string;
  locationId: LocationId;
  title: string;
  date: string;
  shortDate: string;
  fullDate: string;
  chapter: string;
  line: string;
  scheduleLabel?: string;
  schedule: ScheduleItem[];
  venueLabel?: string;
  venueTitle?: string;
  venueAddress: string[];
  baratRoute?: string[];
  isMainVenueEmphasized?: boolean;
  time?: string;
  venue?: string;
  address?: string;
  mapUrl?: string;
};
export type WeddingDateConfig = {
  year: number | null;
  month: number;
  day: number;
  dateLabel: string;
  time: string | null;
  timezone: string;
  todayMessage: string;
  pastMessage: string;
};

const wedding: WeddingDateConfig = {
  // Set the confirmed year here. Never infer the next occurrence automatically.
  year: 2027,
  month: 9,
  day: 5,
  dateLabel: "05 September",
  // Local HH:mm ceremony time. Null counts to the start of the wedding DAY,
  // once the year is confirmed; midnight is never presented as a ceremony time.
  time: null,
  timezone: "Africa/Mozambique",
  todayMessage: "O nosso para sempre começa hoje.",
  pastMessage: "E assim começou o nosso para sempre.",
};

export const weddingData = {
  couple: { groom: "Edilson", bride: "Annae" },
  wedding,
  familyDetails: "",
  familySignOff: [
    {
      heading: "COM CARINHO E AFECTO",
      names: ["Sr. Jose Carlos Mboa", "Sr. Serage Anfai"],
    },
    {
      heading: "AGUARDANDO ANSIOSAMENTE A SUA GRACIOSA PRESENÇA",
      names: [
        "Mrs. Rakhi & Mr. Achal Sharma",
        "Mrs. Shikha & Mr. Vishal Sharma",
        "Ansh & Manika",
      ],
    },
  ],
  closing: { message: "Junte-se a nós enquanto começamos o nosso para sempre." },
  locations: {
    residenciaFamiliar: {
      id: "residenciaFamiliar" as const,
      name: "Residência Familiar",
      address: [
        "Village & Post Rudrapur",
        "Vikas Nagar, Dehradun",
      ],
      googleMapsUrl:
        "https://www.google.com/maps?q=30.44698,77.853333",
      embedUrl:
        "https://maps.google.com/maps?q=30.4469800,77.8533330&hl=en&z=16&output=embed",
    },
    sharmaFarms: {
      id: "sharmaFarms" as const,
      name: "Sharma Farms",
      address: [
        "Bahuwala, Dehradun",
      ],
      googleMapsUrl: "https://www.google.com/maps/place/Sharma+Farm/@30.3947001,77.924638,17z/data=!3m1!4b1!4m6!3m5!1s0x390f2b00322517c9:0x2266edb37b877547!8m2!3d30.3947001!4d77.924638!16s%2Fg%2F11x2_dz289",
      embedUrl:
        "https://maps.google.com/maps?cid=2478930000041440583&hl=en&z=16&output=embed",
    },
  },
  location: {
    venue: "Sharma Farms",
    address: "Bahuwala, Dehradun",
    googleMapsUrl: "https://www.google.com/maps/place/Sharma+Farm/@30.3947001,77.924638,17z/data=!3m1!4b1!4m6!3m5!1s0x390f2b00322517c9:0x2266edb37b877547!8m2!3d30.3947001!4d77.924638!16s%2Fg%2F11x2_dz289",
    embedUrl:
      "https://maps.google.com/maps?cid=2478930000041440583&hl=en&z=16&output=embed",
  },
  musicUrl: "/audio/aaj-sajeya.mp3",
  events: [
    {
      id: "mata",
      locationId: "residenciaFamiliar" as const,
      title: "Mata Ki Chowki",
      date: "30 October",
      shortDate: "30 OCTOBER",
      fullDate: "FRIDAY · 30 OCTOBER 2026",
      chapter: "With blessings",
      line: "An evening of devotion. A beginning blessed with love.",
      scheduleLabel: "SCHEDULE",
      schedule: [
        {
          label: "Jyoti Prajavalan",
          time: "3:00 PM",
        },
        {
          label: "Dinner",
          time: "7:00 PM onwards",
        },
      ],
      venueLabel: "VENUE",
      venueTitle: "Family Residence",
      venueAddress: ["Village & Post Rudrapur", "Vikas Nagar, Dehradun"],
      venue: "Family Residence, Rudrapur, Vikas Nagar",
      address: "Village & Post Rudrapur, Vikas Nagar, Dehradun",
      mapUrl: "https://www.google.com/maps?q=30.44698,77.853333",
    },
    {
      id: "mehendi",
      locationId: "residenciaFamiliar" as const,
      title: "Mehandi & Cocktail",
      date: "31 October",
      shortDate: "31 OCTOBER",
      fullDate: "SATURDAY · 31 OCTOBER 2026",
      chapter: "Under the stars",
      // Non-breaking space keeps "A" with the second sentence when the line wraps.
      line: "Henna on our hands. A little magic in the air.",
      scheduleLabel: "TIME",
      schedule: [
        {
          text: "7:00 PM onwards",
        },
        {
          text: "Followed by Dinner",
        },
      ],
      venueLabel: "VENUE",
      venueTitle: "Family Residence",
      venueAddress: ["Village & Post Rudrapur", "Vikas Nagar, Dehradun"],
      venue: "Family Residence, Rudrapur, Vikas Nagar",
      address: "Village & Post Rudrapur, Vikas Nagar, Dehradun",
      mapUrl: "https://www.google.com/maps?q=30.44698,77.853333",
    },
    {
      id: "haldi",
      locationId: "residenciaFamiliar" as const,
      title: "Haldi Hath & Mangal Snan",
      date: "01 November",
      shortDate: "01 NOVEMBER",
      fullDate: "SUNDAY · 01 NOVEMBER 2026",
      chapter: "A little sunshine",
      line: "Bathed in turmeric, laughter, and the love of our own.",
      scheduleLabel: "SCHEDULE",
      schedule: [
        {
          label: "Haldi Hath",
          time: "9:00 AM",
        },
        {
          label: "Mangal Snan",
          time: "10:00 AM",
        },
        {
          label: "Preetibhoj / Lunch",
          time: "1:00 PM",
        },
      ],
      venueLabel: "VENUE",
      venueTitle: "Family Residence",
      venueAddress: ["Village & Post Rudrapur", "Dehradun"],
      venue: "Family Residence, Rudrapur",
      address: "Village & Post Rudrapur, Dehradun",
      mapUrl: "https://www.google.com/maps?q=30.44698,77.853333",
    },
    {
      id: "vivah",
      locationId: "sharmaFarms" as const,
      title: "Vivah Sanskar",
      date: wedding.dateLabel,
      shortDate: "02 NOVEMBER",
      fullDate: "MONDAY · 02 NOVEMBER 2026",
      chapter: "The beginning of forever",
      line: "Two hearts. Seven promises. A lifetime together.",
      scheduleLabel: "SCHEDULE",
      schedule: [
        {
          label: "Mandha Poojan",
          time: "10:00 AM",
        },
        {
          label: "Sehrabandi",
          time: "4:00 PM",
        },
        {
          label: "Barat Departure",
          time: "6:00 PM",
        },
        {
          label: "Dinner",
          time: "8:00 PM",
        },
        {
          label: "Vivah Sanskar",
          time: "Shubh Lagnanusar",
        },
      ],
      baratRoute: [
        "Family Residence, Rudrapur",
        "Opp. S.G.R.R. Inter College, Bhauwala",
        "Sharma Farms",
      ],
      venueLabel: "MAIN VENUE",
      venueTitle: "SHARMA FARMS",
      venueAddress: ["Bahuwala, Dehradun"],
      isMainVenueEmphasized: true,
      venue: "SHARMA FARMS, Bahuwala",
      address: "Bahuwala, Dehradun",
      mapUrl: "https://www.google.com/maps/place/Sharma+Farm/@30.3947001,77.924638,17z/data=!3m1!4b1!4m6!3m5!1s0x390f2b00322517c9:0x2266edb37b877547!8m2!3d30.3947001!4d77.924638!16s%2Fg%2F11x2_dz289",
    },
  ] as WeddingEvent[],
};
