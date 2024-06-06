import { Box, Button, Input, InputGroup, InputLeftElement, Text, useColorMode, IconButton } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();
    const [showInput, setShowInput] = useState(false);
    const [isSliding, setIsSliding] = useState(false);
    const [inputValue, setInputValue] = useState('');


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            navigate(`/search?query=${encodeURIComponent(inputValue)}`);
        }
    };

    const handleSearchClick = () => {
        setShowInput(!showInput);
    }

    const handleThemeToggle = () => {
        setIsSliding(true);
        setTimeout(() => {
            toggleColorMode();
            setIsSliding(false);
        }, 300);
    }

    return (
        <Box
            w="100%"
            h="9vh"
            position="fixed"
            zIndex={100}
            top={0}
            bg={colorMode === "light" ? "background.dark" : "background.light"}
            color={colorMode === "light" ? "text.dark" : "text.light"}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={{ base: 2, lg: 52 }}
            className="animate__animated animate__fadeInDown animate__delay-3s"
            shadow="2px 2px 3px black"
        >
            <Button
                bg="none"
                _hover={{ bg: "none" }}
                color={colorMode === "light" ? "text.dark" : "text.light"}
                onClick={() => navigate("/")}
            >
                <Text textTransform="uppercase" fontWeight="bold" fontSize="32px" fontFamily="heading" display={{ base: "none", md: "block" }}>
                    Zawarudo
                </Text>
                <Text textTransform="uppercase" fontWeight="bold" fontSize="32px" fontFamily="heading" display={{ base: "block", md: "none" }}>
                    Z
                </Text>
            </Button>

            <Box display="flex" alignItems="center" mr={2}>
                <Box display="flex" alignItems="center" position="relative" w="full">
                    <IconButton
                        aria-label="Search database"
                        icon={<IoIosSearch fontSize='30px' />}
                        onClick={handleSearchClick}
                        bg="none"
                        _hover={{ bg: "none" }}
                        color={colorMode === "dark" ? "text.light" : "text.dark"}
                        mr={2}
                    />
                    <InputGroup
                        w={showInput ? "300px" : "0"}
                        transition="width 0.5s ease"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        px={showInput ? 5 : 0}
                        py={showInput ? 2 : 0}
                        color={colorMode === "dark" ? "text.dark" : "text.light"}
                        bg={colorMode === "dark" ? "secondary.500" : "primary.500"}
                        rounded="full"
                        display="flex"
                        justifyContent="center"
                        position="absolute"
                        right="0"
                    >
                        <InputLeftElement h="100%" ml={4}>
                            <IconButton
                                aria-label="Search database"
                                icon={<IoIosSearch fontSize='30px' />}
                                onClick={handleSearchClick}
                                bg="none"
                                _hover={{ bg: "none" }}
                                color={colorMode === "dark" ? "text.dark" : "text.light"}
                                mr={2}
                            />
                        </InputLeftElement>
                        <Input
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            focusBorderColor={colorMode === "dark" ? "secondary.500" : "primary.500"}
                            border="none"
                            placeholder='Find the countries here!'
                            _placeholder={{ color: colorMode === "dark" ? "text.dark" : "text.light" }}
                            opacity={showInput ? 1 : 0}
                            transition="opacity 0.5s ease"
                        />
                    </InputGroup>
                </Box>

                <Button
                    onClick={handleThemeToggle}
                    ml={3}
                    bg={colorMode === "light" ? "primary.500" : "secondary.500"}
                    color={colorMode === "light" ? "text.light" : "text.dark"}
                    rounded="full"
                    py={2}
                    fontSize="45px"
                    _hover={{ bg: colorMode === "light" ? "white" : "black" }}
                    transition="transform 0.5s ease, background-color 0.5s ease, color 0.5s ease"
                    transform={isSliding ? "translateX(10px)" : "translateX(0)"}
                >
                    {colorMode === "light" ? <MdLightMode /> : <MdNightlightRound />}
                </Button>
            </Box>
        </Box>
    )
}

export default Navbar;
