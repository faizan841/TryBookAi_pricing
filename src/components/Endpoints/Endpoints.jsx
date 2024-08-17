import React from "react";
import {
  StyledSection,
  StyledHttp,
  StyledEndpoint,
  StyledTable,
  StyledH4,
  StyledTd,
  StyledTh,
  StyledH2,
  StyledH3,
  StyledPreCode,
} from "../../StyledComponents";

const Endpoints = () => {
  return (
    <StyledSection id="endpoints">
      <StyledH2>Endpoints</StyledH2>
      <StyledH3>Generate Book</StyledH3>
      <p>
        <StyledHttp>POST</StyledHttp>{" "}
        <StyledEndpoint>/api/generate-book</StyledEndpoint>
      </p>
      <StyledH4>Request Body</StyledH4>
      <StyledTable>
        <tr>
          <StyledTh>Parameter</StyledTh>
          <StyledTh>Type</StyledTh>
          <StyledTh>Description</StyledTh>
        </tr>
        <tr>
          <StyledTd>api</StyledTd>
          <StyledTd>string</StyledTd>
          <StyledTd>
            The API provider to use. Options: "openai" or "together"
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>model</StyledTd>
          <StyledTd>string</StyledTd>
          <StyledTd>
            The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4",
            "llama-2-70b")
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>topic</StyledTd>
          <StyledTd>string</StyledTd>
          <StyledTd>The main topic or theme of the book</StyledTd>
        </tr>
        <tr>
          <StyledTd>language</StyledTd>
          <StyledTd>string</StyledTd>
          <StyledTd>
            The language in which the book should be generated
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>word_count</StyledTd>
          <StyledTd>integer</StyledTd>
          <StyledTd>
            The approximate number of words for the generated book
          </StyledTd>
        </tr>
      </StyledTable>
      <h4>Response</h4>
      <StyledPreCode>
        <code>
          "message": "Book generation started", "status": "processing",
          "job_id": "unique-job-identifier"
        </code>
      </StyledPreCode>
    </StyledSection>
  );
};

export default Endpoints;
