import React from 'react';
import './reviews.css';
function Reviews() {
return (
<div className="review-content">
   <h1>
      Reviews
   </h1>
   <div className='customer-card'>
      <div className="customer-reviews">
         <h2 className='review-title'>Customer Reviews</h2>
         <div className='review-subtitle'>
            <div>⭐⭐⭐⭐⭐</div>
            <div className='review-text'>Based on 1624 reviews</div>
         </div>
         <div className='progress'>
            <span className='number'>5</span>
            <div className="progress-container">
               <div className="progress-bar" id="myProgressBar" style={{width: "50%"}}>
            </div>
         </div>
         <span className='percentage'>63%</span>
      </div>
      <div className='progress'>
         <span className='number'>4</span>
         <div className="progress-container">
            <div className="progress-bar" id="myProgressBar" style={{width: "40%"}}>
         </div>
      </div>
      <span className='percentage'>40%</span>
   </div>
   <div className='progress'>
      <span className='number'>3</span>
      <div className="progress-container">
         <div className="progress-bar" id="myProgressBar" style={{width: "15%"}}>
      </div>
   </div>
   <span className='percentage'>15%</span>
</div>
<div className='progress'>
   <span className='number'>2</span>
   <div className="progress-container">
      <div className="progress-bar" id="myProgressBar" style={{width: "06%"}}>
   </div>
</div>
<span className='percentage'>6%</span>
</div>
<div className='progress'>
   <span className='number'>1</span>
   <div className="progress-container">
      <div className="progress-bar" id="myProgressBar" style={{width: "05%"}}>
   </div>
</div>
<span className='percentage'>1%</span>
</div>
</div>
<div className="customers-container">
   <div className="individual-customer">
      <div className='customer'>
         <div className='review-container'>
            <img className='customer-image' src="https://res.cloudinary.com/deruwllkv/image/upload/v1697843864/Screen_Shot_2023-10-20_at_19.17.18.png"></img>
            <div className='text-container'>
               <div className='review-title'>Emily Selman</div>
               <div className='review-stars'>⭐⭐⭐⭐⭐</div>
            </div>
         </div>
         <div className='review-comment'><i></i>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</div>
      </div>
   </div>
   <div className='for-review'></div>
   <div className="individual-customer">
      <div className='customer'>
         <div className='review-container'>
            <img className='customer-image' src="https://res.cloudinary.com/deruwllkv/image/upload/v1697843864/Screen_Shot_2023-10-20_at_19.16.57.png"></img>
            <div className='text-container'>
               <div className='review-title'>Emily Selman</div>
               <div className='review-stars'>⭐⭐⭐⭐⭐</div>
            </div>
         </div>
         <div className='review-comment'>Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!</div>
      </div>
   </div>
   <div className='for-review'></div>
   <div className="individual-customer">
      <div className='customer'>
         <div className='review-container'>
            <img className='customer-image' src="https://res.cloudinary.com/deruwllkv/image/upload/v1697843864/Screen_Shot_2023-10-20_at_19.16.52.png"></img>
            <div className='text-container'>
               <div className='review-title'>Emily Selman</div>
               <div className='review-stars'>⭐⭐⭐⭐⭐</div>
            </div>
         </div>
         <div className='review-comment'>I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.</div>
      </div>
   </div>
   <div className='for-review'></div>
   <div className="individual-customer">
      <div className='customer'>
         <div className='review-container'>
            <img className='customer-image' src="https://res.cloudinary.com/deruwllkv/image/upload/v1697843864/Screen_Shot_2023-10-20_at_19.17.11.png"></img>
            <div className='text-container'>
               <div className='review-title'>Emily Selman</div>
               <div className='review-stars'>⭐⭐⭐⭐</div>
            </div>
         </div>
         <div className='review-comment'>I loved it!</div>
      </div>
   </div>
</div>
</div>
</div>
)}
export default Reviews;