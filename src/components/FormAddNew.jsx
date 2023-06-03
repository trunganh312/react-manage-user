import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Input from "../input/Input";
import { userApi } from "../service/userApi";
const schema = Yup.object({
  name: Yup.string()
    .required("Vui lòng điền tên")
    .test("should has at least two words", "Điền tối thiểu 2 chữ", (value) => {
      return value.split(" ").length >= 2;
    }),
  job: Yup.string().required("Vui lòng điền công việc"),
});

const FormAddNew = ({ onHide, show, handleUpdateUser }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      job: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    try {
      const result = await userApi.create({ name: values.name, job: values.job });
      result.avatar = "https://picsum.photos/50/50";
      result.first_name = result.name.split(" ")[0];
      result.last_name = result.name.split(" ")[result.name.split(" ").length - 1];
      result.email = `${result.job}@gmail.com`;
      handleUpdateUser(result);
      reset({
        name: "",
        job: "",
      });
      onHide();
      toast.success("Add new user successfully!!", {
        pauseOnHover: false,
      });
    } catch (error) {
      toast.error(error.message, {
        pauseOnHover: false,
      });
    }
  };

  return (
    <Modal
      size='lg'
      show={show}
      onHide={onHide}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <h1 className='p-3 text-center'>ADD NEW USER</h1>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            control={control}
            placeholder='Enter your name'
            label='Name'
            name='name'
            type='text'
            errors={errors}
          ></Input>
          <Input
            control={control}
            placeholder='Enter your job'
            label='Job'
            name='job'
            type='text'
            errors={errors}
          ></Input>
          <Button type='submit' variant='primary' disabled={isSubmitting} className='w-25 p-3'>
            {isSubmitting ? <Spinner animation='border' variant='danger' /> : "Add"}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default FormAddNew;
