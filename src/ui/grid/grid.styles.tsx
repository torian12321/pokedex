import styled from "styled-components";
import { motion } from "framer-motion";

export const List = styled(motion.ul)`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  //   display: grid;
  overflow: hidden;
  margin: 0;
  list-style: none;
  //   grid-template-columns: repeat(2, 1fr);
  //   grid-template-rows: repeat(2, 1fr);
  //   gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
`;

export const ListItem = styled(motion.li)`
  list-style: none;

  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 1px;
  border-radius: 8px;
  width: 30.3%;
  max-width: 148px;
  aspect-ratio: 1 / 1;
  padding: 3px;
  font-size: 13px;
  font-weight: 700;
  margin: 3px 0px;
  color: rgb(29, 29, 29);
  cursor: pointer;
`;
