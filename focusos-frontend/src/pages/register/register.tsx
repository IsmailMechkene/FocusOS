import { useState } from "react";
import classes from "./register.module.css";

function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);


    return (
        // <div className={classes.register} onSubmit={handleSubmit}>
        <div className={classes.register}>

            <form className={classes.registerForm}>
                <h1>Create account</h1>

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

export default Register;
