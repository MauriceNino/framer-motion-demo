import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { pageTransition } from "../helpers/animations";
import { IconButton } from "./components/icon-button";
import { Modal } from "./components/modal";

const Wrapper = styled(motion.div)`
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

const Grid = styled(motion.div)`
  &.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-flow: dense;
    gap: 30px;
  }

  &.list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  > div {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--surface);
    border-radius: 20px;
    padding: 20px;
  }
`;

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

export const GridPage = () => {
  const [items, setItems] = useState(
    new Array(15).fill(0).map((_, i) => ({ id: i }))
  );
  const [selected, setSelected] = useState(null);
  const [isGrid, setIsGrid] = useState(true);

  const addItem = () => {
    setItems((oldItems) => [
      ...oldItems,
      { id: Math.max(...oldItems.map((i) => i.id)) + 1 },
    ]);
  };

  const removeItem = (id) => {
    setItems((oldItems) => oldItems.filter((i) => i.id !== id));
  };

  const randomizeOrder = () => {
    setItems((oldItems) => oldItems.slice().sort(() => Math.random() - 0.5));
  };

  return (
    <>
      <Wrapper {...pageTransition}>
        <Header>
          <h1>Grid</h1>

          <div>
            <button onClick={addItem}>Add</button>
            <button onClick={randomizeOrder}>Randomize</button>
            <button onClick={() => setIsGrid(!isGrid)}>
              Switch to {isGrid ? "List" : "Grid"}
            </button>
          </div>
        </Header>

        <AnimatePresence initial={true}>
          <Grid
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={isGrid ? "grid" : "list"}
          >
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  layoutId={`grid_item.${item.id}`}
                  variants={itemVariants}
                  key={item.id}
                  onClick={() => setSelected(item)}
                >
                  <motion.h2
                    layout="position"
                    layoutId={`grid_item.${item.id}.heading`}
                  >
                    {item.id}
                  </motion.h2>

                  <IconButton
                    icon={faTrashAlt}
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(item.id);
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </Grid>
        </AnimatePresence>
      </Wrapper>

      <AnimatePresence>
        {selected && (
          <Modal selectedId={selected.id} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
};
