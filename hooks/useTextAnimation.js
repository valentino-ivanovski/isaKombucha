// hooks/useTextAnimation.js
import { useEffect } from "react";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";

const useTextAnimation = (ref, delay = 0) => {
  useEffect(() => {
    if (!ref.current) return;

    document.fonts.ready.then(() => {
      ref.current.style.visibility = "visible";
      const { words } = splitText(ref.current);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05, { start: delay }),
        }
      );
    });
  }, [ref, delay]);
};

export default useTextAnimation;