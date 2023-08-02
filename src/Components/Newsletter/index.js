import Header from "../Header";
import "./style.css"
const { useState } = require("react")

const NewsLetter = () => {

    const [info, setInfo] = useState({
        Name: '',
        Lastname: '',
        Email: ''
    })

    const handleFormChange = (event, field) => {
        setInfo({...info, [field]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem("user", JSON.stringify(info))
    }
    return (
        <>
            <Header />
            <div>
                <h2>Our Newsletter</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" value={info.Name} onChange={(event) => handleFormChange(event, 'Name')}/>
                    <label>Last Name</label>
                    <input type="text" value={info.Lastname} onChange={(event) => handleFormChange(event, 'Lastname')}/>
                    <label>Email</label>
                    <input type="text" value={info.Email} onChange={(event) => handleFormChange(event, 'Email')}/>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}
export default NewsLetter;