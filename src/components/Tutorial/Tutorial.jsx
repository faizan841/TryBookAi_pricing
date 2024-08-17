import React from "react";
import { StyledH2, StyledH3, StyledSection } from "../../StyledComponents";

const Tutorial = () => {
  return (
    <StyledSection id="tutorial">
      <StyledH2>Tutorial</StyledH2>
      <StyledH3>Step 1: Obtain an API Key</StyledH3>
      <p>
        Generate an API key using the button in the Authentication section
        above.
      </p>

      <StyledH3>Step 2: Make a Request</StyledH3>
      <p>
        Use your preferred programming language or tool to make a POST request
        to the /api/generate-book endpoint. Include your API key in the header
        and the required parameters in the request body.
      </p>

      <StyledH3>Step 3: Handle the Response</StyledH3>
      <p>
        The API will return a response with a job ID. You can use this ID to
        check the status of your book generation job.
      </p>

      <StyledH3>Step 4: Retrieve the Generated Book</StyledH3>
      <p>
        Once the job is complete, you can retrieve the generated book using the
        job ID (endpoint to be implemented).
      </p>
    </StyledSection>
  );
};

export default Tutorial;
