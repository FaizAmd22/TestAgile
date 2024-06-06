/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Input, InputGroup, InputLeftElement, useColorMode } from '@chakra-ui/react';
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
    const { colorMode } = useColorMode();
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            navigate(`/search?query=${encodeURIComponent(inputValue)}`);
        }
    };

    return (
        <InputGroup
            w={{base: "80%", md: "60%"}}
            px={5}
            py={2}
            rounded="full"
            display="flex"
            justifyContent="center"
            color={colorMode === "light" ? "text.dark" : "text.light"}
            bg={colorMode === "light" ? "secondary.500" : "primary.500"}
        >
            <InputLeftElement h="100%" ml={4}>
                <IoIosSearch fontSize='30px' />
            </InputLeftElement>
            <Input
                // value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                border="none"
                placeholder='Find the countries here!'
                _placeholder={{ color: colorMode === "light" ? "text.dark" : "text.light" }}
                focusBorderColor={colorMode === "light" ? "secondary.500" : "primary.500"}
            />
        </InputGroup>
    );
};

export default SearchInput;
