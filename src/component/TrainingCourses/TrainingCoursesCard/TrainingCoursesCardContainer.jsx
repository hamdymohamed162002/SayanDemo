import { useEffect } from "react";
import TrainingCoursesCard from "./TrainingCoursesCard";
import { mockUsers } from "./mock";
import CardSkelaton from "../../UI/Skelaton/CardSkelaton";

const TrainingCoursesCardContainer = ({setCheckedKeys,checkedKeys,notAdmin,acadmey,data,loading}) => {
    const handleCheck=(item)=>{
        if(checkedKeys.some((i)=>i===item)){
            setCheckedKeys(checkedKeys.filter((i)=>i!==item))
        }else{
            setCheckedKeys([...checkedKeys,item])
        }
    }

  return (
    <div>
      <div className="row g-3">
       {
        loading ? [1,2,3,4,5,6].map((item, index) =>    <div className="col-12 col-md-6 col-lg-4 col-xl-4" key={index}><CardSkelaton /> </div> )
        
        : data.map((item, index) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 col-xl-4" key={index}>
              <TrainingCoursesCard image={item.image} notAdmin={notAdmin} acadmey={acadmey} onCheck={()=>handleCheck(item)} checked={checkedKeys.some((i)=>i===item)} name={item.title} active={item.isActive=="active"}/>
            </div>
          );
        })
       }
      </div>
    </div>
  );
};

export default TrainingCoursesCardContainer;
