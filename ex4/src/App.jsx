import AppbarComp from "./components/AppbarComp";
import CardComp from "./components/CardComp";
//import TextFieldComponent from "./components/TextFieldComponent";
//import Typo from "./components/Typo";
import { createTheme, ThemeProvider } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#bede" },
      secondary: { main: deepPurple[200] },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppbarComp />
        <CardComp />
        {/* <Typo />
      <TextFieldComponent /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
