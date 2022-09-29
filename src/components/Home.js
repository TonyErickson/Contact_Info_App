import React, { useEffect, useState } from "react";
import {db} from "../firebase";
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate} from "react-router-dom";
import { Button } from "semantic-ui-react"
import { collection, onSnapshot, getDocs,  doc, deleteDoc } from "firebase/firestore";
import Footer from "./footer";
import Image from "./image";
import '../App.css'

const Home = () => {
    const [data, setData] = useState([]);
    const usersCollectionRef = collection(db, "contacts")
    const navigate = useNavigate();

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
            getUsers();
        }, []);

const onDelete = async (id) => {
    if (
        window.confirm("Are you sure that you want to delete that contact?")
    ) {
        await deleteDoc(doc(db, "contacts", id));
        setData(data.filter((data) => data.id !== id));
            
        };
    }

return (
    <div style={{ marginTop: "30px" }}>
        <h1>Saved Contacts</h1>
        <Image />
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{ textAlign: "center" }}>Name</th>
                    <th style={{ textAlign: "center" }}>Email</th>
                    <th style={{ textAlign: "center" }}>Phone #</th>
                    <th style={{ textAlign: "center" }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((data) => {
                    return (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>
                                 <Button className="btn btn-primary" onClick={() => navigate(`/update/${data.id}`)}>Update</Button>
                                 <Button className="btn btn-danger" onClick={() => onDelete(data.id)}>Delete</Button> 
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <div>
        </div>
        <br></br>
        <Footer />
    </div>
    
    )
}

export default Home;

