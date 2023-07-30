import "./style.css"
const Coctail = ({strDrink, strGlass, strAlcoholic, strDrinkThumb}) => {
    return <div className="Coctails">
        <img src={strDrinkThumb}/>
        <h4>{strDrink}</h4>
        <h5>{strGlass}</h5>
        <p>{strAlcoholic}</p>
        <button>Details</button>
    </div>
}
export default Coctail;