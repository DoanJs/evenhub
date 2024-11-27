import React from "react";
import {
    ContainerComponent,
    SectionComponent,
    TextComponent,
} from "../../components";

const ForgotPassword = () => {
  return (
    <ContainerComponent back isImageBackground>
      <SectionComponent>
        <TextComponent text="Resset Password" title />
        <TextComponent text="Please enter your email address to request a password reset" />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default ForgotPassword;
