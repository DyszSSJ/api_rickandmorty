import React from "react";
import { Card, Text, Image } from "@nextui-org/react";

const CardPersonajes = ({ name, image, status, species, episodeCount }) => {
  return (
    <Card style={{ backgroundColor: "#d1d1d1" }}>
      <Card.Header>
        <Image src={image} alt={`${name}`} />
      </Card.Header>
      <Card.Body>
        <Text variant="h2" color="#333" weight={"bold"} className="text-[1.2rem]">
          {name}
        </Text>
        <Text variant="subtitle1" color="#555">
          Estado: {status}
        </Text>
        <Text variant="subtitle1" color="#555">
          Especie: {species}
        </Text>
      </Card.Body>
    </Card>
  );
};

export default CardPersonajes;
