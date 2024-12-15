import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';

export default function Contact() {
  return (
    <Box
      sx={{
        backgroundColor: '#121212', // Dark background like Home
        color: '#fff', // White text
        minHeight: '100vh', // Full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 6,
          borderRadius: 4,
          maxWidth: 700,
          width: '100%',
          backgroundColor: '#1e1e1e', // Match Home's card background
          color: '#fff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Header */}
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{
            fontWeight: 'bold',
            color: '#00FF85', // Accent color
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
            color: '#ccc', // Light grey for secondary text
          }}
        >
          Feel free to reach out. I'll respond as soon as possible!
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
              sx: {
                borderRadius: 2,
                backgroundColor: '#2c2c2c', // Darker input field
                color: '#fff',
              },
            }}
            InputLabelProps={{
              sx: { color: '#aaa' }, // Label color
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
              sx: {
                borderRadius: 2,
                backgroundColor: '#2c2c2c',
                color: '#fff',
              },
            }}
            InputLabelProps={{
              sx: { color: '#aaa' },
            }}
          />

          {/* Phone Number Field */}
          <TextField
            label="Your Phone (Optional)"
            type="tel"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                borderRadius: 2,
                backgroundColor: '#2c2c2c',
                color: '#fff',
              },
            }}
            InputLabelProps={{
              sx: { color: '#aaa' },
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
              sx: {
                borderRadius: 2,
                backgroundColor: '#2c2c2c',
                color: '#fff',
              },
            }}
            InputLabelProps={{
              sx: { color: '#aaa' },
            }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              mt: 2,
              backgroundImage: 'linear-gradient(to right, #00FF85, #00E676)',
              color: '#121212',
              fontSize: '1rem',
              borderRadius: 2,
              '&:hover': {
                backgroundImage: 'linear-gradient(to right, #00E676, #00C853)',
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
