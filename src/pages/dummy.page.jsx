import { motion } from "framer-motion";
import styled from "styled-components";
import { pageTransition } from "../helpers/animations";

const Wrapper = styled(motion.div)`
  padding: 10px;
`;

export const DummyPage = () => {
  return (
    <Wrapper {...pageTransition}>
      <h1>Dummy Page</h1>

      <p>
        This page exists only for the purpose of testing the routing animation
      </p>
    </Wrapper>
  );
};
