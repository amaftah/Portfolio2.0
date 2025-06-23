// home_page_cv_based.tsx
import { Container, Typography, Box, Button, Paper, Grid, Chip, Avatar, Divider, Stack } from '@mui/material';
import { Email, LocationOn, Phone, School, Work } from '@mui/icons-material';

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        py: 10,
        px: 4,
        background: 'linear-gradient(135deg, #1b1b2f 0%, #2c2c54 100%)',
        borderRadius: 4,
        boxShadow: 6,
        color: 'white',
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          src="/assets/profile.jpg"
          alt="Abderrahmane Maftah"
          sx={{ width: 160, height: 160, mb: 3, boxShadow: 4, border: '4px solid #fff' }}
        />
        <Typography variant="h2" fontWeight="bold" gutterBottom color="white">
          Abderrahmane Maftah
        </Typography>
        <Typography variant="h5" sx={{ color: '#bbbbdd' }} gutterBottom>
          IT Support Specialist • Front-End Developer • Problem Solver
        </Typography>
        <Typography variant="body1" maxWidth="md" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
          I bridge the gap between users and technology. From building elegant user interfaces to delivering
          precise technical support, I strive to make tech simple, functional, and impactful.
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          href="/projects"
          sx={{ mt: 4, borderRadius: 8, px: 5, py: 1.5, fontSize: '1.1rem' }}
        >
          Explore My Work
        </Button>
      </Box>

      {/* Contact Summary */}
      <Stack direction="row" spacing={2} justifyContent="center" useFlexGap flexWrap="wrap">
        <Chip icon={<LocationOn />} label="Casablanca, Morocco" variant="filled" color="secondary" />
        <Chip icon={<Email />} label="abderrahmanemaftah@outlook.com" variant="filled" color="secondary" />
        <Chip icon={<Phone />} label="+212 613 375 023" variant="filled" color="secondary" />
      </Stack>

      {/* Summary Section */}
      <Paper elevation={3} sx={{ p: 5, borderRadius: 4, background: '#2c2c3c', color: 'white' }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          👋 About Me
        </Typography>
        <Typography variant="body1" lineHeight={1.8}>
          I’m a proactive and adaptable IT support specialist with hands-on experience in technical support, network troubleshooting,
          and front-end development. I’m skilled in Windows/Linux systems, React, Material-UI, Docker, and incident management platforms
          like Jira and ServiceNow. Whether building sleek interfaces or resolving complex issues, I focus on clarity, efficiency,
          and creating delightful user experiences.
        </Typography>
      </Paper>

      {/* Education Section */}
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
          🎓 Education
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            {
              title: 'Full-Stack Web Development – Simplon Socolide',
              year: '2022 – 2023',
            },
            {
              title: 'Common Core in Software Engineering – 1337 UM6P',
              year: '2021',
            },
            {
              title: 'Baccalauréat – Physical Sciences',
              year: '2018',
            },
          ].map((edu, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: '100%', backgroundColor: '#2c2c3c', color: 'white' }}>
                <Typography fontWeight="bold">{edu.title}</Typography>
                <Typography variant="body2" sx={{ color: '#bbbbbb' }}>{edu.year}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Experience Section */}
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
          💼 Experience
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            {
              title: 'E-chat Care Agent – Cnexia ALT',
              year: 'Mar 2024 – Present',
              desc: 'Assist Bell Canada customers via live chat, troubleshooting internet, billing, and setup issues through Citrix-based tools like CSR and ITL.',
            },
            {
              title: 'Technical Support Specialist – Telus Digital',
              year: 'Jun 2023 – Nov 2023',
              desc: 'Provided Tier-1 support for smart home security devices, performed diagnostics, network setup, and collaborated with escalation teams.',
            },
            {
              title: 'Front-End Developer Intern – TE Connectivity',
              year: 'Jun 2023 – Nov 2023',
              desc: 'Built and deployed a React TypeScript front-end for managing lockers. Conducted UI/UX testing with Figma and implemented user feedback.',
            },
          ].map((exp, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: '100%', backgroundColor: '#2c2c3c', color: 'white' }}>
                <Typography fontWeight="bold">{exp.title}</Typography>
                <Typography variant="body2" sx={{ color: '#bbbbbb' }}>{exp.year}</Typography>
                <Typography variant="body2" mt={1}>{exp.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}