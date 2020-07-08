import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
}
const Select: React.FC<SelectProps> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return <select ref={selectRef} {...rest} />;
};

export default Select;
