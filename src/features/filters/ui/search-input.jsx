import { useDispatch } from "react-redux";
import { Search } from "shared/assets/icons";
import { Input } from "shared/ui";
import styled from "styled-components";
import { theme } from "styles/theme";
import { useEffect, useState } from "react";
import { useDebounce } from "shared/hooks";
import { filterActions } from "../model/slice";

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { setSearchValue } = filterActions;

  const onChangeHandler = (value) => {
    setSearch(value);
  };

  const debouncedValue = useDebounce(search);

  useEffect(() => {
    dispatch(setSearchValue(debouncedValue));
  }, [debouncedValue, dispatch, setSearchValue]);

  return (
    <Wrapper>
      <AbsoluteSearch color={theme.colors.ligthGray} />
      <Input
        // @ts-ignore
        value={search}
        onChange={onChangeHandler}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const AbsoluteSearch = styled(Search)`
  position: absolute;
  top: calc(50% - 9px);
  left: 10px;
`;
