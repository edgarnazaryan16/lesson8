import Header from "../Header";
import "./style.css"
const { useState } = require("react")

const NewsLetter = () => {
    const [inputName, setInputName] = useState();
    const [inputLastName, setInputLastName] = useState();
    const [inputEmail, setInputEmail] = useState();

    const handleInputNameChange = event => {
        setInputName(event.target.value)
    }
    const handleInputLastNameChange = event => {
        setInputLastName(event.target.value)
    }
    const handleInputEmailChange = event => {
        setInputEmail(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem("user", JSON.stringify({
            Name: inputName,
            LastName: inputLastName,
            Email: inputEmail
        }))
    }
    return (
        <>
            <Header />
            <div>
                <h2>Our Newsletter</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" value={inputName} onChange={handleInputNameChange}/>
                    <label>Last Name</label>
                    <input type="text" value={inputLastName} onChange={handleInputLastNameChange}/>
                    <label>Email</label>
                    <input type="text" value={inputEmail} onChange={handleInputEmailChange}/>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}
export default NewsLetter;