import { Box } from '@mui/material';
import { HotelImageBoxProps } from '@components/HotelImageBox/types.ts';
import { FC } from 'react';
import SkeletonLoad from '@modules/SkeletonLoad';

const HotelImageBox: FC<HotelImageBoxProps> = ({
  icon,
  hotelName,
  country,
  place,
  point,
  rating,
  reviews,
  price,
  isLoading,
}) => {
  const formatedPrice = price.toLocaleString();

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
            height={186.4}
            width={280}
          />
        ) : (
          <Box
            component="img"
            sx={{
              height: 186.4,
              width: 280,
            }}
            alt="The house from the offer."
            src={icon}
          />
        )}

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
            {isLoading ? (
              <>
                <SkeletonLoad
                  variant="text"
                  animation="wave"
                  height={'auto'}
                  width={'80%'}
                />
                <SkeletonLoad
                  variant="text"
                  animation="wave"
                  height={'auto'}
                  width={'60%'}
                />
                <Box sx={{ display: 'flex', mt: 0.5, gap: 1 }}>
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
                    width={'20%'}
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
                  width={'50%'}
                />
              </>
            ) : (
              <>
                <Box
                  component="span"
                  sx={{
                    fontSize: '1rem',
                    color: 'text.primary',
                    fontWeight: 'bold',
                  }}
                >
                  {hotelName}
                </Box>
                <Box
                  component="span"
                  sx={{
                    fontSize: '0.85rem',
                    color: 'text.secondary',
                    fontWeight: 'medium',
                  }}
                >
                  {country}, {place}
                </Box>
                <Box sx={{ display: 'flex', mt: 0.5, gap: 1 }}>
                  <Box
                    component="span"
                    sx={{
                      fontSize: '0.9rem',
                      px: 0.5,
                      color: 'white',
                      fontWeight: 'medium',
                      backgroundColor: 'rgba(0, 58, 150, 0.8)',
                      borderRadius: 1,
                    }}
                  >
                    {point}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: '0.85rem',
                      color: 'text.primary',
                      fontWeight: 'medium',
                    }}
                  >
                    {rating}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: '0.85rem',
                      color: 'text.secondary',
                      fontWeight: 'medium',
                    }}
                  >
                    відгуки: {reviews}
                  </Box>
                </Box>
                <Box
                  component="span"
                  sx={{
                    color: 'text.primary',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    textAlign: 'right',
                    letterSpacing: 0.4,
                  }}
                >
                  UAH {formatedPrice}
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HotelImageBox;
