import { View, Text, Button } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  return (
    <View style={{marginTop: 40}}>
      <Text>LoginScreen</Text>
      <Button
        title="Login"
        onPress={async () =>
          await AsyncStorage.setItem("assetToken", "asdasdasd")
        }
      />
    </View>
  );
};

export default LoginScreen;
