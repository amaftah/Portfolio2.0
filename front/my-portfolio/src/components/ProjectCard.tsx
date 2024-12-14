import { Card, CardContent, CardMedia, Typography, CardActions, Button, } from '@mui/material';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectProps) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: 6,
        },
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={imageUrl}
        alt={title}
        sx={{ filter: 'brightness(90%)', '&:hover': { filter: 'brightness(100%)' } }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 'bold', textAlign: 'center' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: 'justify', lineHeight: 1.5 }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: 'center', borderTop: '1px solid #f0f0f0', padding: '8px 16px' }}
      >
        <Button
          size="small"
          href={link}
          target="_blank"
          variant="contained"
          color="primary"
          sx={{ borderRadius: 4 }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
