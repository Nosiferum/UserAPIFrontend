import {ChangeEvent, FormEvent, useState} from "react";
import userApi from "../api/user-api.ts"
import {useNavigate} from "react-router-dom"
import "./Login.css"

function Login() {
    const [credentials, setCredentials] = useState({username: "", password: ""})
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        await userApi.loginUser(credentials).then(response => {
            if (response.token) {
                localStorage.setItem("token", response.token)
                navigate("/welcome")
            }
        })
            .catch(err => setError(err.message || 'Login failed. Please try again.'));
    }

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        evt.preventDefault()
        setCredentials(() => (
            {...credentials, [evt.target.name]: evt.target.value}
        ))
    }

    return (
        <div className="login-page">
            <h2>Login</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;