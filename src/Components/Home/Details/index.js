import { Link, useParams } from "react-router-dom";
import { CoctailApi } from "../constants";
import { useEffect, useState } from "react";
import CoctailsDetail from "./CoctailsDetail";

const Detail = () => {
    const [detail, setDetail] = useState({});
    const {id} = useParams();
    const gettingDetails = async() => {
        try {
            const response = await fetch(`${CoctailApi}${id}`);
            const responseData = await response.json();
            setDetail(responseData.drinks[0])
        } catch {
            alert("Something goes wrong");
        }
    }
    useEffect(() => {gettingDetails()}, [])
    return <CoctailsDetail 
        {...detail}
    />
    // : <h1>Not Found</h1>
}
export default Detail;