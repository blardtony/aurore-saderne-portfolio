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
        threshold: 0,
        rootMargin: "-25% 0% -75% 0%",
      },
    );
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.current?.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);
  return activeSection;
};

export default useActiveAnchorLink;
