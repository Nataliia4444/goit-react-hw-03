//* IMPORT STYLES
import css from "./ContactForm.module.css";

//* IMPORT LIBRARY FORMIK
import { Formik, Field, Form, ErrorMessage } from "formik";

//* IMPORT LIBRARY FOR VALIDATION FORM
import * as Yup from "yup";

//* VALIDATION FORM
const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  number: Yup.number().required("A phone number is required"),
});

//* INITIAL VALUES FOR FORMIK
const initialValues = { username: "", number: "" };

export default function ContactForm({ addNewContact }) {
  //* SUBMIT
  const handleSubmit = (data, formActions) => {
    addNewContact(data);
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.contactForm}>
        <label>
          <span className={css.contactFormInfo}>Name</span>
          <Field
            type="text"
            id="username"
            name="username"
            placeholder="Type in your name.."
            className={css.contactInput}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.errorMsg}
          />
        </label>
        <label>
          <span className={css.contactFormInfo}>Number</span>
          <Field
            type="number"
            id="number"
            name="number"
            placeholder="Enter your number.."
            className={css.contactInput}
          />

          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMsg}
          />
        </label>

        <button type="submit" name="submit" className={css.btnFormSubmit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
