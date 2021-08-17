import React, { FC, memo } from 'react';
import {
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData,
} from 'react-native';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

const Container = styled.View({
  flexDirection: 'column',
  width: '100%',
  marginVertical: 10,
});

const Label = styled.Text(({ theme }) => ({
  fontSize: 14,
  fontWeight: '600',
  marginBottom: 6,
  color: theme.gray2,
}));

const StyledInput = styled.TextInput(({ theme }) => ({
  backgroundColor: theme.white,
  color: theme.text,
  paddingVertical: 20,
  paddingHorizontal: 10,
  fontSize: 16,
  borderWidth: 1,
  borderColor: theme.gray2,
  borderRadius: 4,
}));

interface IInput {
  label: string;
  placeholder: string;
  value: string;
  returnKeyType: ReturnKeyTypeOptions;
  maxLength: number;
  onChangeText: (text: string) => void;
  onSubmitEditing: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const Input: FC<IInput> = ({
  label,
  placeholder,
  maxLength,
  returnKeyType,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <Label>{label}</Label>

      <StyledInput
        placeholder={placeholder}
        placeholderTextColor={theme.gray2}
        maxLength={maxLength}
        returnKeyType={returnKeyType}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
};

export default memo(Input);
