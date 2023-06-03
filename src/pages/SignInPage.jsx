import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Input from "../input/Input";
import LayoutAuthentication from "../Layout/LayoutAuthentication";
import { login } from "../store/auth-thunk/auth-handlers";

const schema = Yup.object({
  password: Yup.string()
    .required("Vui lòng điền mật khẩu")
    .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
  identifier: Yup.string().email("Email is invalid").required("Vui lòng điền email address"),
});
const SignInPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) navigate("/");
  }, [success]);

  const onSubmit = async (values) => {
    try {
      // const res = await authApi.login(values);
      // localStorage.setItem("access_token", res.data.jwt);
      // localStorage.setItem("user", JSON.stringify(res.data.user));
      // console.log(res);
      // setUserInfo(res.data.user);
      // dispatch(setUserInfo(values));
      const result = await dispatch(login(values));
      const user = unwrapResult(result);
      toast.success("Đăng nhập thành công!!");
      navigate("/");
    } catch (error) {
      toast.error("Sai mật khẩu hoặc tài khoản");
      reset({ identifier: "", password: "" });
    }
  };

  return (
    <LayoutAuthentication>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className='w-50 m-auto shadow-lg p-4 rounded-3 mobile tablet'
      >
        <h1 className='text-center'>Đăng nhập</h1>
        <p className='text-center '>
          Dont have an account?{" "}
          <Link to='/sign-up'>
            <span className='cusor-pointer text-primary'>Sign up</span>
          </Link>
        </p>
        <Input
          control={control}
          placeholder='Enter your email'
          label='Email address'
          name='identifier'
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
        <Button type='submit' variant='primary' disabled={isSubmitting} className='w-100 p-3'>
          {isSubmitting ? <Spinner animation='border' variant='danger' /> : "Đăng nhập"}
        </Button>
      </Form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
