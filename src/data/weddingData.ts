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
  year: 2027,
  month: 9,
  day: 5,
  dateLabel: "05 September",

  time: null,
  timezone: "Africa/Maputo",
  todayMessage: "O nosso para sempre começa hoje.",
  pastMessage: "E assim começou o nosso para sempre.",
};

export const weddingData = {
  couple: { groom: "Noivo", bride: "Noiva" },
  wedding,
  familyDetails: "Detalhes da familia",
  familySignOff: [
    {
      heading: "COM CARINHO E AFECTO",
      names: ["Sr. Pai do Noivo", "Sr. Pai da Noiva"],
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
      title: "Nikkah",
      date: "4 de Setembro",
      shortDate: "4 de SETEMBRO",
      fullDate: "FRIDAY · 4 SEPTEMBER 2026",
      chapter: "Com bênçãos",
      line: "Uma noite de devoção. Um começo abençoado com amor.",
      scheduleLabel: "PROGRAMA",
      schedule: [
        {
          label: "Khutba",
          time: "1:00 PM",
        },
        {
          label: "Dinner",
          time: "2:30 PM onwards",
        },
      ],
      venueLabel: "Mesquita",
      venueTitle: "Masjid Hassan & Hussin",
      venueAddress: ["Maputo Shopping Centre (Baixa) Maputo, Mocambique"],
      venue: "Family Residence, Rudrapur, Vikas Nagar",
      address: "Maputo Shopping Centre (Baixa) Maputo, Mocambique",
      mapUrl: "https://maps.app.goo.gl/L39gBpSWHC31i38n9",
    },
    {
      id: "Civil",
      locationId: "residenciaFamiliar" as const,
      title: "Casamento Civil",
      date: "5 de Setembro",
      shortDate: "5 de SETEMBRO",
      fullDate: "SABADO · 5 SEPTEMBRO 2026",
      chapter: "Debaixo das estrelas",
      // Non-breaking space keeps "A" with the second sentence when the line wraps.
      line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      scheduleLabel: "TIME",
      schedule: [
        {
          text: "7:00 PM onwards",
        },
        {
          text: "Lorem ipsum",
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
      title: "Nikkah",
      date: "4 de Setembro",
      shortDate: "4 de SETEMBRO",
      fullDate: "FRIDAY · 4 SEPTEMBER 2026",
      chapter: "Com bênçãos",
      line: "Uma noite de devoção. Um começo abençoado com amor.",
      scheduleLabel: "PROGRAMA",
      schedule: [
        {
          label: "Khutba",
          time: "1:00 PM",
        },
        {
          label: "Dinner",
          time: "2:30 PM onwards",
        },
      ],
      venueLabel: "Mesquita",
      venueTitle: "Masjid Hassan & Hussin",
      venueAddress: ["Maputo Shopping Centre (Baixa) Maputo, Mocambique"],
      venue: "Family Residence, Rudrapur, Vikas Nagar",
      address: "Maputo Shopping Centre (Baixa) Maputo, Mocambique",
      mapUrl: "https://maps.app.goo.gl/L39gBpSWHC31i38n9",
    },
    {
      id: "vivah",
      locationId: "residenciaFamiliar" as const,
      title: "Nikkah",
      date: "4 de Setembro",
      shortDate: "4 de SETEMBRO",
      fullDate: "FRIDAY · 4 SEPTEMBER 2026",
      chapter: "Com bênçãos",
      line: "Uma noite de devoção. Um começo abençoado com amor.",
      scheduleLabel: "PROGRAMA",
      schedule: [
        {
          label: "Khutba",
          time: "1:00 PM",
        },
        {
          label: "Dinner",
          time: "2:30 PM onwards",
        },
      ],
      venueLabel: "Mesquita",
      venueTitle: "Masjid Hassan & Hussin",
      venueAddress: ["Maputo Shopping Centre (Baixa) Maputo, Mocambique"],
      venue: "Family Residence, Rudrapur, Vikas Nagar",
      address: "Maputo Shopping Centre (Baixa) Maputo, Mocambique",
      mapUrl: "https://maps.app.goo.gl/L39gBpSWHC31i38n9",
    },
  ] as WeddingEvent[],
};
