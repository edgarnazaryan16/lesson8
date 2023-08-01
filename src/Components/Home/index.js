import { useEffect, useState } from "react"
import Coctail from "./Coctails"
import { API } from "./constants";
import "./style.css"
import Header from "../Header";

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);
    const gettingCoctails = async() => {
        try {
            const response = await fetch(`${API}${inputValue}`);
            const responseData = await response.json();
            setData(responseData.drinks);
        } catch {
            alert("Something goes wrong");
        }
    }
    useEffect(() => {gettingCoctails()}, [inputValue])
    const handleInputChange = e => {
        setInputValue(e.target.value);
    }
    return (<>
        <Header />
        <input value={inputValue} onChange={handleInputChange}></input>
        <div className="CoctailsDiv">
            {
                (data) ? data.map((item) => {
                    return <Coctail
                        key = {item.idDrink}
                        {...item}
                    />
                }) : (<h3>No Coctails</h3>)
            }
        </div>
    </>)
}
export default Home;