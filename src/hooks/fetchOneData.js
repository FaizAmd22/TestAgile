import { useDispatch } from "react-redux";
import { API } from "../api/axios";
import { useQuery } from "./fetchAllData";
import { addDetail } from "../redux/slices/detailSlice";

export const useFetchOneDataHooks = () => {
    const query = useQuery();
    const searchQuery = query.get('query') || "";
    const dispatch = useDispatch()

    const fetchData = async () => {
        const response = await API.get("/countries")

        const data = response.data.data
        const filter = data.find((item) => item.name == searchQuery)
        
        dispatch(addDetail(filter))
    }

    return {
        fetchData
    }
}