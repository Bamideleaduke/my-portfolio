import React from "react";
import { SelectInput, SelectProps } from "./Select";
import { Input, InputProps } from "./Input";
import { Switch, SwitchProps } from "./Switch";

export type ControlType =
  | "input"
  | "select"
  | "switch"
  | "checkboxGroup"
  | "radio"
  | "autocomplete"
  | "telephone"
  | "otp";

export type FormControlBaseProp<Control extends ControlType = ControlType> =
  (Control extends "select"
    ? SelectProps
    : Control extends "switch"
    ? SwitchProps
    : InputProps) & { control: Control; children?: React.ReactNode };

export interface FormControlBaseProps {
  value?: string;
  onChange?: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    child: React.ReactNode
  ) => void;
}

export const FormControlBase: React.FC<FormControlBaseProp> = ({
  control,
  children,
  value,
  ...props
}) => {
  switch (control) {
    case "select":
      return (
        <SelectInput value={value} {...(props as SelectProps)}>
          {children}
        </SelectInput>
      );
    case "switch":
      return <Switch {...(props as SwitchProps)} />;
    default:
      return <Input {...(props as InputProps)} />;
  }
};
