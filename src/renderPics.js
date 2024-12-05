import React from "react";


function Render(props) {

return (
    <div>

<img src={props.img} alt="" width='200px' />
<h6>{props.Title}</h6>
<p style={{ color: '#161748' }}>{props.Dates}</p>


</div>
)



}


export default Render;