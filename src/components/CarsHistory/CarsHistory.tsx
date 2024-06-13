import { CarsHistoryProps } from '@components/CarsHistory/types.ts';
import { FC } from 'react';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

const CarsHistory: FC<CarsHistoryProps> = ({
  id,
  car_id,
  start_date,
  end_date,
}) => {
  return (
    <>
      <Box
        sx={{
          height: 'auto',
          width: 280,
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.default',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          overflow: 'clip',
          cursor: 'pointer',
        }}
      >
        <Stack
          flexDirection={'column'}
          sx={{
            minWidth: '280px',
            gap: 0.3,
          }}
        >
          <Stack flexDirection={'column'} sx={{ px: 1, gap: 0.3 }}>
            <Box
              component="span"
              sx={{
                fontSize: '1rem',
                color: 'text.primary',
                fontWeight: 'bold',
              }}
            >
              Номер бронювання: {id}
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '0.85rem',
                color: 'text.primary',
                fontWeight: 'medium',
              }}
            >
              Номер машини: {car_id}
            </Box>
            <Stack sx={{ mt: 0.5, gap: 0.4 }}>
              <Box
                component="span"
                sx={{
                  fontSize: '0.9rem',
                  color: 'text.primary',
                  fontWeight: 'medium',
                }}
              >
                Початок: {start_date}
              </Box>
              <Box
                component="span"
                sx={{
                  fontSize: '0.9rem',
                  color: 'text.primary',
                  fontWeight: 'medium',
                }}
              >
                Завершення: {end_date}
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default CarsHistory;
