import { Container, Typography, Box, Avatar } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ py: 8 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar alt="Your Name" src="/path/to/your-photo.jpg" sx={{ width: 150, height: 150, mb: 3 }} />
         <Typography variant="h2" gutterBottom>
        Abderrahmane Maftah
      </Typography>
      
      <Typography variant="h5" paragraph>
        I&apos;m a <strong>Software Engineer</strong> specializing in <strong>React and TypeScript</strong>.
      </Typography>

      <Typography variant="body1" paragraph>
        Currently, I&apos;m working as a <strong>Technical Support Specialist</strong> at <strong>Telus Digital</strong>.
      </Typography>

      <Typography variant="body1" paragraph>
        I&apos;m passionate about <strong>Software Development</strong>, <strong>UI/UX Design</strong>, and <strong>Open Source</strong>.
      </Typography>

      <Typography variant="body1" paragraph>
        I&apos;m always looking for new opportunities to learn and grow. Let&apos;s connect!
      </Typography>
      

      </Box>
    </Container>
  );
}
