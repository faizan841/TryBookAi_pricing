import React from "react";
import { StyledSection, StyledH2 } from "../../StyledComponents";

const Overview = () => {
  return (
    <StyledSection id="overview">
      <StyledH2>Overview</StyledH2>
      <p>
        The Book Generator API allows you to generate books on various topics
        using different language models. This documentation provides details on
        how to use the API, including authentication, available endpoints, and
        code examples.
      </p>
    </StyledSection>
  );
};

export default Overview;
