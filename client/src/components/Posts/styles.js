import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Align items in the center
    flexDirection: 'column', // Stack items vertically
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Shrink to 250px minimum width and 1fr maximum width
    gap: theme.spacing(3), // Space between grid items
    justifyContent: 'center', // Align items in the center
    width: '100%', // Ensure container spans the full width
  },
  post: {
    position: 'relative',
    background: 'linear-gradient(145deg, #f0f0f0, #e0e0e0)', // Light gradient effect
    padding: theme.spacing(2),
    borderRadius: 10,
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.3)', // 3D shadow effect
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for transform and shadow
    '&:hover': {
      transform: 'translateY(-10px)', // Hover effect: Lift the element up
      boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.2), -10px -10px 30px rgba(255, 255, 255, 0.5)', // Enhanced shadow on hover
    },
    '&:active': {
      transform: 'translateY(-2px)', // Slightly reduce lift when clicked
    },
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
}));
