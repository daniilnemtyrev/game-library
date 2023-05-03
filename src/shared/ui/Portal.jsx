import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

export function Portal({ children, containerName = "__next" }) {
  const [container, setContainer] = useState(null);

  useLayoutEffect(() => {
    const element = document.getElementById(containerName);

    if (!element) {
      throw new Error("Element not found");
    }
    setContainer(element);
  }, [containerName]);

  if (container === null) return null;

  return createPortal(children, container);
}
