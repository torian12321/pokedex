import type { CardProps } from "..";
import { motion } from "framer-motion";
import { Bg, Wrapper, Img, Modal2 } from "./modal.styles";

export const Modal = ({
  id,
  name,
  description,
  img,
  onGoNext,
  onInteract,
}: CardProps) => (
  <>
    <Bg onClick={onInteract} />
    <Modal2>
      <motion.div layoutId={`card-${id}`}>
        <Wrapper>
          <Img src={img} />
          <motion.span>{name}</motion.span>
          <span>{description}</span>
          <button onClick={onGoNext}>Go next</button>
          {/* <motion.button onClick={onInteract}>Close</motion.button> */}
        </Wrapper>
      </motion.div>
    </Modal2>
  </>
);
