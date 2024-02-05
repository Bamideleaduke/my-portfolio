import {
  FormControl,
  Select,
  SelectProps as MuiSelectProps,
  styled,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Field, FieldProps } from "formik";
import { Colors } from "../../../constants/colors";

const StyledSelect = styled(Select)(({ value }) => ({
  "& .MuiOutlinedInput-input": { padding: "10px 15px" },
  "& .MuiSelect-icon": { fontSize: "30px" },
  "& fieldset": {
    // borderColor: value ? `${Colors.Primary} !important` : 'inherit',
    borderColor: `${Colors.Grundge} !important`,
    boxShadow: value ? "0px 0px 4px 2px #EC7E8140" : "inherit",
  },
}));

export interface OptionProp {
  value: string;
  key: string;
}
export interface SelectProps extends MuiSelectProps {
  name: string;
  padding?: string;
  options: OptionProp[];
  placeholder: string;
  onChange?: (
    e: SelectChangeEvent<HTMLSelectElement | unknown>,
    child: React.ReactNode
  ) => void;
  fullWidth?: boolean;
  maxLength?: number | null;
  number?: boolean;
   alphabet?: boolean;
}

export const SelectInput: React.FC<SelectProps> = ({
  options,
  placeholder,
  fullWidth,
  ...props
}) => {
  return (
    <Field name={props.name}>
      {({ field, form }: FieldProps) => {
        return (
          <FormControl fullWidth={fullWidth}>
            <StyledSelect
              {...props}
              {...field}
              onChange={(event) => {
                props?.onChange?.(event, props.children);
                field?.onChange?.(event);
              }}
              value={field.value ?? ""}
              defaultValue={props.defaultValue ?? ""}
              displayEmpty
              inputProps={{ id: props.name }}
              error={!!(form.errors[props.name] && form.touched[props.name])}
              renderValue={(value: HTMLSelectElement | unknown) =>
                value ? (
                  (value as string)
                ) : (
                  <SelectPlaceholder text={placeholder} />
                )
              }
            >
              {options.map((option: OptionProp) => (
                <MenuItem
                  value={option.value}
                  key={option.value}
                  disabled={option.value === "" ? true : false}
                >
                  {option.key}
                </MenuItem>
              ))}
            </StyledSelect>
            {/* <ErrorMessage
                  name={props.name}
                  children={(error: string) => (
                    <InputErrorText errorText={error} />
                  )}
                /> */}
          </FormControl>
        );
      }}
    </Field>
  );
};

interface PlaceholderProp {
  text: string;
}

export const SelectPlaceholder: React.FC<PlaceholderProp> = ({ text }) => {
  return <span style={{ color: "lightgrey" }}>{text}</span>;
};
