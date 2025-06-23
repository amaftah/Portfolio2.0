import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Box,
  Paper,
} from '@mui/material';

const skills = [
  'React',
  'TypeScript',
  'Material-UI',
  'Figma',
  'Git',
  'Excel',
  'Power BI',
  'ServiceNow',
];

const projects = [
  {
    title: 'Locker Management App',
    description:
      'Developed a responsive React/TypeScript front-end for managing lockers. Designed with Figma and implemented based on usability testing.',
    imageUrl: '/assets/locker-app.jpg',
    link: '#',
  },
  {
    title: 'Customer Support Automation',
    description:
      'Created a script-based automation system to reduce handling time for recurring smart home technical issues at Telus.',
    imageUrl: '/assets/support-automation.jpg',
    link: '#',
  },
  {
    title: 'KPI Dashboard with Excel & Google Sheets',
    description:
      'Built dashboards using Excel/Google Sheets & scripting to track quality, efficiency, and team performance across months.',
    imageUrl: '/assets/kpi-dashboard.jpg',
    link: '#',
  },
];

export default function Projects() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 10,
        color: 'white',
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom textAlign="center">
        🚀 Projects
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {projects.map((project, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card sx={{ backgroundColor: '#2c2c3c', color: 'white', borderRadius: 3 }}>
              <CardMedia component="img" height="180" image={project.imageUrl} alt={project.title} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="#ccc">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href={project.link}
                  target="_blank"
                  sx={{ color: 'lightblue' }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={10}>
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
          🧠 Skills & Technologies
        </Typography>
        <Paper elevation={2} sx={{ p: 3, backgroundColor: '#2c2c3c', textAlign: 'center' }}>
          {skills.map((skill, i) => (
            <Chip
              key={i}
              label={skill}
              sx={{ m: 1, backgroundColor: '#3c3c50', color: 'white' }}
            />
          ))}
        </Paper>
      </Box>
    </Container>
  );
}