import "./App.css";
import Input from "./Input";
import { ThemeContext, themes } from "./Themecontext";
import { useState} from "react";

function App() {
  const [darkmode, setDarkMode] = useState(true);
  return (
    <div className="App">

      
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
                <div className="bg">
            <div className="grid1">
              <h1 className="heading">TODO</h1>
              <span
              
                onClick={() => {
                  setDarkMode(!darkmode);
                  changeTheme(darkmode ? themes.light : themes.dark);
                }}
                className="moon"
              ></span>
     <Input />
           
            </div>
       </div>
  
        )}
      </ThemeContext.Consumer>
      </div>
      
 
  );
}

export default App;
