import GetHotelsForm from '@modules/GetHotelsForm';
import { Alert, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const Home = () => {
  return (
    <Stack gap={2} textAlign="center" justifySelf="flex-start">
      <Typography variant="h4" component="h1" fontWeight="bold">
        Вітаємо, почнемо подорожувати?
      </Typography>
      <Alert severity="warning">
        Просимо зазначити, що наш сервіс працює лише на території України!
      </Alert>
      <GetHotelsForm />
    </Stack>
  );
};

export default Home;
