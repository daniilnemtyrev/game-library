import { useDispatch, useSelector } from "react-redux";
import { Filters } from "shared/ui";
import { useToggle } from "shared/hooks";
import { orderFilterSelector } from "../model/selectors";
import { filterActions } from "../model/slice";

const FILTERS = [
  {
    id: "rating",
    name: "rating",
  },
  {
    id: "released",
    name: "released",
  },
];

export const OrderFilters = () => {
  const { toggle, isShowing } = useToggle();

  const { order } = useSelector(orderFilterSelector);
  const { setOrderFilterValue, toggleOrderDirection, resetOrderFilters } =
    filterActions;
  const dispatch = useDispatch();

  const onSetFilter = (filter) => {
    dispatch(setOrderFilterValue(filter));
  };

  const onToggleDirection = (e) => {
    e.stopPropagation();
    dispatch(toggleOrderDirection());
  };

  const onResetHandler = () => {
    dispatch(resetOrderFilters());
  };

  return (
    <Filters
      placeholder={`Order by: ${order.name || ""}`}
      currentValue={order.name}
      filters={FILTERS}
      onSetFilter={onSetFilter}
      onToggleDirection={onToggleDirection}
      onResetHandler={onResetHandler}
      toggle={toggle}
      isOpen={isShowing}
    />
  );
};
