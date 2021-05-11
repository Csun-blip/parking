
import React, { useState } from 'react';
import {auth,db} from '../Components/fire';
import {Link} from 'react-router-dom';
import '../Components/Form/Login.css'

const SignUp = (props) => {
    const [name, setName] = useState(' ');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const SignUp = e =>{
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email,password).then((cred) =>{
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name:name,
                Email:email,
                Password: password
            }).then(() =>{
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                props.history.push('/');
            }).catch(err =>setError(err.message));
        }).catch(err =>setError(err.message));
    }
    return (
        <div>
            <div className="login_container">
            <h1>Sajilo-Parking</h1>
                <div className="login_form">
                <h2 style={{marginTop:"20px"}}>Sign up</h2>
                <form onSubmit={SignUp}>
                    <div className="mb-3">
                        <label htmlFor="name" >Name</label>
                        <input type="text" className="form-control" id="user"required onChange={e =>{setName(e.target.value)}} value={name}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" >Email</label>
                        <input type="email" className="form-control" required onChange={e =>{setEmail(e.target.value)}} value={email}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" >Password</label>
                        <input type="password" className="form-control" required onChange={e =>{setPassword(e.target.value)}} value={password}/>
                    </div>
                    <button className="btn-signup" >Sign Up</button>
                </form>
                {error && <div className="error-msg">{error}</div>}
               
            <span className="register_text">Already have an account?
                <Link to="/" style={{color:"yellow", textDecoration:'none'}}> Sign in Here!</Link>
            </span>
                </div>
            </div>
        </div>
    )
}
export default SignUp;
