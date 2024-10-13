import {useState, FormEvent, ChangeEvent} from "react";
import userApi from "../api/user-api.ts"

function UserForm() {
    const [formData, setFormData] = useState({username: "", password: ""});

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        await userApi.registerUser(formData)
            .then(() => setFormData({username: "", password: ""}))
            .catch(err => console.log(err.message));
    }

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setFormData(currentData => {
            return {...currentData, [evt.target.name]: evt.target.value}
        });
    }

    return (

        <form onSubmit={handleSubmit}>
            <h1>Username is: {formData.username} and password is: {formData.password}</h1>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" name="username" id="username"
                   onChange={handleChange} value={formData.username}/>
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="password" name="password" id="password"
                   onChange={handleChange} value={formData.password}/>

            <button>Sign up</button>
        </form>

    )
}

export default UserForm;