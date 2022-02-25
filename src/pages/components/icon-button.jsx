import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Button = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  height: 40px;
  width: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: var(--background);
`;

export const IconButton = ({ icon, onClick }) => {
  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};
