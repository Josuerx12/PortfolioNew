import { Experience } from "../../../data/experience";

const ExperienceCard = ({ exp }: { exp: Experience }) => {
  return (
    <div
      title={exp.name}
      className={`p-4 w-full cursor-pointer md:hover:scale-110 duration-300 sm:w-60 flex flex-col items-center justify-center gap-4 shadow-md ${exp.color}`}
    >
      <img className="w-20 h-20" src={exp.icon} alt={exp.name} />

      <span className="capitalize text-xl">{exp.name}</span>
    </div>
  );
};

export default ExperienceCard;
