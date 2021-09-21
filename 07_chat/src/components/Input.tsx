import React, { forwardRef, memo, useCallback, useState } from 'react';
import {
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  TextInput,
  TextInputSubmitEditingEventData,
} from 'react-native';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

const Container = styled.View({
  flexDirection: 'column',
  width: '100%',
  marginVertical: 10,
});

interface ILabel {
  isFocus: boolean;
}

const Label = styled.Text<ILabel>(({ theme, isFocus }) => ({
  fontSize: 14,
  fontWeight: '600',
  marginBottom: 6,
  color: isFocus ? theme.text : theme.gray2,
}));

interface IStyledInput {
  isFocus: boolean;
}

const StyledInput = styled.TextInput<IStyledInput>(({ theme, isFocus }) => ({
  backgroundColor: theme.white,
  color: theme.text,
  fontSize: 16,
  borderWidth: 1,
  borderColor: isFocus ? theme.text : theme.gray2,
  borderRadius: 4,
  paddingVertical: 10,
  paddingHorizontal: 20,
}));

interface IInput {
  label?: string;
  isEditable?: boolean;
  placeholder?: string;
  value: string;
  returnKeyType?: ReturnKeyTypeOptions;
  secureTextEntry?: boolean;
  maxLength?: number;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
}

const Input = forwardRef<TextInput, IInput>(
  (
    {
      label = '',
      isEditable = true,
      placeholder,
      secureTextEntry,
      maxLength,
      returnKeyType,
      value,
      onChangeText,
      onSubmitEditing,
    },
    ref
  ) => {
    const theme = useTheme();

    const [isFocus, setIsFocus] = useState(false);

    const onFocus = useCallback(() => {
      setIsFocus(true);
    }, []);

    const onBlur = useCallback(() => {
      setIsFocus(false);
    }, []);

    return (
      <Container>
        {!!label && <Label isFocus={isFocus}>{label}</Label>}

        <StyledInput
          ref={ref}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          editable={isEditable}
          isFocus={isFocus}
          placeholder={placeholder}
          placeholderTextColor={theme.gray2}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          returnKeyType={returnKeyType}
          value={value}
          onFocus={onFocus}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
        />
      </Container>
    );
  }
);

export default memo(Input);
