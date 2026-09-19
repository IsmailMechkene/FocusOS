import { useState } from "react";
import classes from "./register.module.css";
import { useNavigate } from "react-router-dom";

function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName, lastName, email, password }),
            });

            if (!res.ok) {
                throw new Error("Registration failed. Try a different email.");
            }

            const data = await res.json();
            console.log("Registered, token:", data.token);

            navigate("/login");
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Something went wrong",
            );
        }
    };

    return (
        <div className={classes.register}>
            <form className={classes.registerForm} onSubmit={handleSubmit}>
                <h1>Create account</h1>

                {error && <p className={classes.error}>{error}</p>}


                <label className={classes.firstName__field}>
                    <span>First name</span>
                    <input
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </label>

                <label className={classes.lastName__field}>
                    <span>Last name</span>
                    <input
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </label>

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
                    <label htmlFor="register-password">Password</label>
                    <span className={classes.passwordInput}>
                        <input
                            id="register-password"
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            className={classes.passwordToggle}
                            type="button"
                            aria-label={
                                isPasswordVisible
                                    ? "Hide password"
                                    : "Show password"
                            }
                            aria-pressed={isPasswordVisible}
                            onClick={() =>
                                setIsPasswordVisible((visible) => !visible)
                            }
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

export default Register;
