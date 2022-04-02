import { ThemeProvider } from "@mui/material";
import "./App.css";
import Router from "./Router/Router";
import { theme } from './Components/common/theme'

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme} >
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
