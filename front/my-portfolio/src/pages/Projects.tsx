import { Grid, Container } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {projectsData.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
