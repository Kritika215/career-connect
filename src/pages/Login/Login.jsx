import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Login.css";

function Login(){

    const [email,setEmail]=useState("");

    const [password,setPassword]=useState("");

    function handleLogin(e){

        e.preventDefault();

        console.log(email);

        console.log(password);

    }

    return(

        <div className="login-container">

            <form
            className="login-card"
            onSubmit={handleLogin}
            >

                <h1>Login</h1>

                <Input

                type="email"

                placeholder="Enter Email"

                value={email}

                onChange={(e)=>setEmail(e.target.value)}

                />

                <Input

                type="password"

                placeholder="Enter Password"

                value={password}

                onChange={(e)=>setPassword(e.target.value)}

                />

                <Button

                text="Login"

                type="submit"

                />

            </form>

        </div>

    )

}

export default Login;