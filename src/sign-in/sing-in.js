import React from 'react';
import './sing-in.css';

class SignIn extends React.Component {
   render() {
      return(
         <div className='display-center'>
            <section className='sign-in-heading'>
               <h2>Login</h2>
            </section>
            <form className='sign-in-form'>
               <label htmlFor='username' className='sign-in-form-labels'>Username</label>
               <input type='text' maxLength='15' id='username'></input>
               <label htmlFor='password' className='sign-in-form-labels'>Password</label>
               <input type='text' maxLength='15' id='password'></input>
            </form>
         </div>
      )
   }
}
export default SignIn