import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import styled from "styled-components";
import { IconButton } from "./icon-button";

const ModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    position: relative;
    width: clamp(300px, 100vw, 500px);

    display: flex;
    flex-direction: column;

    background-color: var(--surface);
    border-radius: 20px;
    padding: 20px;
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background);
    opacity: 0.5;
  }
`;

const backdropVariants = {
  animate: {
    opacity: 0.5,
  },
  exit: {
    opacity: 0,
  },
};

const modalContentVariants = {
  initial: {
    height: "0",
    overflow: "hidden",
  },
  animate: {
    height: "auto",
    overflow: "hidden",
    transition: {
      delay: 0.3,
      easing: "easeOut",
    },
  },
  exit: {
    height: "0",
    overflow: "hidden",
  },
};

export const Modal = ({ selectedId, onClose }) => {
  return (
    <ModalContainer>
      <motion.div
        className="backdrop"
        variants={backdropVariants}
        exit="exit"
        initial="exit"
        animate="animate"
        onClick={onClose}
      ></motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="modal"
        layoutId={`grid_item.${selectedId}`}
      >
        <div className="id-container">
          <motion.h2 layoutId={`grid_item.${selectedId}.heading`}>
            {selectedId}
          </motion.h2>
        </div>

        <motion.div
          variants={modalContentVariants}
          className="content-container"
        >
          <h3>Content</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            quisquam.
          </p>
        </motion.div>

        <IconButton icon={faTimes} onClick={onClose} />
      </motion.div>
    </ModalContainer>
  );
};
