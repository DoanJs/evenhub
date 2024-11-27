import { ReactNode } from "react";
import {
  Button,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import TextComponent from "./TextComponent";
import { globalStyles } from "../styles/gloabalStyles";
import { appColor } from "../constants/appColor";
import { fontFamilies } from "../constants/fontFamilies";

interface Props {
  icon?: ReactNode;
  text: string;
  type?: "primary" | "text" | "link";
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textFonts?: string;
  textStyles?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconFlex?: "right" | "left";
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    type,
    color,
    styles,
    textColor,
    textFonts,
    textStyles,
    onPress,
    iconFlex,
  } = props;
  return type === "primary" ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.button,
        globalStyles.shadow,
        {
          backgroundColor: color ?? appColor.primary,
          marginBottom: 20,
          width: '80%'
        },
        styles,
      ]}
    >
      {icon && icon}
      <TextComponent
        text={text}
        color={textColor ?? appColor.white}
        styles={[
          textStyles,
          {
            margin: icon ? 12 : 0,
            fontSize: 16,
          },
        ]}
        flex={icon && iconFlex === "right" ? 1 : 0}
        font={textFonts ?? fontFamilies.bold}
      />
      {icon && iconFlex === "right" && icon}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        text={text}
        color={type === "link" ? appColor.link : appColor.text}
      />
    </TouchableOpacity>
  );
};
export default ButtonComponent;
