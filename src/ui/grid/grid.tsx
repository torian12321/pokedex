import { useState } from "react";
import { Card } from "../card";
import { List, ListItem } from "./grid.styles";
import { pokemons } from "../../pokemons";
// import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.04,
    },
  },
};

const list = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Grid = () => {
  const [selectedId, setSelectedId] = useState<any>(null);
  const handleOnClick = (id: string) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  const goNext = () => {
    const itemIndex = pokemons.findIndex((it) => it.id === selectedId);
    const nextItemId =
      itemIndex < pokemons.length - 1
        ? pokemons[itemIndex + 1].id
        : pokemons[0].id;
    setSelectedId(nextItemId);
  };

  return (
    <List variants={container} initial="hidden" animate="visible">
      {pokemons.map((item) => (
        // <motion.li  className="item" variants={list}>
        <ListItem key={item.id} variants={list}>
          <Card
            id={item.id}
            name={item.title}
            description={item.subtitle}
            img={item.img}
            open={selectedId === item.id}
            onGoNext={goNext}
            onClick={handleOnClick}
          />
        </ListItem>
        // </motion.li>
      ))}
    </List>
  );
};
