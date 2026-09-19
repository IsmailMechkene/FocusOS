import { useState } from "react";
import classes from "./login.module.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className={classes.login}>
            <form className={classes.loginForm}>
                <h1>Login to your account</h1>

                <label className={classes.firstName__field}>
                    <span>Email</span>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <div className={classes.password__field}>
                    <label htmlFor="login-password">Password</label>
                    <span className={classes.passwordInput}>
                        <input
                            id="login-password"
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            className={classes.passwordToggle}
                            type="button"
                            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                            aria-pressed={isPasswordVisible}
                            onClick={() => setIsPasswordVisible((visible) => !visible)}
                        >
                            {isPasswordVisible ? "Hide" : "Show"}
                        </button>
                    </span>
                </div>
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default Login;
