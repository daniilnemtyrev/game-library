import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

export function Portal({ children, containerName = "body" }) {
  const [container, setContainer] = useState(null);

  useLayoutEffect(() => {
    const element = document.querySelector(containerName);

    if (!element) {
      throw new Error("Element not found");
    }
    setContainer(element);
  }, [containerName]);

  if (container === null) return null;

  return createPortal(children, container);
}
