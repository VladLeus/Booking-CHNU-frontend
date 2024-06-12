import { Divider, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import UserInfo from '@modules/UserInfo';
import { useState } from 'react';
import UserDataEdit from '@modules/UserDataEdit';

const ProfileSettings = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <>
      <Stack direction="column" gap={1} sx={{ mt: 21 }}>
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

      {!isModalActive && <UserInfo handleClick={toggleModal} />}
      {isModalActive && <UserDataEdit />}
    </>
  );
};

export default ProfileSettings;
