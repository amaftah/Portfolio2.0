import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';

export default function Contact() {
  return (
    <Container
      sx={{
        py: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4', // Light background for the page
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 6,
          borderRadius: 4,
          maxWidth: 700,
          width: '100%',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Header */}
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{
            fontWeight: 'bold',
            color: '#2196F3',
            textTransform: 'uppercase',
            mb: 3,
          }}
        >
          Get In Touch
        </Typography>

        {/* Subheading */}
        <Typography
          variant="body1"
          textAlign="center"
          sx={{
            mb: 4,
            color: '#555',
          }}
        >
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Typography>

        {/* Form */}
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          {/* Name Field */}
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            required
            InputProps={{
              sx: { borderRadius: 2 },
            }}
          />

          {/* Email Field */}
          <TextField
            label="Your Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            InputProps={{
              sx: { borderRadius: 2 },
            }}
          />

          {/* Phone Number Field */}
          <TextField
            label="Your Phone (Optional)"
            type="tel"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: { borderRadius: 2 },
            }}
          />

          {/* Message Field */}
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={5}
            fullWidth
            required
            InputProps={{
              sx: { borderRadius: 2 },
            }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              mt: 2,
              backgroundImage: 'linear-gradient(to right, #1976D2, #64B5F6)',
              color: '#fff',
              fontSize: '1rem',
              borderRadius: 2,
              '&:hover': {
                backgroundImage: 'linear-gradient(to right, #1565C0, #42A5F5)',
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
