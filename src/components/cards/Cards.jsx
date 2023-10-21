import React from 'react';
import './cards.css';
function Cards() {
return (
<div className="card-container">
   <h1>Cards</h1>
   <div className="cards">
      <div className="card">
         <img className="card-logo" src="https://res.cloudinary.com/deruwllkv/image/upload/v1697843864/Screen_Shot_2023-10-20_at_19.17.11.png"></img>
         <div className="card-text">
            <span className="title">Joe</span>
            <span className="subtitle">Paradigm Representative</span>
            <span className='badge'>Admin</span>
         </div>
      </div>
      <div className="card">
         <img className="card-logo" src="https://res.cloudinary.com/deruwllkv/image/upload/v1697843864/Screen_Shot_2023-10-20_at_19.17.04.png"></img>
         <div className="card-text">
            <span className="title">Sofia</span>
            <span className="subtitle">Product Directives Officer</span>
            <span className='badge'>Admin</span>
         </div>
      </div>
      <div className="card">
         <img className="card-logo" src="https://res.cloudinary.com/deruwllkv/image/upload/v1697843864/Screen_Shot_2023-10-20_at_19.16.45.png"></img>
         <div className="card-text">
            <span className="title">Peter</span>
            <span className="subtitle">Central Security Manager</span>
            <span className='badge'>Admin</span>
         </div>
      </div>
      <div className="card">
      <img className="card-logo" src="https://res.cloudinary.com/deruwllkv/image/upload/v1697843864/Screen_Shot_2023-10-20_at_19.16.52.png"></img>
         <div className="card-text">
            <span className="title">Roxane</span>
            <span className="subtitle">Lead Implementation Liaison</span>
            <span className='badge'>Admin</span>
         </div>
      </div>
   </div>
</div>
)}
export default Cards;