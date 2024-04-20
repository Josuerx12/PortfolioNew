import { FaArrowUp } from "react-icons/fa";
import { handleScrollTo } from "../../hooks/useScroll";
import { useEffect, useState } from "react";

const ButtonTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showButton) {
    return;
  }

  return (
    <button
      onClick={() => handleScrollTo("root")}
      className="bg-neutral-800 drop-shadow-lg gap-2 hover:shadow-sm duration-200 hover:shadow-neutral-700 rounded text-white capitalize fixed bottom-10 right-10 flex items-center p-2"
    >
      <FaArrowUp />
    </button>
  );
};

export default ButtonTop;
