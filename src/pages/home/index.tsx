import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <main
      id="home"
      className="w-full h-full  min-h-screen pt-24 pb-4 bg-gradient-to-b from-neutral-950 via-neutral-950  to-neutral-900 text-white flex justify-center items-center"
    >
      <div className="max-w-screen-lg mx-auto flex gap-6 flex-wrap-reverse justify-center">
        <div className="flex flex-col gap-6 mx-2">
          <div>
            <h3 className="text-3xl text-center max-w-[500px] font-bold mx-auto capitalize">
              Hi 👋, my name is Josué Carvalho.
            </h3>
            <h4 className="text-center text-xl text-neutral-200 capitalize">
              i'm Fullstack Software Engineer!
            </h4>
          </div>
          <div className="text-neutral-300">
            <p>
              I work with React.js, Node.js, NoSql databases, Sql databases!
            </p>
            <p>Actually working at FST Tecnología from Campos-RJ</p>
          </div>
          <div className="text-neutral-300">
            <p className="flex items-center text-lg gap-2 ">
              Look more about my jobs <FaArrowRight className="animate-pulse" />{" "}
              <button className="px-2 text-white font-semibold py-1 rounded-md bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 text-base  duration-500">
                Portfolio
              </button>
            </p>
          </div>
        </div>

        <img
          src="/profile03.png"
          className="rounded-2xl md:w-64 w-2/3 mx-auto bg-size-200 bg-pos-0 hover:bg-pos-100 bg-gradient-to-r from-blue-600  via-sky-400 to-blue-600 pt-4  hover:scale-110 shadow-lg duration-500 cursor-pointer"
          alt=""
        />
      </div>
    </main>
  );
};

export default Home;
