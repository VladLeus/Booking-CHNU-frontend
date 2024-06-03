import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useCallback } from 'react';
import Stack from '@mui/material/Stack';

const GoogleOauth = () => {
  const handleSuccess = useCallback(
    (credentialResponse: CredentialResponse) => {
      if (credentialResponse.credential) {
        const details = jwtDecode(credentialResponse.credential);
        console.log(details);
        console.log(credentialResponse);
      } else {
        console.log('No credential found.');
      }
    },
    [],
  );

  return (
    <GoogleOAuthProvider clientId="974753196563-dm6ink2sj6mv3ojlg034160sev42jkg1.apps.googleusercontent.com">
      <Stack direction="row" justifyItems="center" alignItems="center">
        <GoogleLogin
          theme="filled_blue"
          size="large"
          shape="pill"
          onSuccess={(credentialResponse: CredentialResponse) =>
            handleSuccess(credentialResponse)
          }
          onError={() => console.log('Login Failed!')}
        />
      </Stack>
    </GoogleOAuthProvider>
  );
};

export default GoogleOauth;
