import React, {useEffect, useRef, useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {useField} from '@unform/core';

export default function Input({name, ...rest}) {
  const inputRef = useRef(null);
  const {fieldName, registerField, defaultValue, error} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <TextInput ref={inputRef} {...rest} multiline={true} />;
}
