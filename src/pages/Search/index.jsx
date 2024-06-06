/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API } from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { addAllData, selectAllData } from "../../redux/slices/allDataSlice";
import { Box, Image } from "@chakra-ui/react";
import Pagination from "./components/Pagination";
import SearchCard from "./components/SearchCard";
import loading from "../../assets/loading02.gif";
import notFound from "../../assets/notFound.png"

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Search = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const query = useQuery();
    const data = useSelector(selectAllData)
    const searchQuery = query.get('query') || "";

    const fetchData = async () => {
        const response = await API.get("/countries");
        const data = response.data.data;
        const dataFiltered = data.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        dispatch(addAllData(dataFiltered));
    };

    useEffect(() => {
        setIsLoading(true);
        fetchData();
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [searchQuery]);

    return (
        <Box
            fontFamily="body"
            w="100%"
            minH="100vh"
            pt={32}
            pb={16}
            px={{ base: 10, lg: 52 }}
        >
            {isLoading ? (
                <Box
                    w="100%"
                    h="70vh"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Image
                        src={loading}
                        w="300px"
                        h="300px"
                    />
                </Box>
            ) : !isLoading && data.length > 0 ? (
                <>
                    <SearchCard />
                    <Box mt={10}>
                        <Pagination />
                    </Box>
                </>
            ) : !isLoading && data.length < 1 ? (
                <Box
                    w="100%"
                    h="80vh"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Image
                        src={notFound}
                        w="450px"
                        h="400px"
                    />
                </Box>
            ) : null}
        </Box>
    );
};

export default Search;
