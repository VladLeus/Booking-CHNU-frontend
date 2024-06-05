import Box from '@mui/material/Box';
import { RoomBoxProps } from '@components/RoomBox/types.ts';
import { FC } from 'react';
import SkeletonLoad from '@modules/SkeletonLoad';

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
        bgcolor: 'background.default',
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
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={icon}
        />
      )}

      <Box
        sx={{
          p: 0,
          // minWidth: { md: 'auto' },
          display: 'flex',
          flexDirection: 'column',
          // maxWidth: '275px',
          width: '275px',
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box
          sx={{
            px: 1.25,
            minWidth: { md: 'auto' },
            display: 'flex',
            flexDirection: 'column',
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
              <Box sx={{ display: 'flex', mt: 0.5, gap: 1 }}>
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
              </Box>
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
        </Box>
      </Box>
    </Box>
  );
};

export default RoomBox;
