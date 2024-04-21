export type Experience = {
  id: number;
  name: string;
  icon: string;
  color: string;
};

const techs = [
  {
    id: 1,
    name: "HTML5",
    icon: "/html.svg",
    color: "shadow-[#E65100]",
  },
  {
    id: 2,
    name: "CSS3",
    icon: "/css.svg",
    color: "shadow-[#039BE5]",
  },
  {
    id: 4,
    name: "sass",
    icon: "/sass.svg",
    color: "shadow-[#F06292]",
  },
  {
    id: 3,
    name: "bootstrap",
    icon: "/bootstrap.svg",
    color: "shadow-[#7C4DFF]",
  },

  {
    id: 5,
    name: "tailwindCSS",
    icon: "/tailwindcss.svg",
    color: "shadow-[#039BE5]",
  },
  {
    id: 6,
    name: "javascript",
    icon: "/javascript.svg",
    color: "shadow-[#FFD600]",
  },
  {
    id: 7,
    name: "typescript",
    icon: "/typescript.svg",
    color: "shadow-[#1976D2]",
  },
  {
    id: 8,
    name: "reactJS",
    icon: "/react.svg",
    color: "shadow-[#39C1D7]",
  },
  {
    id: 9,
    name: "node JS",
    icon: "/nodejs.svg",
    color: "shadow-[#388E3C]",
  },
  {
    id: 10,
    name: "nestJS",
    icon: "/nestjs.svg",
    color: "shadow-[#F50057]",
  },
  {
    id: 11,
    name: "prisma ORM",
    icon: "/prisma.svg",
    color: "shadow-[#33C4A2]",
  },
  {
    id: 12,
    name: "Mongo DB",
    icon: "/mongodb.svg",
    color: "shadow-[#499D4A]",
  },
  {
    id: 13,
    name: "Postgre SQL",
    icon: "/postgresql.svg",
    color: "shadow-[#0277BD]",
  },
];

export { techs };
