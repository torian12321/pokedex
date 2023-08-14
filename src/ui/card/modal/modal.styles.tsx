import styled from "styled-components";
import { motion } from "framer-motion";

export const ClosedCard = styled(motion.div)`
  cursor: pointer;
`;

export const Wrapper = styled.article`
  background: #bf4f7424;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  // padding: 0.25em 1em;

  flex-direction: column;
  display: flex;

  padding: 20px 40px;
  gap: 20px;

  background: white;
  border-radius: 16px;
`;

export const WrapperB = styled.article`
  list-style: none;
  padding: 12px;
  background: #f1e7e7;
  margin-bottom: 12px;
`;

export const Modal2 = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  // bottom: 0;
  right: 0;
  padding: 2rem;
  place-content: center;
  place-items: center;
  // pointer-events: none;
`;

export const Bg = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 2rem;
  place-content: center;
  place-items: center;
  background: #00000055;
`;

export const Img = styled.img`
  height: 100px;
  aspect-ratio: 1 / 1;
  margin: auto;
`;
