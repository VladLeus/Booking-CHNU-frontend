import { Checkbox, FormControlLabel } from '@mui/material';
import { FC } from 'react';

export interface LabelCheckBoxProps {
  label: string;
}

const LabelCheckBox: FC<LabelCheckBoxProps> = ({ label }) => {
  return <FormControlLabel control={<Checkbox />} label={label} />;
};

export default LabelCheckBox;
