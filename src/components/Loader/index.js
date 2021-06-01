import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";
 
const override = css`
  display: block;
  margin: 50vh auto;
`;

const Loader = () => {
  return  (
    <PulseLoader color={'#0039E0'} loading={true} css={override} size={50} />
  )
}

export default Loader;