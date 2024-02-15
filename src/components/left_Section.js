import React, { useState } from 'react';
import ReviewButton from './review_Buttons';

function LeftSection() {
  const myDiv = document.getElementsByClassName('left-section');
  console.log(myDiv);
  
  const [userVisible, setUserVisible] = useState(true);
  const toggleUserVisibility = () => {
    setUserVisible(!userVisible);
  };

  return (
    <div className="left-section">
      <div className='toggle-container'> 
      <button className='toggle-btn' onClick={toggleUserVisibility}>
        {userVisible ? <img  src='https://img.icons8.com/?size=256&id=100948&format=png' alt='arrow' /> : <img src='https://img.icons8.com/?size=256&id=37354&format=png' alt='arrow'/>}
      </button>
      </div>
      
      {userVisible && <UserProfile />}

      
    </div>
  );
}

function UserProfile() {
  // Example user data
  const user = {
    img_fname:'BUDDHA IN',
    img_lname:'MEDITATION',
    
    Dinasity :" ",
    Period: 100,
    Material: " ",
    Location:" "
  };
   

  return (
    <div >
        <div className='left-container'>
          <h3>{user.img_fname}</h3><h3>{user.img_lname}</h3> 
        </div>    
        <div className='reviews-container'> 
          <ReviewButton/> 
        </div> 
        <div className='about-img'>
          <p>Dinasity : {user.Dinasity}</p>
          <p>Period : {user.Period}</p>
          <p>Material : {user.Material}</p>
          <p>Location : {user.Location}</p>
        </div>
        <h5>
            Description:
        </h5>
        <p className='description'>
        According to the various traditions of Buddhism, there have been buddhas in the past and there will be buddhas in the future.
        </p>
        <button className='read-more-btn'>
          <img src='https://img.icons8.com/?size=256&id=39777&format=png' alt='img1'></img> <span>READ MORE</span>
        </button>
    </div>
  );
}

export default LeftSection;
