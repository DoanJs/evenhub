import React, { ReactNode, useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../../styles/gloabalStyles";
import { InputComponent } from "../../components";
import { Lock, Sms } from "iconsax-react-native";
import { appColor } from "../../constants/appColor";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={[
        globalStyles.container,
        {
          marginTop: 40,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
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
    </View>
  );
};

export default LoginScreen;
