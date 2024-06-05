import { Typography } from '@mui/material';
import ResetTokenCheck from '@modules/ResetTokenCheck';

const ResetTokenCheckPage = () => {
  return (
    <>
      <Typography variant="h3" fontWeight="bold" component="h1">
        Check
      </Typography>
      <ResetTokenCheck />
    </>
  );
};

export default ResetTokenCheckPage;
