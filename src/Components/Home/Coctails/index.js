import { Link } from "react-router-dom";
import "./style.css"
const Coctail = ({idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb}) => {
    const path = `/coctail/${idDrink}`;
    return <div className="Coctails">
        <img src={strDrinkThumb}/>
        <h4>{strDrink}</h4>
        <h5>{strGlass}</h5>
        <p>{strAlcoholic}</p>
        <Link to={path}>Details</Link>
    </div>
}
export default Coctail;