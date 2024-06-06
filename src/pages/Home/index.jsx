/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { Box, Text } from "@chakra-ui/react"
import LoadingScreen from "./components/Loading"
import SearchInput from "./components/SearchInput"
import { useDispatch } from "react-redux"
import { addAllData } from "../../redux/slices/allDataSlice"

const Home = () => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addAllData([]))
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 2500);
    }, [])

    return (
        <>
            {
                isLoading ? (
                    <LoadingScreen />
                ) : (
                    <Box
                        w="100%"
                        h="100vh"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        py={{ base: 20, md: 32 }}
                        px={{ base: 10, lg: 52 }}
                    >
                        <Text
                            fontFamily="body"
                            fontSize="20px"
                            mb={-3}
                            className="animate__animated animate__fadeIn animate__delay-0.5s"
                        >
                            Explore the world!
                        </Text>

                        <Text
                            className="animate__animated animate__fadeInUp"
                            fontWeight="bold"
                            fontSize={{ base: "50px", lg: "80px" }}
                            fontFamily="heading"
                            textTransform="uppercase"
                        >
                            Zawarudo
                        </Text>
                        <Box
                            w='100%'
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            className="animate__animated animate__fadeIn animate__delay-1s"
                        >
                            <SearchInput />
                        </Box>
                    </Box>
                )
            }
        </>
    )
}

export default Home