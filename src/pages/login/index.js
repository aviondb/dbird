import React, { Fragment } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { login } from "../../redux/user/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

function Login(props) {
  const history = useHistory();
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  //props.login();

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  if (
    Object.keys(props.user).includes("email") &&
    Object.keys(props.user).includes("password")
  ) {
    history.push("/profile/setup");
  }

  return (
    <center>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-email"
          label="Email"
          className={classes.textField}
          value={values.email}
          onChange={handleChange("email")}
          margin="normal"
        />
        <TextField
          id="standard-password"
          label="Password"
          type="password"
          className={classes.textField}
          value={values.password}
          onChange={handleChange("password")}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            props.login({
              email: values.email,
              password: values.password,
            });
          }}
        >
          Primary
        </Button>
      </form>
    </center>
  );
}

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
