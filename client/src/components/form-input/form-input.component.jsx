import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ changeHandler, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={changeHandler} {...props} />
    {label ? (
      <FormInputLabel className={`${props.value ? "shrink" : ""}`}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
