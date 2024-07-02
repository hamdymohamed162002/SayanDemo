import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

import DeleteIcon from "../../../assets/icons/DeleteIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";

const SearchAndShowBar = ({
  checkAll,
  TableOrNot,
  setTableOrNot,
  setCheckedKeys,
  data,
  checkAllHandler,
  notAdmin,
  showNoTable,
  ShowEditAndDelete,
  setDeleteModal
}) => {

  return (
    <div className="d-flex justify-content-between flex-wrap gap-3 SearchAndShowbar all-search-bar" style={{border:'1px solid #EDEFF2',borderRadius:'10px'}}>
      {
        notAdmin ? null :<div className="checkAll" onClick={() => checkAllHandler()}>
        <CheckCircleIcon />
        تحديد الكل
      </div>
      }
      <div className="midDIv">
        {
          ShowEditAndDelete && (
            <>
            <div className="SearchDiv">
            <SearchIcon />
            بحث
          </div>
          <div className="filter DeleteIcon" onClick={()=>setDeleteModal(true)}> 
            <DeleteIcon />
            ازالة
          </div></>
          )
  
        }
        <div className="SearchDiv">
          <SearchIcon />
          بحث
        </div>
        <div className="filter">
          <FilterListIcon />
          تصفية
        </div>
      </div>
   
      {
        showNoTable? null :   <div className="EndDiv">
        <div
          className={!TableOrNot && "Active"}
          onClick={() => setTableOrNot(false)}
        >
          <ViewModuleIcon />
        </div>
        <div
          className={TableOrNot && "Active"}
          onClick={() => setTableOrNot(true)}
        >
          <ViewHeadlineIcon />
        </div>
      </div>
      }
    </div>
  );
};

export default SearchAndShowBar;
