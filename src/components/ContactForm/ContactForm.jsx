import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaUserLarge, FaPhone } from "react-icons/fa6";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";
import css from "./ContactForm.module.css";

const ContactForm = ({ setContacts, contacts }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .matches(/^[A-Za-z]+$/, "Name must contain only letters")
          .min(3, "Must be at least 3 characters")
          .max(50, "Must be 50 characters or less")
          .required("Enter name"),
        number: Yup.string()
          .matches(
            /^\d{3}-\d{2}-\d{2}$/,
            "Number must be in the format 123-45-67"
          )
          .required("Enter number"),
      })}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };
        setContacts([...contacts, newContact]);
        resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.inputTitle}>Name</label>
        <div className={css.containerInput}>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
            id={nameFieldId}
          />
          <FaUserLarge className={css.iconUser} size="15" />
        </div>
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="div"
        />

        <label className={css.inputTitle}>Number</label>
        <div className={css.containerInput}>
          <Field
            className={css.input}
            type="text"
            name="number"
            placeholder="xxx-xx-xx"
            id={numberFieldId}
          />
          <FaPhone className={css.iconPhone} size="15" />
        </div>
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="div"
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
