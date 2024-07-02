import Dashboard from "../pages/dashboard/dashbaord";
import Users from "../pages/userDatabase/Users";
import Profile from "../pages/Profile/Profile";
import StudentRate from "../pages/studentBag/rates";
import Subscription from "../pages/studentBag/subscibtion";
import Cart from "../pages/studentBag/cart";
import AddNewUser from "../pages/userDatabase/AddNewUser/AddNewUser";
import RolesAndPermession from "../pages/rolesAndPermession/rolesAndPermession";
import AddNewRole from "../pages/addNewRole/addNewRole";
import JoiningForms from "../pages/JoiningForms/JoiningForms";
import ShoJoinForm from "../pages/JoiningForms/ShoJoinForm/ShoJoinForm";
import FinancialTransactions from "../pages/FinancialTransactions/FinancialTransactions";
import AffiliateMarketing from "../pages/AffiliateMarketing/AffiliateMarketing";
import AffiliateMarketingSetting from "../pages/AffiliateMarketing/AffiliateMarketingSetting/AffiliateMarketingSetting";
import AcadmicMarketing from "../pages/AffiliateMarketing/AcadmicMarketing/AcadmicMarketing";
import Sales from "../pages/sales/sales";
import TrainingCourses from "../pages/TrainingCourses/TrainingCourses";
import Sessions from "../pages/Sessions/Sessions";
import DigitalProducts from "../pages/DigitalProducts/DigitalProducts";
import SingleProduct from "../pages/DigitalProducts/SingleProduct/SingleProduct";
import ProductPackages from "../pages/ProductPackages/ProductPackages";
import ProductPackagesSingleProduct from "../pages/ProductPackages/SingleProduct/SingleProduct";
import Blogs from "../pages/blogs/blog";
import AddNewBlog from "../pages/blogs/AddNewBlog";
import Videos from "../pages/Video/Video";
import AddNewVideo from "../pages/Video/AddNewVideo";
import SingleVideo from "../pages/Video/SingleVideo";
import Categories from "../pages/categories/categories";
import AddNewCate from "../pages/categories/AddNewCate";
import NotifcationSend from "../pages/NotifcationSend/NotifcationSend";
import AddNewNotfication from "../pages/NotifcationSend/AddNewNotfication";
import SubscreptionPacks from "../pages/SubscreptionPacks/SubscreptionPacks";
import AddNewSubscreptionPacks from "../pages/SubscreptionPacks/AddNewSubscreptionPacks";
import SubscreptionInfoPage from "../pages/SubscreptionPacks/subscreptionInfo";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import EditPrivacy from "../pages/PrivacyPolicy/EditPrivacy";
import Terms from "../pages/Terms/Terms";
import EditTerms from "../pages/Terms/EditTerms";
import ReportsAndStatistics from "../pages/ReportsAndStatistics/ReportsAndStatistics";
import Subscreptions from "../pages/Subscreptions/Subscreptions";
import Comments from "../pages/Comments/Comments";
import Purchases from "../pages/purchases/purchases";
import Wallet from "../pages/Wallet/Wallet";
import Exams from "../pages/Exams/Exams";
import SingleEaxam from "../pages/Exams/SingleEaxam";

