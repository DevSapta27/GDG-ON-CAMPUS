import React from 'react'

const Login = () => {
  return (
    <>
    <main>
        <div>
            <h1>Login</h1>
            <form action="">
                <div className="input">
                    <label htmlFor="">Email :</label>
                    <input type="text" placeholder='name@hex.com' />
                </div>
                <div className="input">
                    <label htmlFor="">Password :</label>
                    <input type="password" placeholder='********' />
                </div>
            </form>
        </div>
    </main>
    </>
  )
}

export default Login