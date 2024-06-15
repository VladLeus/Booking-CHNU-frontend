import Box from '@mui/material/Box';
import { RoomBoxProps } from '@components/RoomBox/types.ts';
import { FC } from 'react';
import SkeletonLoad from 'components/SkeletonLoad';
import Stack from '@mui/material/Stack';

const RoomBox: FC<RoomBoxProps> = ({
  icon,
  hotelName,
  city,
  bedNumber,
  roomCategory,
  description,
  price,
  isLoading,
}) => {
  const formatedPrice = price.toLocaleString();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        backgroundColor: 'background.default',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'clip',
        cursor: 'pointer',
      }}
    >
      {isLoading ? (
        <SkeletonLoad
          variant="rectangular"
          animation="wave"
          height={167}
          width={250}
        />
      ) : (
        <Box
          component="img"
          sx={{
            height: 220,
            width: 350,
            mx: 2,
            borderRadius: 4,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={icon}
        />
      )}

      <Stack
        flexDirection={'column'}
        sx={{
          p: 0,
          width: '275px',
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Stack
          flexDirection={'column'}
          sx={{
            px: 1.25,
            minWidth: { md: 'auto' },
            width: '260px',
            gap: 0.4,
          }}
        >
          {isLoading ? (
            <>
              <SkeletonLoad
                variant="text"
                animation="wave"
                height={'auto'}
                width={'40%'}
              />
              <SkeletonLoad
                variant="text"
                animation="wave"
                height={'auto'}
                width={'34%'}
              />
              <SkeletonLoad
                variant="text"
                animation="wave"
                height={'auto'}
                width={'20%'}
              />
              <SkeletonLoad
                variant="text"
                animation="wave"
                height={'auto'}
                width={'70%'}
              />
              <Stack sx={{ mt: 0.5, gap: 1 }}>
                <SkeletonLoad
                  variant="text"
                  animation="wave"
                  height={'auto'}
                  width={'30%'}
                />
                <SkeletonLoad
                  variant="text"
                  animation="wave"
                  height={'auto'}
                  width={'40%'}
                />
              </Stack>
              <SkeletonLoad
                variant="text"
                animation="wave"
                height={'auto'}
                width={'30%'}
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default RoomBox;
