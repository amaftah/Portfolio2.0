import { Container, Typography, Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <Container
      maxWidth={false}
      sx={{
        mt: 8,
        py: 4,
        backgroundColor: '#1a1a2e',
        color: '#ccc',
        textAlign: 'center',
        borderTop: '1px solid #333',
      }}
    >
      <Typography variant="body2" gutterBottom>
        &copy; {new Date().getFullYear()} Abderrahmane Maftah. All rights reserved.
      </Typography>
      <Box mt={1}>
        <IconButton href="https://github.com/amaftah" target="_blank" sx={{ color: '#bbb' }}>
          <GitHub />
        </IconButton>
        <IconButton href="https://linkedin.com/in/amaftah" target="_blank" sx={{ color: '#bbb' }}>
          <LinkedIn />
        </IconButton>
        <IconButton href="https://twitter.com/amaftah" target="_blank" sx={{ color: '#bbb' }}>
          <Twitter />
        </IconButton>
      </Box>
    </Container>
  );
}