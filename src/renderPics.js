import React from "react";
import { BsTags } from "react-icons/bs";
import { CiCloudOn } from "react-icons/ci";


function Render(props) {

return (
    <div>
   <div className="Pics">
        <img src={props.img} alt="" className="img-fluid" width='230px' />

        </div>
    
<h4 className="text-[var(--text-color)] flex items-center gap-2"><BsTags />{props.Title}</h4>
<p className="text-[var(--text-color)]  flex items-center gap-2"><CiCloudOn />{props.Dates}</p>


</div>
)



}


export default Render;