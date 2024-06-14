import StarRoundedIcon from '@mui/icons-material/StarRounded';

export const renderStars = (rating: string) => {
  return Array.from(rating).map((_char, index) => (
    <StarRoundedIcon key={index} />
  ));
};
