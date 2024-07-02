import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "quill/dist/quill.snow.css"; //

import LayOut from "./pages/layout/layout";
import AdminRoute from "./Routes/adminRoutes";
import StudentRoute from "./Routes/StudentRoutes";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout1 from "./pages/AcadmyLayout/Layout1/layout1";
import LayOut2 from "./pages/AcadmyLayout/Layout2/layout2";
import LayOut3 from "./pages/AcadmyLayout/Layout3/layout3";
import AllBlogpage from "./component/AcadmyLayouts/Blog/AllBlogpage/AllBlogpage";
import AllProductsPage from "./component/AcadmyLayouts/AllProductsPage/AllProductsPage";
import AllCoursesPage from "./component/AcadmyLayouts/AllCoursesPage/AllCoursesPage";
import ContactUs3 from "./component/AcadmyLayouts/ContactUs3/ContactUs3";
import ContactUs4 from "./component/AcadmyLayouts/ContactUs4/ContactUs4";
import LayOut4 from "./pages/AcadmyLayout/Layout4/layout4";
import SingleBlogPage from "./component/AcadmyLayouts/Blog/SingleBlogPage/SingleBlogPage";
import "aos/dist/aos.css";
import AOS from "aos";
import AcademyRoutes from "./Routes/AcademyRoutes";
import Home from "./pages/MainPages/Home/Home";
import LaunchYourAcademy from "./pages/MainPages/LaunchYourAcademy/LaunchYourAcademy";
import EmployeeTrainning from "./pages/MainPages/EmployeeTrainning/EmployeeTrainning";
import Ai from "./pages/MainPages/Ai/Ai";
import MainBlog from "./pages/MainPages/Blog/MainBlog";
import SingleCourse from "./pages/MainPages/SingleCourse/SingleCourse";
function App() {
  const [count, setCount] = useState(0);
  const locaiton = useLocation();
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div dir="rtl">
        {locaiton.pathname.includes("/admin") ? (
          <AdminRoute />
        ) : locaiton.pathname.includes("/student") ? (
          <StudentRoute />
        ) : locaiton.pathname.includes("/academy") ? (
          <AcademyRoutes />
        ) : null}

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/LaunchYourAcademy" element={<LaunchYourAcademy />} />
          <Route path="/EmployeeTrainning" element={<EmployeeTrainning />} />
          <Route path="/Ai" element={<Ai />} />
          <Route path="/Blogs" element={<MainBlog />} />
          <Route path="/SingleCourse" element={<SingleCourse />} />
          <Route path="/acdemyLayout/1" element={<Layout1 />} />
          <Route path="/acdemyLayout/2" element={<LayOut2 />} />
          <Route path="/acdemyLayout/3" element={<LayOut3 />} />
          <Route path="/acdemyLayout/4" element={<LayOut4 />} />
          <Route path="/acdemyLayout/3/allBlogs" element={<AllBlogpage />} />
          <Route
            path="/acdemyLayout/3/AllProductsPage"
            element={<AllProductsPage />}
          />
          <Route
            path="/acdemyLayout/3/AllCoursesPage"
            element={<AllCoursesPage />}
          />
          <Route path="/acdemyLayout/3/ContactUs" element={<ContactUs3 />} />
          <Route path="/acdemyLayout/4/ContactUs" element={<ContactUs4 />} />

          <Route
            path="/acdemyLayout/4/SingleBlogPage"
            element={<SingleBlogPage />}
          />
          <Route
            path="/acdemyLayout/3/SingleBlogPage"
            element={<SingleBlogPage />}
          />

          <Route path="/acdemyLayout/1/allBlogs" element={<AllBlogpage />} />
          <Route
            path="/acdemyLayout/1/AllProductsPage"
            element={<AllProductsPage />}
          />
          <Route
            path="/acdemyLayout/1/AllCoursesPage"
            element={<AllCoursesPage />}
          />
          <Route path="/acdemyLayout/1/ContactUs" element={<ContactUs3 />} />
          <Route path="/acdemyLayout/2/allBlogs" element={<AllBlogpage />} />
          <Route
            path="/acdemyLayout/2/AllProductsPage"
            element={<AllProductsPage />}
          />
          <Route
            path="/acdemyLayout/2/AllCoursesPage"
            element={<AllCoursesPage />}
          />

          <Route path="/acdemyLayout/2/ContactUs" element={<ContactUs4 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
