import AppbarComp from "./components/AppbarComp";
import CardComp from "./components/CardComp";
import TextFieldComponent from "./components/TextFieldComponent";
import Typo from "./components/Typo";
import { createTheme, ThemeProvider } from "@mui/material";
import { deepOrange, deepPurple, lime } from "@mui/material/colors";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#bede",
      },
      secondary: {
        main: deepPurple[500],
      },
      error: {
        main: lime["A400"],
      },
      koyuTuruncu: {
        main: deepOrange[500],
        light: deepOrange[300],
        dark: deepOrange[800],
        contrastText: "white",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppbarComp />
        <CardComp />
        <Typo />
        <TextFieldComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
