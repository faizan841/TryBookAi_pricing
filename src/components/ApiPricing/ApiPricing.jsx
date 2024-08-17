import React from "react";
import {
  StyledH2,
  StyledH3,
  StyledSection,
  StyledTable,
  StyledTh,
  StyledTd,
} from "../../StyledComponents";

const ApiPricing = () => {
  return (
    <StyledSection id="pricing">
      <StyledH2>API Pricing</StyledH2>
      <p>
        Our API pricing is based on the model used and the number of tokens
        processed. Here's a breakdown of the costs:
      </p>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>API</StyledTh>
            <StyledTh>Model</StyledTh>
            <StyledTh>Price per 1K tokens</StyledTh>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StyledTd>OpenAI</StyledTd>
            <StyledTd>GPT-3.5</StyledTd>
            <StyledTd>$0.002</StyledTd>
          </tr>
          <tr>
            <StyledTd>OpenAI</StyledTd>
            <StyledTd>GPT-4</StyledTd>
            <StyledTd>$0.03</StyledTd>
          </tr>
          <tr>
            <StyledTd>Together AI</StyledTd>
            <StyledTd>Llama-2-70b</StyledTd>
            <StyledTd>$0.0008</StyledTd>
          </tr>
          <tr>
            <StyledTd>Together AI</StyledTd>
            <StyledTd>Llama-2-13b</StyledTd>
            <StyledTd>$0.0006</StyledTd>
          </tr>
        </tbody>
      </StyledTable>
      <StyledH3>Token Estimation</StyledH3>
      <p>
        On average, 1 token is approximately 4 characters or 0.75 words. For
        precise pricing, we recommend using our token calculator tool.
      </p>
      <StyledH3>Billing</StyledH3>
      <p>
        You will only be charged for the tokens used in generating the book. The
        API tracks token usage and bills accordingly. Detailed usage reports are
        available in your account dashboard.
      </p>
    </StyledSection>
  );
};

export default ApiPricing;
