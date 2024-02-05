import React, { ReactNode } from "react";
import { Field, FieldProps } from "formik";
import {
  Box,
  FormControl,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import {
  currencyInputFormatter,
  percentageInputFormatter,
} from "../../../utils/helper/input-formatter";
import { Colors } from "../../../constants/colors";

export type InputProps = TextFieldProps & {
  name: string;
  children?: ReactNode;
  currency?: boolean;
  percentage?: boolean;
  ratio?: boolean;
  number?: boolean;
  alphabet?: boolean;
  extraLeft?: ReactNode;
  extraRight?: ReactNode;
  showErrorMessage?: boolean;
  maxLength: number | null;
  multiline: boolean;
  rows: number;
};
export const numberRegex = /(?:\b0(?:\.0*|$))|[^\d]/g;
export const AlphabetRegex = /[^a-zA-Z\s]+/g;

export const Input: React.FC<InputProps> = ({
  extraLeft,
  percentage,
  extraRight,
  currency,
  ratio,
  number,
  alphabet,
  multiline,
  rows,
  //   showErrorMessage = true,
  maxLength,
  ...props
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    form: FieldProps["form"]
  ) => {
    const target = e.target as HTMLInputElement;
    let input = target.value;

    if (alphabet) {
      input = input?.replace(AlphabetRegex, "");
    }
    if (number) {
      input = input?.replace(numberRegex, "");
    }
    if (currency) {
      const { currency: formattedCurrency } = currencyInputFormatter(
        e.target.value
      );
      input = formattedCurrency;
    }

    if ((percentage || ratio) && e.nativeEvent instanceof InputEvent) {
      const inputEvent = e.nativeEvent as InputEvent;
      const inputValue = inputEvent.data;

      if (inputValue) {
        const { percentage: percentageValue, ratio: ratioValue } =
          percentageInputFormatter(e.target.value);
        const input = percentage ? percentageValue : ratioValue;
        e.target.value = input;
      }
    }

    form.handleChange(e);
    props?.onChange?.(e);
    form.setFieldValue(props.name, input);
  };

  return (
    <Field name={props.name}>
      {({ field, form }: FieldProps) => {
        return (
          <Box display="flex" alignItems="end">
            {extraLeft && <Typography mr={1}>{extraLeft}</Typography>}
            <FormControl fullWidth>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    // borderColor: field.value ? Colors.Primary : "inherit",
                    borderColor: Colors.Grundge,
                    boxShadow: field.value
                      ? "0px 0px 4px 2px #EC7E8140"
                      : "inherit",
                  },
                }}
                multiline={multiline ?? multiline}
                rows={rows}
                id={props.name}
                {...props}
                {...field}
                label={props.label && props.placeholder}
                onChange={(e) => handleChange(e, form)}
                type={props.type ?? "text"}
                error={!!(form.errors[props.name] && form.touched[props.name])}
                inputProps={{
                  autoComplete: "off",
                  maxLength: maxLength,
                  ...props.inputProps,
                }}
              />
            </FormControl>
            {extraRight && <Typography ml={1}>{extraRight}</Typography>}
          </Box>
        );
      }}
    </Field>
  );
};

interface FormAllowProps {
  NUMBER: string;
}
export const FORM_ALLOWED: FormAllowProps = {
  NUMBER: "number",
};

export const UncontrolledInput: React.FC<InputProps> = (props) => {
  return (
    <FormControl fullWidth>
      <TextField
        variant="filled"
        disabled
        id={props.name}
        {...props}
        label={props.label && props.placeholder}
        type={props.type ?? "text"}
      />
    </FormControl>
  );
};
