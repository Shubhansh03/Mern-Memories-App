import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    borderRadius: 10,
    background: '#2e2e2e',  // Dark background for the form
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    color: '#ffffff',
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
  },
  textField: {
    marginBottom: theme.spacing(2),
    '& .MuiInputBase-root': {
      color: '#ffffff',  // White text color for input field
      backgroundColor: '#3c3c3c',  // Dark background for input
    },
    '& .MuiInputLabel-root': {
      color: '#ffffff',  // White label color
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ffffff',  // White border color
      },
      '&:hover fieldset': {
        borderColor: '#ffffff',  // White border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ffffff',  // White border color when focused
      },
    },
    '& .MuiInputBase-input': {
      color: '#ffffff',  // Text color inside the input field
    },
    '& .MuiInputBase-input::placeholder': {
      color: '#bbb',  // Light gray color for placeholder text
    },
  },
  buttonSubmit: {
    marginTop: theme.spacing(3),
    backgroundColor: '#007BFF',  // Blue color for submit button
    color: '#fff',  // White text on submit button
    '&:hover': {
      backgroundColor: '#0056b3',  // Darker blue when hovered
    },
  },
  animatedButton: {
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',  // Slight scale effect on hover
    },
  },
  input: {
    color: '#ffffff',  // Ensures input text color is white
  },
  fileInput: {
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),  // This will create space between buttons
    marginTop: theme.spacing(3),  // Adding margin between the form and buttons
  },
}));

export default useStyles;
