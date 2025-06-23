import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from '@mui/material';

export default function Contact() {
  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          backgroundColor: '#2c2c3c',
          color: 'white',
          borderRadius: 4,
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
      >
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          📬 Get In Touch
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="#bbb"
          sx={{ mb: 4 }}
        >
          Have a question, job offer, or just want to say hi? Feel free to reach out!
        </Typography>

        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            required
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ borderRadius: 3 }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}