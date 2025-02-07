import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { SwiperButtonProps } from "./NextButton";
import { Box, IconButton } from "@chakra-ui/react";

const PrevButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <IconButton
      aria-label="Previous"
      onClick={() => swiperRef.current?.slidePrev()}
      right="-30px"
      bg="blue.500"
      _hover={{ bg: "blue.600" }}
      borderRadius="full"
      boxSize="60px"
      zIndex="10"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </IconButton>
  );
};

export default PrevButton;
