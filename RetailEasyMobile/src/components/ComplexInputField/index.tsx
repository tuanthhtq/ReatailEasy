import React from "react";
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from "react-native";
import { Control, Controller, DeepRequired, FieldErrorsImpl, ValidationRule } from "react-hook-form";
import { COLORS } from "../../constants/Colors.ts";
import { fontPixel, horizontalPixel, verticalPixel } from "../../utils/Normalizer.tsx";
import { EmailRegex, PhoneRegex } from "../../constants/Regex.ts";

interface IComplexInputField{
  containerStyle?: StyleProp<ViewStyle>
  label: string,
  name: string,
  control: Control<any, any>,
  placeHolder?: string,
  required?: boolean,
  validatePhone?: boolean,
  validateEmail?: boolean,
  validateName?: boolean,
  isPassword?: boolean,
  errors?: string
}


const ComplexInputField: React.FC<IComplexInputField> = ({required = true, isPassword = false,...props}) => {

  let pattern: ValidationRule<RegExp> = new RegExp(/.*?/s);
  if(props.validateEmail) pattern = { value: EmailRegex, message: "Invalid email format" }
  if(props.validatePhone) pattern = { value: PhoneRegex, message: "Invalid phone number format" }
  if(props.validateName) pattern = { value: PhoneRegex, message: "Invalid name format" }

  return (
    <View style={[style.container, props.containerStyle]}>
      <Text style={style.label}>{props.label}</Text>
      <Controller
        control={props.control}
        rules={{
          required: required && "This field is required",
          pattern: pattern
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={props.placeHolder ? props.placeHolder : ""}
            placeholderTextColor={COLORS.BLACK}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={isPassword}
            style={style.input}
          />
        )}
        name={props.name}/>
      {props.errors && <Text style={style.error}>{props.errors}</Text> }
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: horizontalPixel(300),
    height: verticalPixel(99),
    flexDirection: 'column',
  },
  label: {
    color: COLORS.BLACK,
    fontSize: fontPixel(16)
  },
  input: {
    width: horizontalPixel(280),
    height: verticalPixel(40),
    borderWidth: 0.5,
    shadowColor: COLORS.PINK,
    shadowRadius: 4,
    shadowOffset: { width: 4 ,height: 4 },
    borderColor: COLORS.PINK,
    borderRadius: 8,
    color: COLORS.BLACK,
    alignSelf: 'center'
  },
  error: {
    fontSize: fontPixel(14),
    color: COLORS.PINK
  }

})

export default ComplexInputField;
