import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
// import "./Dashboard.css";
import { auth, db, logout } from "../../../firebase_setup/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Avatar from "boring-avatars";
function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("Произошла ошибка при получении пользовательских данных");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);
    return (
        <div className="dashboard">
            <div className="dashboard__container f_flex f_row">
                <Avatar name={name}/>
                <div>{name}</div>
                <div>{user?.email}</div>
                <button className="dashboard__btn" onClick={logout}>
                    Выход
                </button>
            </div>
        </div>
    );
}
export default Dashboard;