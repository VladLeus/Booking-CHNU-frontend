import RegistrationForm from '@modules/RegistrationForm/RegistrationForm.tsx';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const RegistrationPage = () => {
  return (
    <>
      <RegistrationForm />
      <Box maxWidth={600} minWidth={300} sx={{ mx: 'auto' }} textAlign="center">
        <Typography>Here will be Google and X auth</Typography>
      </Box>
    </>
  );
};

export default RegistrationPage;
