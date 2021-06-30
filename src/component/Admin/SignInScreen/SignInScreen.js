import React from 'react';


const SigninScreen = () =>{
    return (
        <div>
              <form>
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password"/>
                <button type="submit">Sign In</button>
            </form>

        </div>
    )
}

export default SigninScreen;