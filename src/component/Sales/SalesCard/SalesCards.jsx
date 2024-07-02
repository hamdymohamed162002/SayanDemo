import { mockUsers } from "../mock";
import SalesCard from "./SalesCard";
const data = mockUsers(8);
const SalesCards = ({ notAdmin }) => {
  return (
    <div className="all-marketing-card">
      <div className="row g-3  CustomCard   mt-3">
        {data.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-4">
            <div className="w-100">
              {" "}
              <SalesCard notAdmin={notAdmin} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesCards;
