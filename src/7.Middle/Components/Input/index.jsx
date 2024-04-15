import React from "react";

const Input = ({ label, required, error, ...rest }) => {
  return (
    <div class="form-group">
      <label class="label">
        {label} {required && <span>*</span>}
      </label>
      <input
        {...rest}
        type="text"
        class={`form__input ${error ? "formerror" : ""}`}
      />
      {error && <p class="error">{error}</p>}
    </div>
  );
};

export default Input;
