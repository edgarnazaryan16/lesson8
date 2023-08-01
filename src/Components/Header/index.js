import { Link } from "react-router-dom"
import { headerData } from "./data"
import "./style.css"
const Header = () => {
    return (
        <div>
            {
                headerData.map(({title, path}) => (
                    <Link key={title} className="Link" to={path}>{title}</Link>
                ))
            }
        </div>
    )
}
export default Header;