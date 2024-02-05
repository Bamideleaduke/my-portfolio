import React from 'react';
import { FormControlBase } from '../FormControl';
import FormControlWrapper from '../FormControlWrapper';
import { OptionProp } from '../Select';

interface InputControlProps {
  name: string;
  label: string;
  placeholder?: string;
  options: OptionProp[];
  value?: string;               
  onChange?: (e: React.ChangeEvent<HTMLSelectElement|unknown>, child: React.ReactNode) => void; 
  fullWidth?: boolean;
}
const SelectControl: React.FC<InputControlProps> = (props) => {
  return (
    <FormControlWrapper name={props.name} label={props.label}>
      <FormControlBase
        control="select"
        name={props.name}
        placeholder={props.placeholder}
        options={props.options}
        value={props.value}        
        onChange={props.onChange}  
        fullWidth={props.fullWidth}
      />
    </FormControlWrapper>
  );
};

export default SelectControl;
