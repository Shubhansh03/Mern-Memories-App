import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9 aspect ratio
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.1), -5px -5px 20px rgba(255, 255, 255, 0.3)', // Initial shadow for 3D effect
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effects
    '&:hover': {
      transform: 'translateY(-10px)', // Lift up the card when hovered
      boxShadow: '15px 15px 40px rgba(0, 0, 0, 0.2), -15px -15px 40px rgba(255, 255, 255, 0.5)', // Stronger shadow on hover
    },
    '&:active': {
      transform: 'translateY(-2px)', // Slightly reduce lift when clicked
    },
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
    fontWeight: 'bold',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
