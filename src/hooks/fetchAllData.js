import { useDispatch } from "react-redux"
import { API } from "../api/axios"
import { addAllData } from "../redux/slices/allDataSlice"
import { useLocation } from "react-router-dom";

export const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export const useFetchDataHooks = () => {
    const dispatch = useDispatch()
    const query = useQuery();
    const searchQuery = query.get('query') || "";

    const fetchAllData = async () => {
        const response = await API.get("/countries")
        const data = response.data.data
        

        const dataFiltered = data.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        dispatch(addAllData(dataFiltered));
    }

    return {
        fetchAllData
    }
}