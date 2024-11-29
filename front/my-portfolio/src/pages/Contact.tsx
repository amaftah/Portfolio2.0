import { Container, TextField, Button, Typography, Box } from '@mui/material';

export default function Contact() {
  return (
    <Container sx={{ py: 8, maxWidth: 'sm' }}>
      <Typography variant="h4" gutterBottom textAlign="center">Contact Me</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Your Name" variant="outlined" fullWidth required />
        <TextField label="Your Email" variant="outlined" fullWidth required />
        <TextField label="Message" variant="outlined" multiline rows={4} fullWidth required />
        <Button variant="contained" color="primary" size="large" sx={{ alignSelf: 'center' }}>
          Send Message
        </Button>
      </Box>
    </Container>
  );
}
