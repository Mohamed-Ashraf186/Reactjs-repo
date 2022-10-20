import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitLogin = (submit) => {
    console.log(submit);
  };

  //   console.log("error", errors);

  return (
    <div className="form-wrap ">
      <Form onSubmit={handleSubmit(submitLogin)}>


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

            
        <Button className="login" variant="primary" type="submit">
            Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
