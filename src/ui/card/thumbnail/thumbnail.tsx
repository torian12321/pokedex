import type { CardProps } from "../card.types";
import { ClosedCard, Img } from "./thumbnail.styles";
// import { Modal } from "../modal";

export const Thumbnail = ({ id, name, img, onInteract }: CardProps) => (
  <ClosedCard layoutId={`card-${id}`} onClick={onInteract}>
    <span>{name}</span>
    {/* <motion.span>{name}</motion.span> */}
    {/* <motion.button onClick={onInteract}>Open</motion.button> */}
    <Img src={img} />
  </ClosedCard>
);
