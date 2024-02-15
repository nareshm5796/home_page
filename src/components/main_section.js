import LeftSection from "./left_Section";
import RightSection from "./right_Section";
function Main_Section(){
    return(
        <div className="container">
            {/* light panel */}
            <LeftSection/>

             {/* Right panel */}
            <div className="right-section">
            <RightSection/>
            </div>
        </div>
    );
}

export default Main_Section;