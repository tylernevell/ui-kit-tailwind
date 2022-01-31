import { useEffect, useRef, useState } from "react";

const useIsVisible = (options?: IntersectionObserver) => {
  const ref: any = useRef(null);
  const [inView, setView] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setView(true);
      return;
    }
    const observer = new IntersectionObserver(obsCb, options);
    // @ts-ignore
    observer.observe(ref.current);

    function obsCb(entries: any[]) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        // @ts-ignore
        observer.unobserve(ref.current);
        setView(true);
      });
    }
  }, [options]);

  return [ref, inView];
};

export { useIsVisible };
