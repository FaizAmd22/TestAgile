import { Box, Image } from '@chakra-ui/react'
import notFound from "../../assets/404.jpeg"

const NotFound = () => {
    return (
        <Box
            w="100%"
            h="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg=''
        >
            <Image
                src={notFound}
                w={{ base: "100%", lg: "45%" }}
            />
        </Box>
    )
}

export default NotFound