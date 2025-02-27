import React, { useState } from "react";
import { Form, Button, Alert, Toast, Col, Row } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { PrimaryText } from "../../common/text/PrimaryText.styles";
import { SecondaryText } from "../../common/text/SecondaryText.styles";
import { PrimaryButton } from "../../common/PrimaryButton";
import FormInput from "../formInput/FormInput";
import {
  ContainerToast,
  StyledForm,
} from "./contactForm.styles";
import api from "../../../api/axios";
import { Loader } from "../../common/loader/loader.styles";
import ToastNotification from "../../common/toastNotification/ToastNotification";
import TextAreaField from "../../common/textAreaField/TextAreaField";
import SelectField from "../../common/selectField/SelectField";
const ContactForm = () => {
  const [loader, setLoader] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendMessage = (message) => {
    setLoader(true);
    api
      .post("ar/feedback/messages/", message)
      .then((res) => {
        setSubmitted(true);
        formik.resetForm();
      })
      .catch((err) => {
        setErrorMessage("فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.");
        setShowError(true);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const validationSchema = Yup.object({
    full_name: Yup.string().required("الاسم الكامل مطلوب"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    phone_number: Yup.string().matches(
      /^[0-9]+$/,
      "رقم الهاتف يجب أن يحتوي على أرقام فقط"
    ),
    subject: Yup.string().required("الموضوع مطلوب"),
    message: Yup.string().required("الرسالة مطلوبة"),
  });

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone_number: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      sendMessage(values);
    },
  });
  const subjectOptions = [
    { value: "1", label: "استفسار" },
    { value: "2", label: "شكوى" },
    { value: "3", label: "دعم فني" },
  ];

  return (
    <StyledForm>
      {loader && <Loader />}

      <PrimaryText>أرسل رسالتك</PrimaryText>
      <Form onSubmit={formik.handleSubmit}>
        <FormInput
          label="الاسم الكامل"
          type="text"
          name="full_name"
          value={formik.values.full_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          $isInvalid={formik.touched.full_name && formik.errors.full_name}
          error={formik.errors.full_name}
        />

        <FormInput
          label="البريد الإلكتروني"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          $isInvalid={formik.touched.email && formik.errors.email}
          error={formik.errors.email}
        />

        <FormInput
          label="رقم الهاتف"
          type="tel"
          name="phone_number"
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          $isInvalid={formik.touched.phone_number && formik.errors.phone_number}
          error={formik.errors.phone_number}
        />

        <SelectField
          label="الموضوع"
          name="subject"
          options={subjectOptions}
          formik={formik}
        />
        <TextAreaField
          label="الرسالة"
          name="message"
          rows={5}
          formik={formik}
        />
        <PrimaryButton type="submit">إرسال الرسالة</PrimaryButton>
      </Form>
      
      <ContainerToast>
        <ToastNotification
          show={submitted}
          onClose={() => setSubmitted(false)}
          message="تم إرسال رسالتك بنجاح، سنرد عليك خلال 24 ساعة"
          variant="success"
        />

        <ToastNotification
          show={showError}
          onClose={() => setShowError(false)}
          message={errorMessage}
          variant="danger"
        />
      </ContainerToast>
    </StyledForm>
  );
};

export default ContactForm;
