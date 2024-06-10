import GetHotelsForm from '@modules/GetHotelsForm';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const Home = () => {
  return (
    <Stack gap={2}>
      <Typography variant="h4" component="h1">
        Вітаємо, почнемо подорожувати?
      </Typography>
      <GetHotelsForm />
    </Stack>
  );
};

export default Home;
