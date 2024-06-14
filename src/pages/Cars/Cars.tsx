import CarsListCheck from '@modules/CarsListCheck';
import { Alert, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const Cars = () => {
  return (
    <Stack gap={2} textAlign="center">
      <Typography variant="h4" component="h1" fontWeight="bold">
        Шукаєте транспорт?
      </Typography>
      <Typography>
        Наша компанія надає широкий спектр машин для бронювання.
      </Typography>
      <Alert severity="warning">
        Зазначаємо, що машини доступні для бронювання лише в областних центрах
        та містах мільйонниках, що нє в окупації
      </Alert>
      <CarsListCheck />
    </Stack>
  );
};

export default Cars;
