import './App.css';

import {Routes,Route} from 'react-router-dom'
import DefaultLayout from './layout/default/index.jsx';
import { ThemeProvider as Theme} from './theme/DarkLightMode.jsx';
import { ThemeProvider,CssBaseline } from '@mui/material';
import { ColorModeContext } from './theme.js';
import { useMode } from './theme.js';
import Home from './pages/Home/index.jsx';
import About from './pages/About/index.jsx';
import Service from './pages/Service/index.jsx';
import ServiceItem from './pages/Service/ServiceItem.jsx';
import Blog from './pages/Blog/index.jsx';
import SingleBlog from './pages/Blog/SingleBlog.jsx';
import Admin from './layout/admin/index.jsx';
import Dashboard from './pages/admin/dashboard/index.jsx';
import Post from './pages/admin/post/index.jsx';
import AdminPricing from './pages/admin/pricing/index.jsx';
import AdminServicing from './pages/admin/service/index.jsx';
import Login from './pages/admin/login/index.jsx';
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
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}>
      </Route>
      <Route path='/service/:id' exact element={<ServiceItem/>}/>
<Route path='/blog' element={<Blog/>}/>
<Route path='/blog/345' element={<SingleBlog/>}/>
      </Route>
    <Route path='/admin/login' element={<Login/>}/>

  <Route path='/admin' element={<Admin/>}>
    <Route path='/admin/dashboard' element={<Dashboard/>}/>
    <Route path='/admin/post' element={<Post/>}/>
    <Route path='/admin/price' element={<AdminPricing/>}/>
    <Route path='/admin/service' element={<AdminServicing/>}/>
  </Route>

      </Routes>
      </Theme>
      </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
