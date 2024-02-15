// Define three different home icon objects
const homeIconsData = [
  { iconSrc: "https://img.icons8.com/?size=256&id=83326&format=png", text: "HOME" },
  { iconSrc: "https://img.icons8.com/?size=256&id=101166&format=png", text: "ARTIFACTS" },
  { iconSrc: "https://img.icons8.com/?size=256&id=82742&format=png", text: "ABOUT" }
];


function HeaderButton() {
  return (
    <div className="home-icons-container" >
      {/* Render HomeIcon component for each home icon object */}

      {homeIconsData.map((icon, index) => (

        <div  className='home-icons' >
            <button key={index} className='btn1'>
                <img src={icon.iconSrc} alt='icons'></img><span>{icon.text}</span>
            </button> 
        </div>
      ))}
    </div>
  );
}

export default HeaderButton;
