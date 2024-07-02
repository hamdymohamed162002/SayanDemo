import AcademyHeaderContainer from "../../AcademyHeaderContainer/AcademyHeaderContainer";
import SearchIcon from "@mui/icons-material/Search";
import SingleBlogCard from "../SingleBlogCard";
import AcademyFooter from "../../Footer/Footer";
const AllBlogpage = () => {
  return (
    <div>
      <AcademyHeaderContainer LayOut2 />

      <div className="container " style={{ marginTop: "100px" }}>
        <div className="d-flex justify-content-between align-items-center">
          <h2
            className="fs-5 fw-bold title-text--1"
            style={{ color: "#272727", fontSize: "36px" }}
          >
            المدونة .
          </h2>
          <div className="d-flex gap-2">
            <div className="searchBar">
              <input type="text" placeholder="ابحث عن ..." />
              <div className="iconWrapper">
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 mt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <SingleBlogCard />
            </div>
          ))}
        </div>
      </div>
      <AcademyFooter />
    </div>
  );
};

export default AllBlogpage;
