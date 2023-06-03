import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LayoutAuthentication = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Container className='d-flex h-100vh flex-column mobile tablet'>
      {children}
      <Button onClick={() => navigate("/")} className='w-25 m-auto' variant='success'>
        Back home
      </Button>
    </Container>
  );
};

export default LayoutAuthentication;
