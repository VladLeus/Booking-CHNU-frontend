import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { Box } from '@mui/material';

const GoogleOauth = () => {
  return (
    <GoogleOAuthProvider clientId="974753196563-dm6ink2sj6mv3ojlg034160sev42jkg1.apps.googleusercontent.com">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <GoogleLogin
          theme="filled_blue"
          size="large"
          shape="pill"
          onSuccess={credentialResponse => {
            if (credentialResponse.credential) {
              const details = jwtDecode(credentialResponse.credential);
              console.log(details);
              console.log(credentialResponse);
            } else {
              console.log('No credential found.');
            }
          }}
          onError={() => {
            console.log('Login Failed!');
          }}
        />
      </Box>
    </GoogleOAuthProvider>
  )
}

export default GoogleOauth