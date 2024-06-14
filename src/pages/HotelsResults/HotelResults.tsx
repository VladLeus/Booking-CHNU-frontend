import Stack from '@mui/material/Stack';
import { useAppSelector, useQuery } from '@shared/hooks';
import { Typography } from '@mui/material';
import HotelsResultsGenerator from '@modules/HotelsResultsGenerator/HotelsResultsGenerator.tsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HotelsResults = () => {
  const { hotels } = useAppSelector((state) => state.hotels);
  const query = useQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (hotels.length === 0) {
      navigate('/home');
    }
  }, []);

  return (
    <Stack gap={2} textAlign="center">
      <Typography variant="h4" component="h1">
        Результати пошуку у місті {query.get('city')}
      </Typography>
      <HotelsResultsGenerator />
    </Stack>
  );
};

export default HotelsResults;
