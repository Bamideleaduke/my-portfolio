import React, { ChangeEvent } from "react";
import FormControlWrapper from "../FormControlWrapper";
import { ControlType, FormControlBase } from "../FormControl";

interface InputControlProps {
  name: string;
  label?: string;
  value?: string;
  control?: ControlType;
  placeholder?: string;
  helperText?: React.ReactNode;
  maxLength?: number | null;
  number?: boolean;
  alphabet?: boolean;
  disabled?: boolean;
  endAdornment?: React.ReactNode;
  multiline?: boolean;
  rows?: number;
  onChange?: (value: string) => void;
}

const InputControl: React.FC<InputControlProps> = ({ onChange, ...props }) => {

    const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      if (onChange) {
        onChange(e.target.value);  
      }
    };
  return (
    <FormControlWrapper
      name={props.name}
      label={props.label}
      helperText={props.helperText}
    >
      <FormControlBase
        control={props.control ? props.control : "input"}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder || ""}
        maxLength={props.maxLength}
        number={props.number}
        alphabet={props.alphabet}
        multiline={props.multiline}
        rows={props.rows}
        disabled={props.disabled}
        onChange={handleChange}
        InputProps={{
          endAdornment: props.endAdornment,
        }}
        fullWidth={undefined}
      />
    </FormControlWrapper>
  );
};

export default InputControl;
