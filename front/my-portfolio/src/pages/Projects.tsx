import { Grid, Container, Typography, Box } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <Box
      sx={{
        backgroundColor: '#121212', // Dark background like Home
        color: '#fff', // White text
        minHeight: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column', // Stack content vertically
      }}
    >
      {/* Main Content */}
      <Box component="main" sx={{ flex: 1, py: 8 }}>
        <Container maxWidth="lg">
          {/* Page Header */}
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{ color: '#00FF85' }} // Accent color
            >
              My Projects
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ color: '#ccc' }} // Light grey for secondary text
            >
              A selection of projects showcasing my development and design expertise.
            </Typography>
          </Box>

          {/* Projects Grid */}
          <Grid container spacing={4}>
            {projectsData.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  link={project.link}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
