import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "../../components";
import { fontFamilies } from "../../constants/fontFamilies";
import arrowRight from "../../assets/images/arrowRight.png";
import { appColor } from "../../constants/appColor";

const initValues = {
  number1: "",
  number2: "",
  number3: "",
  number4: "",
};

const Verification = () => {
  const [values, setValues] = useState(initValues);

  const handleChangeValues = (key: string, val: string) => {
    const data: any = { ...values };
    data[`${key}`] = val;

    setValues(data);
  };

  return (
    <ContainerComponent back>
      <SectionComponent>
        <TextComponent text="Verification" title font={fontFamilies.bold} />
        <SpaceComponent height={20} />
        <TextComponent
          styles={{ width: "60%" }}
          text="We’ve send you the verification code on +1 2620 0323 7631"
          font={fontFamilies.bold}
        />
        <SpaceComponent height={20} />
        <RowComponent
          styles={{
            justifyContent: "space-around",
          }}
        >
          <InputComponent
            isVerification
            placeholder="-"
            type="numeric"
            value={values.number1}
            onChange={(val) => handleChangeValues("number1", val)}
          />
          <InputComponent
            isVerification
            placeholder="-"
            type="numeric"
            value={values.number2}
            onChange={(val) => handleChangeValues("number2", val)}
          />
          <InputComponent
            isVerification
            placeholder="-"
            type="numeric"
            value={values.number3}
            onChange={(val) => handleChangeValues("number3", val)}
          />
          <InputComponent
            isVerification
            placeholder="-"
            type="numeric"
            value={values.number4}
            onChange={(val) => handleChangeValues("number4", val)}
          />
        </RowComponent>
        <SectionComponent styles={{ alignItems: "center" }}>
          <ButtonComponent
            type="primary"
            text="CONTINUE"
            styles={{ marginBottom: 0 }}
            icon={<Image source={arrowRight} height={20} />}
            iconFlex="right"
            onPress={() => alert(JSON.stringify(values))}
          />
        </SectionComponent>
        <RowComponent styles={{ justifyContent: "center" }}>
          <TextComponent color={appColor.text} text="Re-send code in " />
          <TextComponent color={appColor.link} text="0:20" />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default Verification;
