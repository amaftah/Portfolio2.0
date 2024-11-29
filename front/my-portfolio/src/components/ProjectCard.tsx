import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank">Learn More</Button>
      </CardActions>
    </Card>
  );
}
