import React, { useEffect, useState,} from "react";
import { Button, Form, Grid, Loader } from "semantic-ui-react"
import {db} from "../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { addDoc, collection, getDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import Footer from "./footer";
import '../App.css'

const initialState  = {
    name: "",
    email: "",
    phone: ""
}
const AddEditContacts = () => {
    const [data,setData] = useState(initialState);
    const {name, email, phone} =  data;
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect (() => {
        id && getSingleUser();
    }, [id])

    const getSingleUser = async () => {
        const docRef = doc(db, "contacts", id);
        const snapshot = await getDoc(docRef);
        if(snapshot.exists()) {
            setData({...snapshot.data() });
        }
    };

    const handleChange = (e) =>{
    setData({...data, [e.target.name]: e.target.value});
};


    const validate = () => {
        let errors = {};
        if(!name) {
            errors.name = "Name is Required"
        }
        if(!email) {
            errors.email = "Email is Required"
        }
        if(!phone) {
            errors.phone = "Phone is Required"
    
            alert("Please provide data in each input field")
        }
        return errors;
    };

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errors = validate();
        if(Object.keys(errors).length) return setErrors(errors);
        setIsSubmit(true);
        if (!id) {
            try {
                await addDoc(collection(db, "contacts"), {
                    ...data,
                    timestamp: serverTimestamp()
                });
            } catch (error) {
                console.log(error)
            }
    } else {
        try {
            await updateDoc(doc(db, "contacts", id), {
                ...data,
                timestamp: serverTimestamp()
            })
        } catch (error) {
        }
    }
        navigate("/");
    };
    return (
        <div className="content"> 
            <Grid  style={{height: "80vh"}}>
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <div className="main">
                            {isSubmit ? (
                                <Loader active inline="centered" size="huge" />
                            ) : (
                            <>
                            
                            <br></br>
                            <br></br>
                                                      
                            <Form onSubmit={handleSubmit} className="Form">
                            <h1 className="AddEditTop"> {id ? "Update Contact" : "Add Contact"} </h1>
                                <Form.Input
                                    label="Full Name"
                                    error={errors.name ? {content: errors.name} : null}
                                    type="text"
                                    placeholder= "Enter The Full Name Here ..."
                                    name= "name"
                                    onChange= {handleChange}
                                    value={name}
                                    autoFocus
                                />
                                <Form.Input
                                    label="Email Address"
                                    error={errors.email ? {content: errors.email} : null}
                                    type="text"
                                    placeholder= "Enter The Email Address Here ..."
                                    name= "email"
                                    onChange= {handleChange}
                                    value={email}
                                />
                                <Form.Input
                                    label="Phone Number"
                                    error={errors.phone ? {content: errors.phone} : null}
                                    placeholder= "Enter The Phone Number Here ..."
                                    name= "phone"
                                    onChange= {handleChange}
                                    value={phone}
                                />
                                <Button  primary type="submit">Submit Contact</Button>
                            </Form>
                            </>

                         )}
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <div>
                <Footer />
            </div>
        </div>
        );
};

export default AddEditContacts;

//             await addDoc(usersCollectionRef, {name: newName, email: newEmail, contact: newContact});
//         }

// const [newName, setNewName] = useState("");
// const [newEmail, setNewEmail] = useState("");
// const [newContact, setNewContact] = useState("");

//     // const [users, setUsers] = useState([]);
//     const usersCollectionRef = collection(db, "contacts")
//     const [state, setState] = useState(initialState);
//     // const [data, setData] = useState({});

//     // const {name, email, contact} = state;

//     // const navigate = useNavigate();

//     const {id} = useParams

//     // useEffect(() => {
//     //     db.child("contacts").on("value", (snapshot) => {
//     //         if (snapshot.val() !== null) {
//     //             setData({ ...snapshot.val() });
//     //         } else {
//     //             setData({});
//     //         }
//     //     });

//         // db.child("contacts").on("value", (snapshot) => {
//         //     if (snapshot.val() !== null) {
//         //         setData({ ...snapshot.val() });
//         //     } else {
//         //         setData({});
//         //     }
//         // });

//         // return () => {
//         //     setData({})
//         // }
//         // const AddEditContacts = async() => {
//         //     await addDoc(usersCollectionRef, {name: newName, email: newEmail, contact: newContact});
//         // }

//         // useEffect(() => {
//         //     const getUsers = async () => {
//         //         const data = await getDocs(usersCollectionRef)
//         //         setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
//         //     };
//         //         getUsers();
//         //     }, []);

//         // return () => {
//         //     setData({})
//         // }
//     // }, [id]);

//     // useEffect(() => {
//     //     if(id) {
//     //         setState({...data[id]})
//     //     } else {
//     //         setState({...initialState})
//     //     }

//     //     return () => {
//     //         setState({...initialState})
//     //     };
//     // }, [id, data])

//     const handleInputChange = (e) => {
//         const {name, value} = e.target;
//         setState({...state, [name]: value });
//     };

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         if(!newName || !newEmail || !newContact) {
//             toast.error("Please provide data in each input field")
//         } else {
//             if (!id) {
//                 db.child("contacts").push(state, (err) => {
//                     if(err) {
//                         toast.error(err);
//                     } else {
//                         toast.success("Contact Info Added Successfully");
//                     }
//                 });
//             //     setTimeout(() => navigate.push("/"), 500);
//              }
//     //         db.child(`contacts/${id}`).set(state, (err) => {
//     //             if(err) {
//     //                 toast.error(err);
//     //             } else {
//     //                 toast.success("Contact Info Updated Successfully");
//     //             }
//     //         });
//     //         setTimeout(() => navigate.push("/"), 500);
//          }
//     // };


//             <form 
//                 style={{ 
//                     margin: "auto", 
//                     padding: "15px", 
//                     maxWidth: "400px", 
//                 alignContent: "center"
//                 }}
//                 onSubmit={{handleSubmit}}
//                 >
//                 <label htmlFor="name"> Name </label>
//                 <input 
//                 type="text" 
//                 id= "name" 
//                 name="name" 
//                 placeholder="Your name ..." 
//                 value={newName || ""} 
//                 onChange= {handleInputChange} 
//                 />
//                 <label htmlFor="email"> Email </label>
//                 <input 
//                 type="email" 
//                 id= "email" 
//                 name="email" 
//                 placeholder="Your Email ..." 
//                 value={newEmail || ""} 
//                 onChange={handleInputChange} 
//                 />
//                 <label htmlFor="contact"> Contact </label>
//                 <input 
//                 type="number" 
//                 id= "contact" 
//                 name="contact" 
//                 placeholder="Your contact number ..." 
//                 value={newContact || ""} 
//                 onChange={handleInputChange} 
//                 />

//                 <input type ="submit" value={id ? "Update" : "Save"} />
//             </form>
//         <h2>Add Edit</h2>
//     </div>
//     );
// };
// }