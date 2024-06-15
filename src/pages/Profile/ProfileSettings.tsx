import { Divider, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import UserInfo from '@modules/UserInfo';
import UserDataEdit from '@modules/UserDataEdit';
import { useAppSelector } from '@shared/hooks';

const ProfileSettings = () => {
  const { isModalActive } = useAppSelector((state) => state.appState);

  return (
    <>
      <Stack direction="column" gap={1}>
        <Typography
          sx={{
            textAlign: 'left',
            fontWeight: 'bold',
          }}
          color="text.primary"
          variant="h4"
        >
          Особисті дані
        </Typography>

        <Typography
          sx={{
            textAlign: 'left',
            fontWeight: 'medium',
          }}
          color="text.secondary"
          variant="body1"
        >
          Оновіть свою інформацію та дізнайтеся, як вона використовується.
        </Typography>
        <Divider />
      </Stack>

      {!isModalActive ? <UserInfo /> : <UserDataEdit />}
    </>
  );
};

export default ProfileSettings;
