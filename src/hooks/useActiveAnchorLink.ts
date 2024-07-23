import { useEffect, useRef, useState } from "react";

const useActiveAnchorLink = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting,
        )?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      {
        threshold: 1,
        rootMargin: "0px 0px -25% 0px",
      },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.current?.observe(section);
    });
    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);
  return activeSection;
};

export default useActiveAnchorLink;
