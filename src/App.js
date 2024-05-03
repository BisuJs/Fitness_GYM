import './App.css';

import {Routes,Route} from 'react-router-dom'
import DefaultLayout from './layout/default/index.jsx';
import { ThemeProvider as Theme} from './theme/DarkLightMode.jsx';
import { ThemeProvider,CssBaseline } from '@mui/material';
import { ColorModeContext } from './theme.js';
import { useMode } from './theme.js';
import Home from './pages/Home/index.jsx';
function App() {
  const [theme,colorMode]=useMode();
  
  return (
    <div className="">
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Theme>
      <Routes>
      <Route path='/' element={<DefaultLayout/>}>
        <Route index element={<Home/>}></Route>
      </Route>
      </Routes>
      </Theme>
      </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
