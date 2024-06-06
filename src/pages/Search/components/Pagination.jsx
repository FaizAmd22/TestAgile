/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllData } from '../../../redux/slices/allDataSlice';
import { Box, Button, Text, useColorMode } from '@chakra-ui/react';
import { addPage, selectPage } from '../../../redux/slices/pageSlice';

const Pagination = () => {
    const data = useSelector(selectAllData);
    const [pagination, setPagination] = useState([]);
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const pageNow = useSelector(selectPage);

    const handleClick = (value) => {
        dispatch(addPage(value));
    };

    useEffect(() => {
        const dataPage = Math.ceil(data.length / 15);
        const newPagination = [];
        for (let i = 1; i <= dataPage; i++) {
            newPagination.push(i);
        }
        setPagination(newPagination);
    }, [data]);

    return (
        <Box
            display="flex"
            flexWrap="wrap"
            gap={5}
        >
            {pagination.length > 1 ? (
                pagination.map((item, index) => (
                    <Button
                        key={index}
                        onClick={() => handleClick(item)}
                        shadow="2px 2px 4px black"
                        bg={pageNow === item ? (colorMode === "light" ? "secondary.500" : "primary.500") : (colorMode === "light" ? "primary.500" : "secondary.500")}
                        color={pageNow === item ? (colorMode === "light" ? "text.dark" : "text.light") : (colorMode === "light" ? "text.light" : "text.dark")}
                        _hover={{ bg: colorMode === "light" ? "secondary.500" : "primary.500" }}
                    >
                        <Text>{item}</Text>
                    </Button>
                ))
            ) : null}
        </Box>
    );
};

export default Pagination;
