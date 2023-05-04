import { memo, useEffect, useRef } from "react";
import styled from "styled-components";

export const Input = memo(
  // @ts-ignore
  ({
    value, onChange, id, label, type = "text", autofocus, ...rest
  }) => {
    const inputRef = useRef(null);

    const onChangeHandler = (e) => {
      onChange(e.target.value);
    };

    useEffect(() => {
      if (autofocus) {
        inputRef.current?.focus();
      }
    }, [autofocus]);

    return (
      <Wrapper>
        {label && <label htmlFor={id}>{label}</label>}
        <StyledInput
          ref={inputRef}
          value={value}
          onChange={onChangeHandler}
          type={type}
          {...rest}
        />
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  display: flex;
  gap: 10px;

  & label {
    width: fit-content;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.white};
  height: 30px;
  padding: 5px;
  padding-left: 32px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
