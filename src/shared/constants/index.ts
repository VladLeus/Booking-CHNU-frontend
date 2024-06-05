export const patterns = {
  password: new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  ),
};

export const BASE_URL: string = 'http://localhost:3000';
