import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)', // Soft shadow effect
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', // Stack items vertically on small screens
    },
  },
  heading: {
    color: 'purple', // Set the heading color to purple
    '&:hover': {
      color: 'darkpurple', // Change to dark purple on hover (you can use the actual color code if needed)
      cursor: 'pointer', // Show pointer cursor on hover
    },
  },
  image: {
    marginLeft: '15px',
    width: '40px', // Specific width for image
    height: '40px', // Specific height for image
  },
}));
