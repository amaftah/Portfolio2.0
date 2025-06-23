import { AppBar, Toolbar, Typography, Switch, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';

type Props = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function Navbar({ darkMode, setDarkMode }: Props) {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#1a1a2e',
        color: '#f5f5f5',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        zIndex: 1301,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
        >
          Abderrahmane Maftah
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['/', '/projects', '/contact'].map((route) => (
              <Typography
                key={route}
                component={Link}
                to={route}
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  px: 1,
                  py: 0.5,
                  borderRadius: 2,
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    textDecoration: 'none',
                  },
                }}
              >
                {route === '/' ? 'Home' : route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
              </Typography>
            ))}
          </Box>

          <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}