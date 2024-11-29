import { Container, Typography, Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <Container sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="body2">&copy; 2024 Maftah. All rights reserved.</Typography>
      <Box mt={2}>
        <IconButton href="https://github.com/yourusername" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton href="https://linkedin.com/in/yourusername" target="_blank">
          <LinkedIn />
        </IconButton>
        <IconButton href="https://twitter.com/yourusername" target="_blank">
          <Twitter />
        </IconButton>
      </Box>
    </Container>
  );
}
