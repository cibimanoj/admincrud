import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { Error } from "../components/ErrorPage";
import { useFormik } from "formik";
import * as yup from "yup";

export function Edituserprofile() {
  const { id } = useParams();

  const [userList, setUserList] = useState(null);
  // To get user data based on loged in id
  useEffect(() => {
    fetch(`https://61518b634a5f22001701d293.mockapi.io/user/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((ud) => setUserList(ud));
  }, []);

  return userList ? <ShowForm userList={userList} /> : <Error />;
}

// Higher order function to edit user profile
function ShowForm({ userList }) {
  let inputstyle = { marginTop: "20px" };
  const history = useHistory();

  // Function to save the edited data
  const editProfile = (userData) => {
    fetch(
      `https://61518b634a5f22001701d293.mockapi.io/user/${userList.id}`,
      {
        method: "PUT",
        body: JSON.stringify(userData),
        headers: { "Content-type": "application/json" },
      }
    ).then(() => history.push(`/profile/${userList.id}`));
  };

  const formValidationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("please enter your email"),
    about: yup.string().required("please add something about your free spirit"),
    food: yup.string().required("please add your favourite food"),
    sport: yup.string().required("please add your favourite sport"),
    hobby: yup.string().required("please add your hobby"),
    location: yup.string().required("please enter your location"),
  });

  const { errors, values, handleSubmit, handleChange, handleBlur, touched } =
    useFormik({
      initialValues: {
        name: `${userList.name}`,
        email: `${userList.email}`,
        about: `${userList.about}`,
        profilepic: `${userList.profilepic}`,
        coverpic: `${userList.coverpic}`,
        food: `${userList.food}`,
        sport: `${userList.sport}`,
        hobby: `${userList.hobby}`,
        location: `${userList.location}`,
        language: `${userList.language}`,
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        editProfile(values);
      },
    });

  return (
    <div className="editprofile-wrapper">
      <h3>Hi! {values.name}</h3>
      <h3>Edit Your Profile</h3>
      <form
        className="editprofile-form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          name="email"
          label="User email"
          variant="outlined"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          style={inputstyle}
          error={errors.email && touched.email}
          helperText={errors.email && touched.email ? errors.email : ""}
        />
        <TextField
          id="outlined-basic"
          name="about"
          label="User Info"
          variant="outlined"
          type="text"
          value={values.about}
          onChange={handleChange}
          style={inputstyle}
          error={errors.about && touched.about}
          helperText={errors.about && touched.about ? errors.about : ""}
        />
        <TextField
          id="outlined-basic"
          name="profilepic"
          label="Profile Picture Link"
          variant="outlined"
          type="text"
          value={values.profilepic}
          onChange={handleChange}
          style={inputstyle}
        />
        <TextField
          id="outlined-basic"
          name="coverpic"
          label="Cover Picture Link"
          variant="outlined"
          type="text"
          value={values.coverpic}
          onChange={handleChange}
          style={inputstyle}
        />
        <TextField
          id="outlined-basic"
          name="food"
          label="Favourite Food"
          variant="outlined"
          type="text"
          value={values.food}
          onChange={handleChange}
          style={inputstyle}
          error={errors.food && touched.food}
          helperText={errors.food && touched.food ? errors.food : ""}
        />
        <TextField
          id="outlined-basic"
          name="sport"
          label="Favourite Sport"
          variant="outlined"
          type="text"
          value={values.sport}
          onChange={handleChange}
          style={inputstyle}
          error={errors.sport && touched.sport}
          helperText={errors.sport && touched.sport ? errors.sport : ""}
        />
        <TextField
          id="outlined-basic"
          name="hobby"
          label="Hobby"
          variant="outlined"
          type="text"
          value={values.hobby}
          onChange={handleChange}
          style={inputstyle}
          error={errors.hobby && touched.hobby}
          helperText={errors.hobby && touched.hobby ? errors.hobby : ""}
        />

        <TextField
          id="outlined-basic"
          name="location"
          label="Your Location"
          variant="outlined"
          type="text"
          value={values.location}
          onChange={handleChange}
          style={inputstyle}
          error={errors.location && touched.location}
          helperText={
            errors.location && touched.location ? errors.location : ""
          }
        />
        <TextField
          id="outlined-basic"
          name="language"
          label="Known Languages"
          variant="outlined"
          type="text"
          value={values.language}
          onChange={handleChange}
          style={inputstyle}
        />

        <div className="add-cancel">
          <Button
            variant="outlined"
            type="button"
            className="updatecancel"
            color="error"
            onClick={() => history.goBack()}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            type="submit"
            className="updateBtn"
            color="success"
            // onClick={editProfile}
            startIcon={<EditIcon />}
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}
