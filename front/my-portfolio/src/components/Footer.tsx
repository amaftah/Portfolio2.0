import { Typography, Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%', // Full width
        backgroundColor: '#121212', // Dark background
        color: '#fff', // White text
        textAlign: 'center', // Center-align text and icons
        py: 2, // Padding for spacing
        position: 'fixed', // Fix footer at the bottom
        bottom: 0, // Align footer to bottom of the viewport
        left: 0, // Ensure alignment starts from the left edge
      }}
    >
      <Typography variant="body2">
        &copy; 2024 Maftah. All rights reserved.
      </Typography>
      <Box mt={2}>
        <IconButton href="https://github.com/amaftah" target="_blank" sx={{ color: '#fff' }}>
          <GitHub />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/abderrahmane-maftah-0904961a6/" target="_blank" sx={{ color: '#fff' }}>
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
}
