import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SwiperInstance from "swiper";
import { IconButton } from "@chakra-ui/react";


export interface SwiperButtonProps {
  swiperRef: React.RefObject<SwiperInstance | null>; // Define the type for swiperRef
}

const NextButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <IconButton
        aria-label="Next"
        onClick={() => swiperRef.current?.slideNext()}
        left="-30px"
        bg="blue.500"
        _hover={{ bg: "blue.600" }}
        borderRadius="full"
        boxSize="60px"
        zIndex="10"
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </IconButton>
  );
};

export default NextButton;