import Navbar from '../components/Navbar'
import { Box, useColorMode } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    const { colorMode } = useColorMode();


    return (
        <Box
            minH="100vh"
            bg={colorMode === "light" ? "background.light" : "background.dark"}
            color={colorMode === "light" ? "text.light" : "text.dark"}
        >
            <Navbar />

            <Outlet />
        </Box>
    )
}

export default MainLayout