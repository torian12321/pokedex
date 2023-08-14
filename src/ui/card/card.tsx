import type { CardProps } from "./card.types";
import { ListItem } from "./card.styles";
import { Modal } from "./modal";
import { Thumbnail } from "./thumbnail";

export const Card = ({ open, onClick, ...rest }: CardProps) => {
  const toggle = () => {
    onClick && onClick(rest.id);
  };

  return (
    <ListItem>
      {open ? (
        <Modal {...rest} onInteract={toggle} />
      ) : (
        <Thumbnail {...rest} onInteract={toggle} />
      )}
    </ListItem>
  );
};
