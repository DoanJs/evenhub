import React, { ReactNode, useState } from "react";
import { View, Text, Image, Switch } from "react-native";
import { globalStyles } from "../../styles/gloabalStyles";
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "../../components";
import { Lock, Sms } from "iconsax-react-native";
import { appColor } from "../../constants/appColor";
import TextLogo from "../../assets/images/text-logo.png";
import { fontFamilies } from "../../constants/fontFamilies";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(true);

  return (
    <ContainerComponent isImageBackground>
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
          <ButtonComponent text="Forgot Password?" type="link"/>
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
