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
import arrownRight from "../../assets/images/arrowRight.png";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(true);
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handleLogin = async () => {
    const api = `http://192.168.0.104:3001/hello`

    try {
      const res = await fetch(api, {
        method: 'GET'
      })
      console.log(res.body)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent
        styles={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 75,
        }}
      >
        <Image
          source={TextLogo}
          style={{
            width: 162,
            height: 114,
            marginBottom: 30,
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Sign in" size={24} title />
        <SpaceComponent height={21} />
        <InputComponent
          type="email-address"
          placeholder="Email"
          value={email}
          onChange={(val) => setEmail(val)}
          allowClear
          affix={<Sms size={22} color={appColor.gray} />}
        />
        <InputComponent
          isPassword
          placeholder="Password"
          value={password}
          onChange={(val) => setPassword(val)}
          allowClear
          affix={<Lock size={22} color={appColor.gray} />}
        />
        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{
                true: appColor.primary,
              }}
              thumbColor={appColor.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <TextComponent text="Remember me!" color={appColor.text} />
          </RowComponent>
          <ButtonComponent
            text="Forgot Password?"
            type="link"
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent styles={{ alignItems: "center" }}>
        <ButtonComponent
          type="primary"
          text="SIGN IN"
          iconFlex="right"
          icon={<Image source={arrownRight} height={20} />}
          onPress={handleLogin}
        />
      </SectionComponent>

      <SocialLogin />

      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don't have an account? " />
          <ButtonComponent
            text="Sign up"
            type="link"
            onPress={() => navigation.navigate("SignupScreen")}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
