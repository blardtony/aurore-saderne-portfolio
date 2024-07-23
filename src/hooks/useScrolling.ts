import { useEffect, useState } from "react";

const useScrolling = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("isScrolling: ", isScrolling);
  return isScrolling;
};

export default useScrolling;
