import React from "react";
import { BsTags } from "react-icons/bs";
import { CiCloudOn } from "react-icons/ci";
import './styles.css';

function Render(props) {

return (
    <article className='book'>
   
        <img src={props.img} alt="" className="img-fluid" width='200px' />
    
<h6 className="text-[var(--text-color)]"><BsTags />{props.Title}</h6>
<p className="text-[var(--text-color)]"><CiCloudOn />{props.Dates}</p>



</article>
)



}


export default Render;