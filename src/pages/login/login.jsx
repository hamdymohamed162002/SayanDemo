import classes from "./login.module.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GoogleIcon from "../../assets/icons/logo.svg";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axiosInstance from "../../../axios";
import { login } from "../../../redux/Slices/AuthSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useNavigate();
  const Dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("بريد الكترونى خطأ")
        .required("البريد الالكترونى مطلوب"),
      password: Yup.string().required("كلمة السر مطلوبة")
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      setLoading(true);
      axiosInstance.post("admin/login", values).then((res) => {
        console.log(res.data);
        setLoading(false);

        Dispatch(login(res.data));
        router("/admin/");
      });
    }
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`row g-3 ${classes.LoginContainer}`}>
      <div className={`col-lg-6 col-md-12 ${classes.LoginBanner} bg-login-banner`}></div>
      <div className="col-lg-6 col-md-12 d-flex  justify-content-center">
        <div
          className="login-form--1"
          style={{
            maxWidth: "100%",
            paddingInline: "20px",
            paddingBottom: "100px"
          }}
        >
          <div className={classes.goBack}>
            {" "}
            <Link to="/" className="text-decoration-none">
              {" "}
              العودة للصفحة الرئيسية <ArrowBackIosIcon />
            </Link>
          </div>
          <div className={`${classes.LoginForm}  `}>
            <h3 className="fs-6 fw-bold  title-text--1">تسجيل الدخول</h3>
            <p>ادخل المعلومات الخاصة بحسابك</p>
            <button className={`${classes.googleBtn} button-login--1 d-flex  align-items-center  gap-3 justify-content-center  mt-3`}>
              {" "}
              الدخول باستخدام حساب جوجل <img src={GoogleIcon} />
            </button>
            <div className={`${classes.line}`}>
              <span>أو</span>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className={`${classes.formGroup} mb-2`}>
                <label htmlFor="email" className="mb-2 fs-6 fw-medium">
                  البريد الإلكتروني
                </label>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  InputProps={{
                    style: {
                      borderRadius: "10px",
                      border: "1px solid #E1E2E6"
                    }
                  }}
                />
              </div>

              <div className={`${classes.formGroup} mb-2`}>
                <label htmlFor="password" className="mb-2 fs-6 fw-medium">
                  كلمة المرور
                </label>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    style: {
                      borderRadius: "10px",
                      border: "1px solid #E1E2E6"
                    }
                  }}
                />
              </div>

              <div
                className={`${classes.checkboxContainer} d-flex justify-content-between align-items-center`}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      id="rememberMe"
                      name="rememberMe"
                      checked={formik.values.rememberMe}
                      onChange={formik.handleChange}
                      color="primary"
                    />
                  }
                  sx={{ margin: "0px" }}
                  label="تذكرني"
                />

                <div
                  href="/forgot-password"
                  className={`${classes.forgotPassword}`}
                >
                  نسيت كلمة المرور؟
                </div>
              </div>

              <button
                className={`${classes.SubmitBtn} mt-2`}
                style={{ display: "flex", justifyContent: "center" }}
              >
                {loading ? (
                  <div className="loader"></div>
                ) : (
                  <p> تسجيل الدخول</p>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
