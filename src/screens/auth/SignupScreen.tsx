import { Lock, Sms } from "iconsax-react-native";
import React, { useState } from "react";
import { Image, Switch } from "react-native";
import TextLogo from "../../assets/images/text-logo.png";
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "../../components";
import { appColor } from "../../constants/appColor";
import { SocialLogin } from "./components";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const initValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupScreen = () => {
  const [values, setValues] = useState(initValue);
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  return (
    <ContainerComponent isImageBackground isScroll back title="Sign in">
      <SectionComponent>
        <TextComponent text="Sign up" size={24} title />
        <SpaceComponent height={21} />
        <InputComponent
          type="email-address"
          placeholder="Email"
          value={values.email}
          onChange={(val) => setValues({ ...values, email: val })}
          allowClear
          affix={<Sms size={22} color={appColor.gray} />}
        />
        <InputComponent
          isPassword
          placeholder="Password"
          value={values.password}
          onChange={(val) => setValues({ ...values, password: val })}
          allowClear
          affix={<Lock size={22} color={appColor.gray} />}
        />
      </SectionComponent>

      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent type="primary" text="SIGN UP" />
      </SectionComponent>

      <SocialLogin />

      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Already have an account? " />
          <ButtonComponent
            text="Signin"
            type="link"
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignupScreen;
