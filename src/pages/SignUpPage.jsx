import React from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Input from "../input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import LayoutAuthentication from "../Layout/LayoutAuthentication";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { authRegister, setUserInfo } from "../store/auth-thunk/auth-slice";
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "../store/auth-thunk/auth-handlers";

const schema = Yup.object({
  password: Yup.string()
    .required("Vui lòng điền mật khẩu")
    .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
  email: Yup.string().email("Email is invalid").required("Vui lòng điền email address"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
});
const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      delete values.confirmPassword;
      values.username = values.email;
      values.fullName = "Trung Anh";
      // dispatch(authRegister(values));
      const result = await dispatch(register(values));
      const user = unwrapResult(result);
      reset({ email: "", password: "", confirmPassword: "" });
      toast.success("Đăng ký tài khoản thành công");
      navigate("/");
    } catch (error) {
      toast.error("Có thể email đã tồn tại");
      reset({ email: "", password: "", confirmPassword: "" });
      console.log(error);
    }
  };

  return (
    <LayoutAuthentication>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className='w-50 m-auto shadow-lg p-4 rounded-3 mobile tablet'
      >
        <h1 className='text-center'>Đăng kí</h1>
        <p className='text-center '>
          Already have an account?{" "}
          <Link to='/sign-in'>
            <span className='cusor-pointer text-primary'>Sign in</span>
          </Link>
        </p>
        <Input
          control={control}
          placeholder='Enter your email'
          label='Email address'
          name='email'
          type='text'
          errors={errors}
        ></Input>
        <Input
          control={control}
          placeholder='Enter your password'
          label='Password'
          name='password'
          type='password'
          errors={errors}
        ></Input>
        <Input
          control={control}
          placeholder='Confirm your password'
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          errors={errors}
        ></Input>
        <Button type='submit' variant='primary' disabled={isSubmitting} className='w-100 p-3'>
          {isSubmitting ? <Spinner animation='border' variant='danger' /> : "Đăng kí"}
        </Button>
      </Form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
