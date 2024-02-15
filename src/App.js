import logo from "./statics/logo.jpg"
import './App.css';
import HeaderButton from "./components/header_buttons";
import Main_Section from "./components/main_section";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <HeaderButton/>
        </div>
      </header>
      {/* Main Panal   */}
      <div>
        <Main_Section/>
      </div>
    </div>
  );
}

export default App;
