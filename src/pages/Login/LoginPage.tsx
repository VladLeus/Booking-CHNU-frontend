import LoginForm from '@modules/LoginForm';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';

export function LoginPage() {
  return (
    <>
      <LoginForm />
      <Divider sx={{ width: 400, mt: -2 }}>
        <Typography color="textSecondary" variant="body2">
          Or use next to authorize
        </Typography>
      </Divider>
      <Box>
        <Typography>Here will be Google and X auth</Typography>
      </Box>
    </>
  );
}
