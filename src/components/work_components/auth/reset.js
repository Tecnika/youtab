import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../../../firebase_setup/firebase";
// import "./Reset.css";
function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div className="reset">
            <div className="reset__container">
                <input
                    type="text"
                    className="reset__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                />
                <button
                    className="reset__btn"
                    onClick={() => sendPasswordResetEmail(email)}
                >
                    Отправить пароль на E-mail
                </button>
                <div>
                    Нет аккаунта? <Link to="/register">Зарегистрироваться</Link> сейчас.
                </div>
            </div>
        </div>
    );
}
export default Reset;