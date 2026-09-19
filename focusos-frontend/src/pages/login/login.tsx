import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./login.module.css";
import { useAuth } from "../../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                throw new Error("Invalid email or password");
            }

            const data: { token?: string } = await res.json();
            if (!data.token) {
                throw new Error("Login response did not include an access token");
            }

            login(data.token);
            navigate("/", { replace: true });
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong");
        }
    };

    return (
        <div className={classes.login}>
            <form className={classes.loginForm} onSubmit={handleSubmit}>
                <h1>Login to your account</h1>

                {error && <p className={classes.error}>{error}</p>}

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
                <button type="submit">Log in</button>
                <p className={classes.signupPrompt}>
                    Don't have an account? <Link to="/register">Sign up</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
