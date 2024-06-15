import { FC } from 'react';
import { RoomDetailTextProps } from '@components/RoomDetailText/types.ts';
import { Box, Divider, Typography } from '@mui/material';

const RoomDetailText: FC<RoomDetailTextProps> = ({
  imageUrl,
  roomCategory,
  adults,
  beds,
  description,
  price,
}) => {
  return (
    <Box>
      <Box
        component="img"
        sx={{
          height: 350,
          width: 480,
          mx: 2,
          borderRadius: 4,
        }}
        alt="The house from the offer."
        src={imageUrl}
      />
      <Typography>Категорія кімнати: {roomCategory} </Typography>
      <Typography>Кількість людей: {adults}</Typography>
      <Typography>Кількість ліжок: {beds}</Typography>
      <Typography>Опис: {description}</Typography>
      <Typography>Ціна за ніч: {price} UAH</Typography>
      <Divider sx={{ width: '100%' }}>Забронювати кімнату</Divider>
    </Box>
  );
};

export default RoomDetailText;
