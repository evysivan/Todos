import styled from "styled-components";
import React from "react";

let Just = styled.div`
  backgroung: blue;
  width: 100px;
  height: 100px;
`;

Just = ({ text }) => {
  return <p>{text}</p>;
};

export default Just;

// import styled from "styled-components";
// import React from "react";

// let Just = styled.p`
//   background: blue;
//   width: 100px;
//   height: 100px;
// `;

// const StyledP = ({ text }) => {
//   return <Just>{text}</Just>;
// };

// export default StyledP;
