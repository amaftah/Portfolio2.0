import { Container, Typography, Box, Button } from '@mui/material';

export default function Home() {
  return (
    <Container sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h2" gutterBottom>Abderrahmane Maftah</Typography>
      <Typography variant="h5" paragraph>
        I'm a [Software Engenier] specializing in [React Ts].
      </Typography>
      <Button variant="contained" color="primary" href="/projects">
        See My Work
      </Button>
    </Container>
  );
}