import SingleCourse from "../pages/TrainingCourses/SingleCourse";
import Certficates from "../pages/Certficates/Certficates";
import AddNewCertficates from "../pages/Certficates/AddNewCertficates";
import SingleCertificate from "../pages/Certficates/SingleCertificate";
import SingleSale from "../pages/sales/SingleSale";
import AddNewSale from "../pages/sales/AddNewSale";
import Login from "../pages/login/login";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import LayOut from "../pages/layout/layout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const AdminRoute = () => {
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);
  const router = useNavigate();
  useEffect(() => {
    console.log(loggedIn);
  });
  const AuthGaurd = ({ children }) => {
    if (loggedIn) {
      return children;
    } else return <Navigate to="/admin/login" />;
  };
  return (
    <LayOut>
      <Routes>
        <Route
          index
          path="admin/"
          element={
            <>
              <Dashboard />
            </>
          }
        />
        <Route
          path="admin/login"
          element={
            <div key="login">
              <Login />
            </div>
          }
        />
        <Route
          path="admin/users/*"
          element={
            <AuthGaurd>
              <Users />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/profile"
          element={
            <AuthGaurd>
              <Profile />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/StudentRate"
          element={
            <AuthGaurd>
              <StudentRate />
            </AuthGaurd>
          }
        />

        <Route
          path="admin/Subscription/*"
          element={
            <AuthGaurd>
              <Subscription />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/Cart/*"
          element={
            <AuthGaurd>
              <Cart />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/users/addNewUser"
          element={
            <AuthGaurd>
              <AddNewUser />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/RolesAndPermession"
          element={
            <AuthGaurd>
              <RolesAndPermession />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/AddNewRole"
          element={
            <AuthGaurd>
              <AddNewRole />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/JoiningForms"
          element={
            <AuthGaurd>
              <JoiningForms />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/ShowJoinForm"
          element={
            <AuthGaurd>
              <ShoJoinForm />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/FinancialTransactions"
          element={
            <AuthGaurd>
              <FinancialTransactions />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/AffiliateMarketing/*"
          element={
            <AuthGaurd>
              <AffiliateMarketing />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/AffiliateMarketingSetting"
          element={
            <AuthGaurd>
              <AffiliateMarketingSetting />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/AcadmicMarketing/*"
          element={
            <AuthGaurd>
              <AcadmicMarketing />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/Sales/*"
          element={
            <AuthGaurd>
              <Sales />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/TrainingCourses/*"
          element={
            <AuthGaurd>
              <TrainingCourses />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/Sessions/*"
          element={
            <AuthGaurd>
              <Sessions />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/DigitalProducts"
          element={
            <AuthGaurd>
              <DigitalProducts />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/DigitalProducts/SingleProduct/*"
          element={
            <AuthGaurd>
              <SingleProduct />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/ProductPackages"
          element={
            <AuthGaurd>
              <ProductPackages />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/ProductPackages/SingleProduct/*"
          element={
            <AuthGaurd>
              <ProductPackagesSingleProduct />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/Blogs/*"
          element={
            <AuthGaurd>
              <Blogs />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/AddNewBlog"
          element={
            <AuthGaurd>
              <AddNewBlog />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/Video"
          element={
            <AuthGaurd>
              <Videos />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/AddNewVideo"
          element={
            <AuthGaurd>
              <AddNewVideo />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/SingleVideo/*"
          element={
            <AuthGaurd>
              <SingleVideo />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/Categories/*"
          element={
            <AuthGaurd>
              <Categories />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/AddNewCate/*"
          element={
            <AuthGaurd>
              <AddNewCate />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/NotifcationSend/*"
          element={
            <AuthGaurd>
              <NotifcationSend />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/AddNewNotfication/*"
          element={
            <AuthGaurd>
              <AddNewNotfication />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/SubscreptionPacks/*"
          element={
            <AuthGaurd>
              <SubscreptionPacks />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/AddNewSubscreptionPacks/*"
          element={
            <AuthGaurd>
              <AddNewSubscreptionPacks />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/singleSub/*"
          element={
            <AuthGaurd>
              <SubscreptionInfoPage />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/PrivacyPolicy/*"
          element={
            <AuthGaurd>
              <PrivacyPolicy />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/EditPrivacy/*"
          element={
            <AuthGaurd>
              <EditPrivacy />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/Terms/*"
          element={
            <AuthGaurd>
              <Terms />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/EditTerms/*"
          element={
            <AuthGaurd>
              <EditTerms />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/ReportsAndStatistics/*"
          element={
            <AuthGaurd>
              <ReportsAndStatistics />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/Subscreptions/*"
          element={
            <AuthGaurd>
              <Subscreptions />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/Comments/*"
          element={
            <AuthGaurd>
              <Comments />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/Purchases/*"
          element={
            <AuthGaurd>
              <Purchases />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/Wallet/*"
          element={
            <AuthGaurd>
              <Wallet />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/Exams/*"
          element={
            <AuthGaurd>
              <Exams />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/SingleExam/*"
          element={
            <AuthGaurd>
              <SingleEaxam />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/SingleCourse/*"
          element={
            <AuthGaurd>
              <SingleCourse />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/Certficates/*"
          element={
            <AuthGaurd>
              <Certficates />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/AddNewCertficates/*"
          element={
            <AuthGaurd>
              <AddNewCertficates />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/SingleCertificate/*"
          element={
            <AuthGaurd>
              <SingleCertificate />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/SingleSale/*"
          element={
            <AuthGaurd>
              <SingleSale />
            </AuthGaurd>
          }
        />
        <Route
          path="admin/AddNewSale/*"
          element={
            <AuthGaurd>
              <AddNewSale />
            </AuthGaurd>
          }
        />
      </Routes>
    </LayOut>
  );
};

export default AdminRoute;
