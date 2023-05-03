import { useDispatch, useSelector } from "react-redux";
import { Filters } from "shared/ui";
import { useToggle } from "shared/hooks";
import { platformFilterSelector } from "../model/selectors";
import { filterActions } from "../model/slice";

const FILTERS = [
  {
    id: 1,
    name: "PC",
  },
  {
    id: 2,
    name: "Playstation",
  },
  {
    id: 3,
    name: "Xbox",
  },
  {
    id: 4,
    name: "IOS",
  },
  {
    id: 5,
    name: "MacOS",
  },
  {
    id: 6,
    name: "Linux",
  },
  {
    id: 7,
    name: "Nintendo",
  },
  {
    id: 8,
    name: "Android",
  },
];

export const PlatformsFilters = () => {
  const { toggle, isShowing } = useToggle();

  const { name, id } = useSelector(platformFilterSelector);
  const { setPlatformFilterValue, resetPlatformFilters } = filterActions;
  const dispatch = useDispatch();

  const onSetFilter = (id) => {
    dispatch(setPlatformFilterValue(id));
  };

  const onResetHandler = () => {
    dispatch(resetPlatformFilters());
  };

  return (
    <Filters
      placeholder={`Platform: ${name || ""}`}
      currentValue={id}
      filters={FILTERS}
      onSetFilter={onSetFilter}
      onResetHandler={onResetHandler}
      toggle={toggle}
      isOpen={isShowing}
    />
  );
};
