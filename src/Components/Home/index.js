import { useEffect, useState } from "react"
import Coctail from "./Coctails"
import { API } from "./constants";
import "./style.css"

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);
    const gettingCoctails = async() => {
        try {
            const response = await fetch(API + inputValue);
            const responseData = await response.json();
            console.log(responseData.drinks);
            setData(responseData.drinks);
            console.log(data)
        } catch {
            alert("Something goes wrong");
        }
    }
    useEffect(() => {gettingCoctails()}, [inputValue])
    const handleInputChange = e => {
        setInputValue(e.target.value);
    }
    return (<>
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