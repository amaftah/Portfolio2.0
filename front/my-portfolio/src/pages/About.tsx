import { Container, Typography, Box, Avatar } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ py: 8 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar alt="Your Name" src="/path/to/your-photo.jpg" sx={{ width: 150, height: 150, mb: 3 }} />
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography variant="body1" textAlign="center">
          Hi, I'm [Your Name], a passionate [Your Role] with experience in [skills]. I specialize in [specialty areas].
        </Typography>
      </Box>
    </Container>
  );
}
