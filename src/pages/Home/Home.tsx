import GetHotelsForm from '@modules/GetHotelsForm';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import HotelsResultsGenerator from '@modules/HotelsResultsGenerator/HotelsResultsGenerator.tsx';

const Home = () => {
  return (
    <Stack gap={2}>
      <Typography variant="h4" component="h1">
        Вітаємо, почнемо подорожувати?
      </Typography>
      <GetHotelsForm />
      <HotelsResultsGenerator />
    </Stack>
  );
};

export default Home;
