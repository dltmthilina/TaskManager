import SearchAppBar from "./components/AppBar";
import UserTasks from "./components/UserTasks";
import {createTheme, ThemeProvider} from "@mui/material"

import AddTask from "./components/AddTask";
import Footer from "./components/Footer";

const theme=createTheme({
  palette:{
    primary:{
      main:'#cc0005'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <SearchAppBar/>
      <UserTasks/>
      <AddTask/>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
