import React from 'react';
import { Form } from 'react-bootstrap';
import { SecondaryText } from '../text/SecondaryText.styles';
import { Select } from './selectField.styles';
import { FeedBack } from '../../contactPageCompnents/formInput/formInput.styles';

const SelectField = ({ label, name, options, formik }) => (
  <Form.Group className="mb-3">
    <Form.Label>
      <SecondaryText>{label}</SecondaryText>
    </Form.Label>
    <Select
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      $isInvalid={formik.touched[name] && formik.errors[name]}
    >
      <option value="">{`اختر ${label}`}</option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
    {formik.touched[name] && formik.errors[name] && (
      <FeedBack type="invalid" style={{ display: "block" }}>
        {formik.errors[name]}
      </FeedBack>
    )}
  </Form.Group>
);

export default SelectField;