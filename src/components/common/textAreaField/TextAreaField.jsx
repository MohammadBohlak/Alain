// components/common/TextAreaField.jsx
import React from 'react';
import { Form } from 'react-bootstrap';
import { SecondaryText } from '../text/SecondaryText.styles';
import { TextArea } from './textAreaField.styles';
import { FeedBack } from '../../contactPageCompnents/formInput/formInput.styles';
// import { SecondaryText } from '../../common/text/SecondaryText.styles';
// import { TextArea } from './contactForm.styles';
// import { SecondaryText } from '../text/SecondaryText.styles';
// import { TextArea } from '../../contactPageCompnents/contactForm/contactForm.styles';

const TextAreaField = ({ label, name, rows, formik }) => (
  <Form.Group className="mb-4">
    <Form.Label>
      <SecondaryText>{label}</SecondaryText>
    </Form.Label>
    <TextArea
      rows={rows}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      $isInvalid={formik.touched[name] && formik.errors[name]}
    />
    {formik.touched[name] && formik.errors[name] && (
      <FeedBack type="invalid" style={{ display: "block" }}>
        {formik.errors[name]}
      </FeedBack>
    )}
  </Form.Group>
);

export default TextAreaField;