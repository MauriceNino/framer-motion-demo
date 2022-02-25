import { faBug, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  > :nth-child(1) {
    flex: 1 1 auto;
    overflow: auto;
    position: relative;
  }
`;

const BottomNav = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--surface);

  > a {
    flex: 1 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 1rem;

    .active-line {
      position: absolute;
      top: 0;
      left: 0;
      height: 3px;
      width: 100%;
      background-color: var(--primary);
    }
    > svg {
      margin-top: 3px;
      font-size: 1.5rem;
    }
    > p {
      margin: 0;
    }
  }
`;

const CustomLink = ({ text, to, icon }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to}>
      {match && (
        <motion.div layoutId="active-tab" className="active-line"></motion.div>
      )}
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </Link>
  );
};

export const HomePage = () => {
  return (
    <Wrapper>
      <div>
        <Outlet />
      </div>

      <BottomNav>
        <CustomLink text="Grid Page" to="grid" icon={faThLarge} />
        <CustomLink text="Dummy Page" to="dummy" icon={faBug} />
      </BottomNav>
    </Wrapper>
  );
};
