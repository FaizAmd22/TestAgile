import { Box, ButtonGroup, Grid, GridItem, Image, Skeleton, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllData } from "../../../redux/slices/allDataSlice";
import { selectPage } from "../../../redux/slices/pageSlice";
import { useNavigate } from "react-router-dom";

const SearchCard = () => {
  const data = useSelector(selectAllData);
  const { colorMode } = useColorMode();
  const pageNow = useSelector(selectPage);
  const navigate = useNavigate();
  const itemsPerPage = 12;
  const startIndex = (pageNow - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [imageLoading, setImageLoading] = useState(true);

  const handleClick = (value) => {
    navigate(`/detail?query=${encodeURIComponent(value.name)}`);
  };

  return (
    <Grid
      templateColumns={{
        xl: "repeat(4, 1fr)",
        md: "repeat(3, 1fr)",
        base: "repeat(2, 1fr)",
      }}
      gap={20}
      minH="72vh"
    >
      {data.slice(startIndex, endIndex).map((item, index) => (
        <GridItem
          key={index}
          colSpan={1}
          shadow="2px 2px 5px black"
          rounded={20}
          position="relative"
          overflow="hidden"
          h={{  md: "170px", base: "100px" }}
          _hover={{ transform: "scale(1.1)", transition: "transform 0.4s ease-in-out" }}
          className="animate__animated animate__fadeIn"
        >
          <Skeleton isLoaded={!imageLoading} startColor="transparent" endColor="transparent" h={{  md: "170px", base: "100px" }}>
            <ButtonGroup w="100%" h={{  md: "170px", base: "100px" }} onClick={() => handleClick(item)}>
              <Image
                src={item.href.flag}
                alt={item.name}
                w="full"
                h="full"
                rounded={20}
                onLoad={() => setImageLoading(false)}
                style={{ display: imageLoading ? "none" : "block" }}
              />

              <Box
                w="100%"
                h="100%"
                bg={colorMode === "light" ? "primary.500" : "secondary.500"}
                color={colorMode === "light" ? "text.light" : "text.dark"}
                position="absolute"
                top={0}
                left={0}
                display="flex"
                justifyContent="center"
                alignItems="center"
                rounded={20}
                opacity={0}
                transition="opacity 0.5s ease-in-out"
                transform="scale(1.1)"
                _hover={{ opacity: 1 }}
              >
                <Text w="80%" textAlign="center" ml={-4} fontSize={{ md: "18px", base: "14px" }} fontWeight="bold">
                  {item.name}
                </Text>
              </Box>
            </ButtonGroup>
          </Skeleton>
        </GridItem>
      ))}
    </Grid>
  );
};

export default SearchCard;
