import {useState, FormEvent, ChangeEvent} from "react";
import userApi from "../api/user-api.ts"
import {useNavigate} from "react-router-dom";
import "./Register.css"

function Register() {
    const [formData, setFormData] = useState({username: "", password: ""});
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        await userApi.registerUser(formData)
            .then((response) => {
                localStorage.setItem("token", response.token)
                navigate("/welcome")
                setFormData({username: "", password: ""})
            })
            .catch(err => setError(err.message || 'Login failed. Please try again.'));
    }

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setFormData(currentData => {
            return {...currentData, [evt.target.name]: evt.target.value}
        });
    }

    return (
        <div className="register-form">
            <h1>Register</h1>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <h1>Username is: {formData.username} and password is: {formData.password}</h1>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                           placeholder="username"
                           name="username"
                           id="username"
                           onChange={handleChange}
                           value={formData.username}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text"
                           placeholder="password"
                           name="password"
                           id="password"
                           onChange={handleChange}
                           value={formData.password}
                    />
                </div>
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default Register;