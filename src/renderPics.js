import React from "react";


function Render(props) {

return (
    <div>

<img src={props.img} alt="" width='200px' />
<h6 className="bg-violet-500">{props.Title}</h6>
<p className="mb-violet-500">{props.Dates}</p>


</div>
)



}


export default Render;