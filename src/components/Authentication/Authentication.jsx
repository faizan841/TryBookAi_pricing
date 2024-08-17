import React, { useState } from "react";
import {
  StyledSection,
  StyledH2,
  StyledPreCode,
  StyledButton,
  StyledApiDisplay,
} from "../../StyledComponents";

function generateRandomApiKey(length = 32) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let apiKey = "";
  for (let i = 0; i < length; i++) {
    apiKey += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return apiKey;
}

const Authentication = () => {
  const [apiKey, setApiKey] = useState("");
  const [opacity, setOpacity] = useState(1);

  const handleClick = () => {
    console.log("StyledApiDisplay clicked"); // Debug: Confirm click event
    const data = generateRandomApiKey();
    console.log("Generated API Key:", data); // Debug: Log the generated API key
    setApiKey(data);
    setOpacity(0); // Start with opacity 0
    setTimeout(() => {
      setOpacity(1); // Fade in the API key display
    }, 100);
  };

  return (
    <StyledSection id="authentication">
      <StyledH2>Authentication</StyledH2>
      <p>
        To use the API, you need to include your API key in the header of each
        request:
      </p>
      <StyledPreCode>
        <code>X-API-Key: YOUR_API_KEY</code>
      </StyledPreCode>
      <p>To generate an API key, use the button below:</p>
      <StyledButton id="generateApiKey" onClick={handleClick}>
        Generate API Key
      </StyledButton>
      <StyledApiDisplay id="apiKeyDisplay" style={{ opacity: opacity }}>
        {apiKey && `Your API Key: ${apiKey}`}
      </StyledApiDisplay>
    </StyledSection>
  );
};

export default Authentication;
