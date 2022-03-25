import { useHistory, Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

export function Register() {
  const history = useHistory();

  const register = () => {
    // To make sure same user name are not taken
    const checkUserName = (users) => {
      // To make sure not entering admin and undefined
      if (values.name.match("admin", "undefined")) {
        resetForm();
        return alert("😀 Nice try");
      }

      // To check if user name already taken
      const confirmName = users.filter((e) => e.name === values.name);
      const confirmEmail = users.filter((e) => e.email === values.email);
      if (confirmName.length > 1) {
        resetForm();
        return alert("User name already taken");
      }
      if (confirmEmail.length > 1) {
        resetForm();
        return alert("Email Id exists click forgot password or try login");
      }

      fetch("https://61518b634a5f22001701d293.mockapi.io/user/", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json" },
      }).then(() => history.push("/login"));
    };

    // To check for user name
    fetch("https://61518b634a5f22001701d293.mockapi.io/user/", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((users) => checkUserName(users));
  };

  const formValidationSchema = yup.object({
    name: yup.string().min(4).required("please enter a unique user name"),
    email: yup.string().email().required("email id is required"),
    password: yup
      .string()
      .min(4, "Min 4 characters")
      .required("Min 4 characters")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    cpassword: yup
      .string()
      .required("Please confirm the password")
      .oneOf([yup.ref("password")], "Passwords do not match"),
  });
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      about: "",
      profilepic: "",
      coverpic: "",
      food: "",
      sport: "",
      hobby: "",
      location: "",
      language: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: () => register(),
  });
  return (
    <div className="register-wrapper">
      <h3>Create an Account</h3>
      <form
        className="registeruser-form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          name="name"
          value={values.name}
          label="User Name"
          variant="outlined"
          style={{ width: "40vh" }}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name && touched.name}
          helperText={errors.name && touched.name ? errors.name : ""}
        />
        <TextField
          id="outlined-basic"
          name="email"
          value={values.email}
          label="Enter email id"
          variant="outlined"
          style={{ width: "40vh" }}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email && touched.email}
          helperText={errors.email && touched.email ? errors.email : ""}
        />
        <TextField
          id="outlined-basic"
          name="password"
          value={values.password}
          type="password"
          label="Set Password"
          variant="outlined"
          style={{ width: "40vh" }}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password && touched.password}
          helperText={
            errors.password && touched.password ? errors.password : ""
          }
        />
        <TextField
          id="outlined-basic"
          name="cpassword"
          value={values.cpassword}
          type="password"
          label="Confirm Password"
          variant="outlined"
          style={{ width: "40vh" }}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.cpassword && touched.cpassword}
          helperText={
            errors.cpassword && touched.cpassword ? errors.cpassword : ""
          }
        />
        <Button variant="outlined" type="submit" color="success">
          Submit
        </Button>
      </form>

      <div className="user-already">
        <Link to="/login" aria-label="login">
          Already an user? Login
        </Link>
      </div>
    </div>
  );
}
