import { View, Text, Button } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonComponent } from "../../components";
import { globalStyles } from "../../styles/gloabalStyles";

const LoginScreen = () => {
  return (
    <View style={[globalStyles.container, { marginTop: 40, padding: 16 }]}>
      <Text>LoginScreen</Text>
      {/* <Button
        title="Login"
        onPress={async () =>
          await AsyncStorage.setItem("assetToken", "asdasdasd")
        }
      /> */}

      <ButtonComponent
        type="link"
        text="LOGIN"
        icon={
          <View>
            <Text>N</Text>
          </View>
        }
        iconFlex="left"
        onPress={() => alert("button")}
      />
    </View>
  );
};

export default LoginScreen;
