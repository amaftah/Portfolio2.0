import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3,
        transition: '0.3s',
        backgroundColor: '#1e1e1e', // Match Home's card background
        color: '#fff', // White text
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-5px)',
        },
      }}
    >
      {/* Project Image */}
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        sx={{
          height: 180,
          objectFit: 'contain',
          backgroundColor: '#f5f5f5',
        }}
      />

      {/* Project Content */}
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      {/* Action Buttons */}
      <CardActions>
        <Button
          size="small"
          sx={{
            color: '#00FF85', // Accent color
            textTransform: 'uppercase',
          }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  );
}
