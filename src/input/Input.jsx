import React from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

const Input = ({ label, name, control, placeholder, type, errors }) => {
  const hasError = errors[name];
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>{label}</Form.Label>
          <Form.Control type={type} {...field} placeholder={placeholder} isInvalid={!!hasError} />
          <Form.Control.Feedback type='invalid'>{hasError?.message}</Form.Control.Feedback>
        </Form.Group>
      )}
    />
  );
};

export default Input;
