import { AppBar, Toolbar, Typography, Button, IconButton, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Maftah's Portfolio 
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <IconButton color="inherit" onClick={toggleDarkMode} sx={{ ml: 2 }}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <Switch checked={darkMode} onChange={toggleDarkMode} />
      </Toolbar>
    </AppBar>
  );
}
