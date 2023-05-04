/* eslint-disable consistent-return */
import { useEffect } from "react";

export const useIntersectionObserver = (
  elementRef,
  { threshold = 0, root = null, rootMargin = "0%" },
  onIntersection,
) => {
  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver((entries) => {
      if (entries.every((entry) => entry.isIntersecting)) {
        onIntersection();
      }
    }, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [root, rootMargin, elementRef, threshold, onIntersection]);
};
