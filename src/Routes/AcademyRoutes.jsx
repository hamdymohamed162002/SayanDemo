import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import LayOut from "../pages/layout/layout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Profile from "../pages/AcademyDashBoard/Profile/Profile";
import DigitalProducts from "../pages/AcademyDashBoard/DigitalProducts/DigitalProducts";
import AddNewProduct from "../pages/AcademyDashBoard/DigitalProducts/AddNewProduct";
import Blogs from "../pages/AcademyDashBoard/blogs/blog";
import AddNewBlogAcademey from "../pages/AcademyDashBoard/blogs/AddNewBlog";
import ReportsAndStatistics from "../pages/AcademyDashBoard/ReportsAndStatistics/ReportsAndStatistics";
import AcademeyWallet from "../pages/AcademyDashBoard/Wallet/Wallet";
import AcademySales from "../pages/AcademyDashBoard/sales/sales";
import AcadmeyTrainingCourses from "../pages/AcademyDashBoard/TrainingCourses/TrainingCourses";
import AcademySingleCourse from "../pages/AcademyDashBoard/TrainingCourses/SingleCourse";
import AcademyCertficates from "../pages/AcademyDashBoard/Certficates/Certficates";
import AcademyAddNewCertficates from "../pages/AcademyDashBoard/Certficates/AddNewCertficates";
import Exams from "../pages/AcademyDashBoard/Exams/Exams";
import SingleEaxam from "../pages/AcademyDashBoard/Exams/SingleEaxam";
import SingleProduct from "../pages/AcademyDashBoard/DigitalProducts/SingleProduct/SingleProduct";
import AcademyVideos from "../pages/AcademyDashBoard/Video/Video";
import SingleVideo from "../pages/AcademyDashBoard/Video/SingleVideo";
import AddNewVideo from "../pages/AcademyDashBoard/Video/AddNewVideo";
import Categories from "../pages/AcademyDashBoard/categories/categories";
import AddNewCate from "../pages/AcademyDashBoard/categories/AddNewCate";
import StudentInfo from "../pages/AcademyDashBoard/StudentInfo/StudentInfo";
import AddNewStudnet from "../pages/AcademyDashBoard/StudentInfo/AddNewStudnet";
import StudentBagExams from "../pages/AcademyDashBoard/StudentBagExams/StudentBagExams";
import StudentBagCertifcate from "../pages/AcademyDashBoard/StudentBagCertifcate/StudentBagCertifcate";
import Comments from "../pages/AcademyDashBoard/Comments/Comments";
import AffiliateMarketing from "../pages/AcademyDashBoard/AffiliateMarketing/AffiliateMarketing";
import AddJoinFrom from "../pages/AcademyDashBoard/AffiliateMarketing/AddJoinFrom";
import FinancialTransactions from "../pages/FinancialTransactions/FinancialTransactions";
import SubscreptionPacks from "../pages/AcademyDashBoard/SubscreptionPacks/SubscreptionPacks";
import AddNewSubscreptionPacksAcademy from "../pages/AcademyDashBoard/SubscreptionPacks/AddNewSubscreptionPacks";
import AcademyDashboard from "../pages/AcademyDashBoard/HomePage/dashbaord";

const AcademyRoutes = () => {
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);
  const router = useNavigate();
  useEffect(() => {
    console.log(loggedIn);
  });
  const AuthGaurd = ({ children }) => {
    if (1) {
      return children;
    } else return <Navigate to="/academy/login" />;
  };
  return (
    <LayOut>
      <Routes>
        <Route
          path="/academy"
          element={
            <>
              <AcademyDashboard />
            </>
          }
        />
        <Route
          path="/academy/Profile"
          element={
            <AuthGaurd>
              <Profile />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/DigitalProducts"
          element={
            <AuthGaurd>
              <DigitalProducts />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/DigitalProducts/AddNewProduct"
          element={
            <AuthGaurd>
              <AddNewProduct />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/Blogs"
          element={
            <AuthGaurd>
              <Blogs />
            </AuthGaurd>
          }
        />

        <Route
          path="/academy/Blogs/AddNewBlog"
          element={
            <AuthGaurd>
              <AddNewBlogAcademey />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/ReportsAndStatistics"
          element={
            <AuthGaurd>
              <ReportsAndStatistics />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/Wallet"
          element={
            <AuthGaurd>
              <AcademeyWallet />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/sales"
          element={
            <AuthGaurd>
              <AcademySales />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/TrainingCourses"
          element={
            <AuthGaurd>
              <AcadmeyTrainingCourses />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/SingleCourse"
          element={
            <AuthGaurd>
              <AcademySingleCourse />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/Certficates"
          element={
            <AuthGaurd>
              <AcademyCertficates />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/AddNewCertficates"
          element={
            <AuthGaurd>
              <AcademyAddNewCertficates />
            </AuthGaurd>
          }
        />












        <Route
          path="/academy/Exams/*"
          element={
            <AuthGaurd>
              <Exams />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/SingleExam/*"
          element={
            <AuthGaurd>
              <SingleEaxam academy />
            </AuthGaurd>
          }
        />

        
        <Route
          path="/academy/DigitalProducts/SingleProduct/*"
          element={
            <AuthGaurd>
              <SingleProduct academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/Video"
          element={
            <AuthGaurd>
              <AcademyVideos academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/SingleVideo/*"
          element={
            <AuthGaurd>
              <SingleVideo academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/AddNewVideo"
          element={
            <AuthGaurd>
              <AddNewVideo academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/Categories"
          element={
            <AuthGaurd>
              <Categories academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/AddNewCate"
          element={
            <AuthGaurd>
              <AddNewCate academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/StudentInfo"
          element={
            <AuthGaurd>
              <StudentInfo academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/addNewStudent"
          element={
            <AuthGaurd>
              <AddNewStudnet academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/StudentBagExams"
          element={
            <AuthGaurd>
              <StudentBagExams academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/StudentBagCertifcate"
          element={
            <AuthGaurd>
              <StudentBagCertifcate academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/Comments"
          element={
            <AuthGaurd>
              <Comments academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/AffiliateMarketing/*"
          element={
            <AuthGaurd>
              <AffiliateMarketing academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/AddJoinFrom/*"
          element={
            <AuthGaurd>
              <AddJoinFrom academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/FinancialTransactions/*"
          element={
            <AuthGaurd>
              <FinancialTransactions academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/SubscreptionPacks/*"
          element={
            <AuthGaurd>
              <SubscreptionPacks academy />
            </AuthGaurd>
          }
        />
        <Route
          path="/academy/AddNewSubscreptionPacks/*"
          element={
            <AuthGaurd>
              <AddNewSubscreptionPacksAcademy academy />
            </AuthGaurd>
          }
        />
      </Routes>
    </LayOut>
  );
};

export default AcademyRoutes;
