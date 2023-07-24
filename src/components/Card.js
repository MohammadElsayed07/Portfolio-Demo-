import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack boxSize={500}>
      <VStack>
        <Image src={imageSrc} alt={title} />
        <Heading fontSize={30}>{title}</Heading>
        <Text fontSize={15}>{description}<br/><br/> See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </VStack>
    </HStack>
  );
};

export default Card;
