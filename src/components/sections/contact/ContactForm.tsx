import { Formik, Form, FormikHelpers } from "formik";
import * as FormMeta from "../../../utils/validators/ContactFormValidator";
import InputControl from "../../shared/form/controls/InputControl";
import { Button } from "../../shared/buttons/Button";

const ContactForm = () => {
  const { InputFieldNames } = FormMeta;
  const onSubmit = (
    values: FormMeta.ContactProps,
    { resetForm }: FormikHelpers<FormMeta.ContactProps>
  ) => {
    resetForm();
    console.log(values);
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={FormMeta.ContactInitialValue}
      validationSchema={FormMeta.ContactValidationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <InputControl
              placeholder="Your Full Name"
              name={InputFieldNames.NAME}
              value={formik.values[InputFieldNames.NAME]}
              onChange={(e)=>e.target.value}
            />
            <InputControl
              name={InputFieldNames.EMAIL}
              placeholder="Your Email"
              onChange={(e)=>e.target.value}
            />
            <InputControl
              name={InputFieldNames.MESSAGE}
              multiline
              rows={5}
              placeholder="Your Message"
              onChange={(e)=>e.target.value}
            />

            <Button sx={{ display: "flex", alignItems: "left" }}>
              Send Message
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
