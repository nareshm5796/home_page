// Define three different home icon objects
const reviewData = [
    { iconSrc: "https://img.icons8.com/?size=50&id=581&format=png", text: 10 },
    { iconSrc: "https://img.icons8.com/?size=256&id=3447&format=png", text: 120 },
    { iconSrc: "https://img.icons8.com/?size=256&id=42321&format=png", text: 50}
  ];
  
  
  function ReviewButton() {
    return (
      <div className="review-icon-container" >
        {/* Render HomeIcon component for each home icon object */}
        {reviewData.map((icon, index) => (
          <div  className='review-icon' >
              <button key={index} className='btn2'>
                  <img src={icon.iconSrc} alt='icons'></img>
              </button> 
              <h5>{icon.text}</h5>
          </div>
        ))}
      </div>
    );
  }
  
  export default ReviewButton;
  