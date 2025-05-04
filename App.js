import React, { useState } from "react";
import { showTab, togglePassword, validateLogin, validateSignUp } from "./util";
import "./App.css";

function App() {
    const [activeTab, setActiveTab] = useState("login");
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const [signupData, setSignupData] = useState({ name: "", surname: "", email: "", password: "", confirmPassword: "" });
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e, formType) => {
        const { id, value } = e.target;
        if (formType === "login") {
            setLoginData({ ...loginData, [id]: value });
        } else {
            setSignupData({ ...signupData, [id]: value });
        }
    };

    // Login handler
    const handleLogin = () => {
        if (validateLogin(loginData, setErrors)) {
            alert("Login successful! (Demo mode)");
        }
    };

    // Signup handler
    const handleSignUp = () => {
        if (validateSignUp(signupData, setErrors)) {
            alert("Sign up successful! (Demo mode)");
        }
    };

    return (
        <div className="holder">
            {/* Tab Navigation */}
            <div className="tab">
                <button className={`tab-login ${activeTab === "login" ? "active" : ""}`} onClick={() => showTab("login", setActiveTab)}>Login</button>
                <button className={`tab-signin ${activeTab === "signup" ? "active" : ""}`} onClick={() => showTab("signup", setActiveTab)}>Sign Up</button>
            </div>

            {/* Login Form */}
            {activeTab === "login" && (
                <div className="login active">
                    <h1>Login</h1>
                    <form>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" required value={loginData.username} onChange={(e) => handleChange(e, "login")} />
                        {errors.username && <span className="error">{errors.username}</span>}

                        <label htmlFor="password">Password</label>
                        <input type={showPassword ? "text" : "password"} id="password" required value={loginData.password} onChange={(e) => handleChange(e, "login")} />
                        {errors.password && <span className="error">{errors.password}</span>}

                        <div className="show-pass">
                            <input type="checkbox" id="show-pass" onChange={() => togglePassword(setShowPassword)} />
                            <label htmlFor="show-pass">Show Password</label>
                        </div>

                        <hr />
                        <span>Forgot password? <a href="#">Click here.</a></span>
                        <button type="button" onClick={handleLogin}>Log In</button>
                    </form>
                </div>
            )}

            {/* Signup Form */}
            {activeTab === "signup" && (
                <div className="signup">
                    <h1>Sign Up</h1>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" required value={signupData.name} onChange={(e) => handleChange(e, "signup")} />
                        {errors.name && <span className="error">{errors.name}</span>}

                        <label htmlFor="surname">Surname</label>
                        <input type="text" id="surname" required value={signupData.surname} onChange={(e) => handleChange(e, "signup")} />
                        {errors.surname && <span className="error">{errors.surname}</span>}

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required value={signupData.email} onChange={(e) => handleChange(e, "signup")} />
                        {errors.email && <span className="error">{errors.email}</span>}

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required value={signupData.password} onChange={(e) => handleChange(e, "signup")} />
                        {errors.password && <span className="error">{errors.password}</span>}

                        <label htmlFor="c_password">Confirm Password</label>
                        <input type="password" id="c_password" required value={signupData.confirmPassword} onChange={(e) => handleChange(e, "signup")} />
                        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

                        <button type="button" onClick={handleSignUp}>Sign Up</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default App;