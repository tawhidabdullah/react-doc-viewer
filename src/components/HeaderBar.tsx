import React, { FC, useContext } from "react";
import styled from "styled-components";
import { MainContext } from "../state/Context";
import { IStyledProps } from "../types";
import DocumentNav from "./DocumentNav";
import FileName from "./FileName";

const HeaderBar: FC<{}> = () => {
  const {
    state: { config },
  } = useContext(MainContext);

  if (config?.disableHeader) return null;

  return (
    <Container>
      <FileName />
      <DocumentNav />
    </Container>
  );
};

export default HeaderBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 10px;
  background-color: ${(props: IStyledProps) => props.theme.primary};
  font-size: 16px;
  min-height: 50px;

  @media (max-width: 768px) {
    min-height: 30px;
    padding: 5px;
    font-size: 10px;
  }
`;
