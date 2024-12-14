import { Container, Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';
import pic from '../data/pic.png';

export default function Home() {
  return (
    <Box sx={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh', py: 8 }}>
      {/* Header Section */}
      <Container
        sx={{
          textAlign: 'center',
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Hi There!
        </Typography>

        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#00FF85' }}
        >
          I am Abderrahmane Maftah
        </Typography>

        <Typography variant="h5" paragraph>
          Data-driven professional with expertise in technical support, IT systems, and web development.
        </Typography>

        <Button
          variant="contained"
          color="success"
          href="contact"
          sx={{ mt: 4, backgroundColor: '#00FF85' }}
        >
          Contact Me
        </Button>

        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
          <Typography>Email: abderrahmanemaftah@outlook.com</Typography>
          <Typography>Phone: +212613375023</Typography>
          <Typography>Location: Casablanca, Morocco</Typography>
        </Box>
      </Container>

      {/* About Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
           

              <Box
                component="img"
                src={pic}
                alt="Profile Picture"
                sx={{ width: '100%', borderRadius: 2 }}
              />

          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ color: '#00FF85' }}>
              Who am I?
            </Typography>

            <Typography variant="h6" gutterBottom>
              I&apos;m Abderrahmane Maftah, a Technical Support Specialist passionate about data analysis, web development, and UI/UX design.
            </Typography>

            <Typography variant="body1" paragraph>
              With a strong background in <strong>React TS</strong>, <strong>Material-UI</strong>, and <strong>PowerBI</strong>, I specialize in creating user-centric applications and delivering actionable insights.
            </Typography>

            <Button
              variant="contained"
              color="success"
              href="Projects"
              sx={{ backgroundColor: '#00FF85' }}
            >
              Projects
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Services Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: 'center', fontWeight: 'bold', color: '#00FF85' }}
        >
          My Services
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            { title: 'Data Analysis', description: 'Providing actionable insights using PowerBI and advanced Excel techniques.' },
            { title: 'Web Development', description: 'Building scalable and modern web applications with React TS and Material-UI.' },
            { title: 'UI/UX Design', description: 'Creating user-centered prototypes and improving user experiences with Figma.' },
            { title: 'Technical Support', description: 'Delivering fast issue resolution and enhancing customer satisfaction.' },
            { title: 'IT Systems', description: 'Streamlining configurations and managing IT projects effectively.' },
            { title: 'Branding & Marketing', description: 'Helping businesses establish their identity and improve reach.' },
          ].map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
