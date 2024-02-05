import React, { useContext } from "react";
import { Context } from "./wrapper/Wrapper";
import { Box } from "@mui/material";
import SelectControl from "./shared/form/controls/SelectControl";
import { Formik, Form } from "formik";

const LanguageSelection = () => {
  const LanguageOptions = [
    { key: "English", value: "en-US" },
    { key: "Spanish", value: "es-MX" },
    { key: "India", value: "en-IN" },
  ];
  const context = useContext(Context);
  return (
    <>
      <Formik
        initialValues={{ language: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Box sx={{ marginRight: "1rem" }}>
            <SelectControl
              name="language"
              label=""
              placeholder="Language"
              value={context.locale}
              onChange={context.selectLang}
              options={LanguageOptions}
            />
          </Box>
        </Form>
      </Formik>
      {/* <Box sx={{ marginRight: "1rem" }}>
        <select value={context.locale} onChange={context.selectLang}>
          <option value="en-US">English</option>
          <option value="es-MX">Spanish</option>
          <option value="en-IN">India</option>
        </select>
      </Box> */}
    </>
  );
};

export default LanguageSelection;
