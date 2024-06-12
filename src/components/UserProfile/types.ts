export interface UserProfileProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  birthdate: string;
  gender: 'Чоловік' | 'Жінка' | 'Інше';
}
