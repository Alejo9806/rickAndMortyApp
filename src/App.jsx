import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Character from "./pages/Character";
import { RickAndMortyProvider } from "./context/RickAndMortyProvider";

import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#35c9dd",
      },
      text: {
        secondary: {
          main: "#598fac",
        },
      },
    },
  });

  return (
    <BrowserRouter>
      <RickAndMortyProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<Character />} />
          </Routes>
        </ThemeProvider>
      </RickAndMortyProvider>
    </BrowserRouter>
  );
}

export default App;
