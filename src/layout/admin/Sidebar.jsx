import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Dropdown from '../../component/Dropdown';
const drawerWidth = 180;



export default function SideBar(props) {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode)
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
const sidebarList=[{
  id:2,
  name:'Dashboard',
  link:'/admin/dashboard'
},{
  id:3,
  name:'Post',
  link:'/admin/post'
},{
  id:4,
  name:'Price',
  link:'/admin/price'
},{
  id:5,
  name:'Service',
  link:'/admin/service'
},{
  id:6,
  name:'Setting',
  innerList:[{
    id:7,
    name:'Users',
    link:'/admin/setting/user'
  },{
    id:8,
    name:'Customers',
    link:'/admin/setting/customers'
  }
]
},{
  id:9,
  name:'Home',
  link:'/',

},{
  id:10,
  name:'Logout',
  link:'/admin/login'
}]
  const drawer = (
    <Box backgroundColor={colors?.primary[400]}>
       <Box component='div' paddingBlock='1rem' display='flex' justifyContent={'center'} alignItems={'center'}>
        <Link to="/" style={{textDecoration:'none'}}>
        <Typography variant='h1' sx={{fontSize:'2rem',fontWeight:'bold',textTransform:'uppercase',letterSpacing:'0.1rem',display:'flex',color:theme.palette.neutral.dark}}>
          Fit
          <Typography variant='h1' sx={{fontSize:'2rem',fontWeight:'bold',textTransform:'uppercase', letterSpacing:'0.1rem',color:theme.palette.secondary.main }}>ness</Typography>
          </Typography>
          </Link>
      </Box>
      {/* <Toolbar /> */}
      <Divider />
      <List
      sx={{minWidth:180, bgcolor:colors?.primary[400],display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}
    >
      {sidebarList?.map((item, index) => (
          <ListItemButton key={item} sx={{width:'100%'}} >
              {item?.innerList ? <Dropdown title={item?.name} dropdownList={item?.innerList}/>:<ListItemText as={Link} to={item?.link} sx={{textDecoration:'none',color:colors.grey[100]}} primary={<Typography sx={{fontSize:'1rem',fontWeight:'600'}}>{item.name}</Typography>}/>}
          </ListItemButton>
        ))}

    </List>
      
      {/*  */}
    </Box>
  );


  return (
    <Box sx={{ display: 'flex','& .css-15b8vjn-MuiPaper-root-MuiDrawer-paper':{
backgroundColor:colors?.primary[400]
    }}}>
      {/* <CssBaseline /> */}
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
            backgroundColor='red'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            backgroundColor:colors?.primary[600],
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'red' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{backgroundColor:'red',
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}
