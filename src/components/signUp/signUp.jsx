import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import "./signUp.css";

const Singup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitSignUp = (submit) => {
    console.log(submit);
  };

  const gender = [
    { value: 1, label: "Male" },
    { value: 2, label: "Female" },
  ];
  //   console.log("error", errors);

  return (
    <div className="form-wrap ">
      <Form onSubmit={handleSubmit(submitSignUp)}>
        <Form.Group className="form " controlId="name">
          <Form.Label className="label">first Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your firstName"
            {...register("firstName", {
              required: true,
              minLength: 5,
              maxLength: 10,
            })}
          />
          {errors.firstName?.type === "required" && (
            <p className="placeholder">this Field is required</p>
          )}
          {errors.firstName?.type === "minLength" && (
            <p className="placeholder">Min Length is 5</p>
          )}
          {errors.firstName?.type === "maxLength" && (
            <p className="placeholder">Max Length 10</p>
          )}
        </Form.Group>

        <Form.Group className="form" controlId="lname">
          <Form.Label className="label">Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your LastName"
            {...register("lastName", {
              required: true,
              minLength: 5,
              maxLength: 10,
            })}
          />
          {errors.lastName?.type === "required" && (
            <p className="placeholder">First name is required</p>
          )}
          {errors.lastName?.type === "minLength" && (
            <p className="placeholder">Min Length is 5</p>
          )}
          {errors.lastName?.type === "maxLength" && (
            <p className="placeholder">Max Length is 10</p>
          )}
        </Form.Group>

        <Form.Group className="form mb-3" controlId="formBasicEmail">
          <Form.Label className="label">E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email?.type === "required" && (
            <p className="placeholder">this field is required</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              maxLength: 20,
              minLength: 10,
            })}
          />
          {errors.password?.type === "required" && (
            <p className="placeholder">Password is Required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="placeholder">MinLength Of Password is 10 </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="placeholder">MaxLength Of Password is 20 </p>
          )}
        </Form.Group>

        <Form.Group className="select-gender">
          <Form.Label className="label">Select gender</Form.Label>
          <Select options={gender} />
        </Form.Group>
            
            
        <Button className="signup" variant="primary" type="submit">
          Sing Up
        </Button>
      </Form>
    </div>
  );
};

export default Singup;
