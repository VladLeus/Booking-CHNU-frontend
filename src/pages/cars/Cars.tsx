import LabelCheckBox from '@ui/LabelCheckBox/LabelCheckBox.tsx';
import Box from '@mui/material/Box';

export function Cars() {
  return (
    <>
      <h2>Cars Page</h2>
      <p>Here you can find information about cars.</p>
      <Box>
        <LabelCheckBox label="Залишити автомобіль в іншому пункті прокату" />
        <LabelCheckBox label="Водій віком від 30 до 65?" />
      </Box>
    </>
  );
}
