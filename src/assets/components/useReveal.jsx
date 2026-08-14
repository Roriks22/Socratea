import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;

            if (element.classList.contains("reveal")) {
              element.classList.add("revealed");
            }

            if (element.classList.contains("reveal-left")) {
              element.classList.add("reveal-left-revealed");
            }

            if (element.classList.contains("reveal-right")) {
              element.classList.add("reveal-right-revealed");
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
