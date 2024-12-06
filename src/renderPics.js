import React from "react";
import { BsTags } from "react-icons/bs";
import { CiCloudOn } from "react-icons/ci";

function Render(props) {

return (
    <div>

<img src={props.img} alt="" width='200px' />
<h6 className="text-[var(--text-color)]"><BsTags />{props.Title}</h6>
<p className="text-[var(--text-color)]"><CiCloudOn />{props.Dates}</p>


</div>
)



}


export default Render;