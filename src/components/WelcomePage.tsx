import {useLocation} from "react-router-dom";

function WelcomePage() {
    const location = useLocation();
    const message = location.state?.message;
    return (
        <div>
            <h1>Welcome</h1>
            {message && <h2>{message}</h2>}
        </div>
    )
}

export default WelcomePage;