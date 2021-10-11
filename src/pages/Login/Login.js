import { Link } from "react-router-dom";
import "./Login.scss";
function Login () {
            return (
                <>
                    <div className="login">
                        <div>

                        <div className="login__box">
                            <h1 className="login__title">Login Bro</h1>
                            <form className="login__form">
                            <input type="text" className="login__input" placeholder="your name"
                                onChange={
                                    function (e) {
                                        return window.localStorage.setItem("token", e.target.value)
                                    }
                                }
                            />
                            <input type="text" className="login__input" placeholder="your email"
                            onChange={
                                function (e) {
                                    return window.localStorage.setItem("userinput", e.target.value)
                                }
                            }
                            />
                            <Link className="login-btn">
                                Submit
                            </Link>

                            </form>
                        </div>

                    
                            <Link to="/signup"  className="signup-text">
                                Sign Up
                            </Link>
                        
                        </div>
                    </div>
                </>
            )
}

export default Login