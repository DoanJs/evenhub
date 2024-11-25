import { StyleProp, TextStyle, Text } from "react-native";
import { appColor } from "../constants/appColor";
import { fontFamilies } from "../constants/fontFamilies";
import { globalStyles } from "../styles/gloabalStyles";

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  styles?: StyleProp<TextStyle>;
}

const TextComponent = (props: Props) => {
  const { text, color, size, flex, font, styles } = props;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: color ?? appColor.text,
          flex: flex ?? 0,
          fontSize: size ?? 14,
          fontFamily: font ?? fontFamilies.regular,
        },
        styles,
      ]}
    >
      {text}
    </Text>
  );
};
export default TextComponent;
