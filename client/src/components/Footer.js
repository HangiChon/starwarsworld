import React from "react";

// style
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <TextWrapper>
        <Text>Made with Force by HG</Text>
      </TextWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: lightgrey;
  width: 100%;
  position: relative;
  margin-top: auto;
  min-height: 75px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
`;

const Text = styled.span``;

export default Footer;
