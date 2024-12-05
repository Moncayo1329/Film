import React from "react";
import {Filmphotos} from "./data/film";
import Render from "./renderPics";

function Pics() {

   
return (
<div className="App">
      <header className="App-header"> 
        <h1>Mike film</h1>
        {Filmphotos && Filmphotos.length > 0 ? (
          Filmphotos.map((photo, index) => (
            <Render
              key={index}
              img={photo.img}             
              Title={photo.Title} 
              Dates={photo.Dates}
            />
          ))
        ) : (
          <p>No photos available</p>   
        )}
    </header>
    </div>




)



}


export default Pics