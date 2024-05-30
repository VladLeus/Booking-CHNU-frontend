import { FC } from 'react';
import { ApartmentBoxProps } from '@components/ApartmentBox/types.ts';
import { Box } from '@mui/material';
// import * as dayjs from "dayjs"

const ApartmentBox: FC<ApartmentBoxProps> = ({
  icon,
  type,
  dateRange,
  availability,
}) => {
  // const dateRangeString = `${dayjs(dateRange[0]).format('DD/MM/YYYY')} - ${dayjs(dateRange[1]).format('DD/MM/YYYY')}`;

  return (
    <>
      <Box
        sx={{
          //display: 'flex',
          height: 'auto',
          width: 280,
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.default',
          border: '1px solid',
          borderColor: 'transparent',
          borderRadius: 2,
          overflow: 'clip',
          cursor: 'pointer',
        }}
      >
        <Box
          component="img"
          sx={{
            height: 186.4,
            width: 280,
          }}
          alt="The house from the offer."
          src={icon}
        />
        <Box
          sx={{
            // p: 2,
            minWidth: '280px',
            display: 'flex',
            flexDirection: 'column',
            gap: 0.3,
          }}
        >
          <Box
            sx={{ px: 1, display: 'flex', flexDirection: 'column', gap: 0.3 }}
          >
            <Box
              component="span"
              sx={{
                fontSize: '1rem',
                color: 'text.primary',
                fontWeight: 'bold',
              }}
            >
              {type}
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '0.85rem',
                color: 'text.secondary',
                fontWeight: 'medium',
              }}
            >
              {dateRange}
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '0.85rem',
                color: 'text.secondary',
                fontWeight: 'medium',
              }}
            >
              Доступно: {availability}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ApartmentBox;
