/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllData } from "../../redux/slices/allDataSlice";
import { Box, Image } from "@chakra-ui/react";
import Pagination from "./components/Pagination";
import SearchCard from "./components/SearchCard";
import loading from "../../assets/loading02.gif";
import notFound from "../../assets/notFound.png"
import { useFetchDataHooks, useQuery } from "../../hooks/fetchAllData";

const Search = () => {
    const [isLoading, setIsLoading] = useState(false);
    const data = useSelector(selectAllData)
    const { fetchAllData } = useFetchDataHooks()
    const query = useQuery();
    const searchQuery = query.get('query') || "";

    console.log(data);

    useEffect(() => {
        setIsLoading(true);
        fetchAllData()
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