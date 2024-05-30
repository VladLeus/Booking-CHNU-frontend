import Box from '@mui/material/Box';
import { RoomBoxProps } from '@components/RoomBox/types.ts';
import { FC } from 'react';

const RoomBox: FC<RoomBoxProps> = ({
  icon,
  hotelName,
  city,
  bedNumber,
  roomCategory,
  description,
  price,
}) => {
  const formatedPrice = price.toLocaleString();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: 'background.default',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'clip',
        cursor: 'pointer',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={icon}
      />
      <Box
        sx={{
          p: 0,
          minWidth: { md: 'auto' },
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '275px',
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box
          sx={{
            px: 1.25,
            minWidth: { md: 'auto' },
            display: 'flex',
            flexDirection: 'column',
            gap: 0.4,
          }}
        >
          <Box
            component="span"
            sx={{
              color: 'primary.main',
              fontSize: '1.25rem',
              fontWeight: 'bold',
            }}
          >
            {hotelName}
          </Box>
          <Box
            component="span"
            sx={{
              fontSize: '0.95rem',
              color: 'primary.main',
              textDecoration: 'underline',
              fontWeight: 'medium',
            }}
          >
            {city}
          </Box>
          <Box
            component="span"
            sx={{
              fontSize: '0.875rem',
              color: 'text.secondary',
              fontWeight: 'medium',
            }}
          >
            Beds: {bedNumber}
          </Box>
          <Box
            component="span"
            sx={{
              fontSize: '0.875rem',
              color: 'text.secondary',
              fontWeight: 'medium',
            }}
          >
            Room category: {roomCategory}
          </Box>
          {/*<Box component="span" sx={{ fontSize: '0.875rem', color: 'text.secondary', fontWeight: 'medium' }}>*/}
          {/*  Description: {description}*/}
          {/*</Box>*/}
          <Box sx={{ display: 'flex', mt: 0.5, gap: 1 }}>
            <Box
              component="span"
              sx={{
                fontSize: '0.85rem',
                color: 'text.secondary',
                fontWeight: 'medium',
              }}
            >
              Description:
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '0.85rem',
                color: 'text.secondary',
                fontWeight: 'medium',
              }}
            >
              {description}
            </Box>
          </Box>
          <Box
            component="span"
            sx={{
              color: 'text.primary',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textAlign: 'right',
            }}
          >
            UAH {formatedPrice}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RoomBox;
