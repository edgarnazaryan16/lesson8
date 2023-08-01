import { Link } from "react-router-dom";
import "./style.css"
const CoctailsDetail = ({idDrink, strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass, strInstructions}) => {
    return (
        <div key={idDrink}>
            <Link to='/'>Back Home</Link>
            <h2>{strDrink}</h2>
            <div className="Detail">
                <>
                    <img src={strDrinkThumb}/>
                </>
                <div className="description">
                    <p>Name: {strDrink}</p>
                    <p>Category: {strCategory}</p>
                    <p>Info: {strAlcoholic}</p>
                    <p>Glass: {strGlass}</p>
                    <p>Instructions: {strInstructions}</p>
                </div>
            </div>
        </div>
        // <>Babken
        // </>
    )
}
export default CoctailsDetail;