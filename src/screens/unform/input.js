import React, {useEffect, useRef} from 'react';
import {
  ViewInput,
  LabelInput,
  IconIos,
  IconMaterial,
  IconMateriall,
  TextInput,
} from './styles';

import {useField} from '@unform/core';

function Input({name, label, icon, iconSize, iconFamily, ...rest}) {
  const inputRef = useRef(null);
  let labelInput;
  if (label === '0') {
  } else {
    labelInput = <LabelInput>{label}</LabelInput>;
  }
  function defineIcon() {
    if (iconFamily === 'Ionicons') {
      return <IconIos name={icon} size={iconSize} color="#fff" />;
    } else if (iconFamily === 'Material') {
      return <IconMaterial name={icon} size={iconSize} color="#fff" />;
    } else if (iconFamily === 'Materiall') {
      return <IconMateriall name={icon} size={iconSize} color="#fff" />;
    }
  }

  const iconIF = defineIcon();

  const {fieldName, registerField, defaultValue, error} = useField(name);
  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({text: value});
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {labelInput}
      <ViewInput>
        <TextInput
          ref={inputRef}
          keyboardAppearance="dark"
          defaultValue={defaultValue}
          placeholderTextColor="#666360"
          onChangeText={(value) => {
            if (inputRef.current) {
              inputRef.current.value = value;
            }
          }}
          {...rest}
        />
        {iconIF}
      </ViewInput>
    </>
  );
}
export default Input;
