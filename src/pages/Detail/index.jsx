/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, GridItem, Image, Text, useColorMode } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import loading from "../../assets/loading02.gif"
import { useSelector } from "react-redux"
import { selectDetail } from "../../redux/slices/detailSlice"
import { useFetchOneDataHooks } from "../../hooks/fetchOneData"

const Detail = () => {
  const data = useSelector(selectDetail)
  const [isLoading, setIsLoading] = useState(false)
  const { colorMode } = useColorMode();
  const {fetchData} = useFetchOneDataHooks()


  useEffect(() => {
    setIsLoading(true)

    fetchData()
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])

  return (
    <>
      {isLoading ? (
        <Box
          w="100%"
          h="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={loading}
            margin="auto"
            w="300px"
            h="300px"
          />
        </Box>
      ) : (
        <Box
          w="100%"
          h="100vh"
          py={32}
          px={{ base: 10, lg: 52 }}
          bg="#FAF1CA"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            w="100%"
            h={{ base: "60vh", md: "60vh" }}
            rounded="16px"
            boxShadow="0px 4px 30px rgba(0, 0, 0, 0.1)"
            backdropBlur="100px"
            bg={colorMode === "light" ? "background.light" : "background.dark"}
          >
            <Grid
              templateColumns='repeat(6, 1fr)'
              gap={6}
              h="100%"
            >
              <GridItem
                colSpan={{ base: 6, md: 3 }}
                h="full"
                display="flex"
                alignItems="center"
                  justifyContent="center"
                  className="animate__animated animate__zoomIn"
              >
                {data.href && (
                  <Image
                    src={data.href.flag}
                    w="80%"
                    h={{ base: "80%", md: "60%" }}
                  />
                )}
              </GridItem>

              <GridItem
                colSpan={{ base: 6, md: 3 }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                margin={{ base: "auto", md: 0 }}
                fontSize="20px"
                  gap={{ base: 0, md: 3 }}
                  className="animate__animated animate__fadeIn animate__delay-0.5s"
              >
                <Text
                  fontSize={{ base: "24px", md: "50px" }}
                  fontWeight="bold"
                >
                  {data.name}
                </Text>
                <Text><span style={{ fontWeight: "bold" }}>Fullname :</span> {data.full_name}</Text>
                <Text><span style={{ fontWeight: "bold" }}>Capital :</span> {data.capital}</Text>
                <Text><span style={{ fontWeight: "bold" }}>Continent :</span> {data.continent}</Text>
                <Text><span style={{ fontWeight: "bold" }}>Currency :</span> {data.currency}</Text>
                <Text><span style={{ fontWeight: "bold" }}>Size :</span> {data.size}</Text>
                <Text><span style={{ fontWeight: "bold" }}>Population :</span> {data.population}</Text>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      )}
    </>
  )
}

export default Detail