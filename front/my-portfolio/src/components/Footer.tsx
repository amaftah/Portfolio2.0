import { Container, Typography, Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%', // Full width of the viewport
        backgroundColor: '#333', // Dark background color
        color: '#fff', // White text color
        textAlign: 'center', // Center-align text and icons
        py: 2, // Padding on top and bottom
        position: 'relative', // Adjust to 'fixed' or 'absolute' if needed
        bottom: 0, // Position footer at the bottom
      }}
    >
      <Typography variant="body2">
        &copy; 2024 Maftah. All rights reserved.
      </Typography>
      <Box mt={2}>
        <IconButton href="https://github.com/yourusername" target="_blank" sx={{ color: '#fff' }}>
          <GitHub />
        </IconButton>
        <IconButton href="https://linkedin.com/in/yourusername" target="_blank" sx={{ color: '#fff' }}>
          <LinkedIn />
        </IconButton>
        <IconButton href="https://twitter.com/yourusername" target="_blank" sx={{ color: '#fff' }}>
          <Twitter />
        </IconButton>
      </Box>
    </Box>
  );
}
