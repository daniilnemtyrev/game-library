import { useCallback, useState } from "react";

export const useToggle = () => {
  const [isShowing, setIsShowing] = useState(false);

  const open = useCallback(() => {
    setIsShowing(true);
  }, []);

  const close = useCallback(() => {
    setIsShowing(false);
  }, []);

  const toggle = useCallback(() => {
    setIsShowing((prev) => !prev);
  }, []);

  return {
    isShowing,
    open,
    close,
    toggle,
  };
};
