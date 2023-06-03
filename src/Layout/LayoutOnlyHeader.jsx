import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const LayoutOnlyHeader = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Outlet></Outlet>
      </Container>
    </>
  );
};

export default LayoutOnlyHeader;
