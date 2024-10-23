import React from 'react'

const Register = () => {
  return (
    <>
    <main className='h-[50vh] w-full'>
        <div className='border-2 border-black rounded-md w-fit py-16 px-5 absolute top-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='text-center '>
            <h1 className='text-3xl my-4 underline'>Register</h1>
            <form className='space-y-4' action="">
            <div className="input grid grid-cols-3">
                    <label className='text-xl' htmlFor="">Username :</label>
                    <input className='outline-none px-2 py-1 col-span-2 rounded-md border-2' type="text" placeholder='Developer' />
                </div>

                <div className="input grid grid-cols-3">
                    <label className='text-xl' htmlFor="">Email :</label>
                    <input className='outline-none px-2 py-1 col-span-2 rounded-md border-2' type="text" placeholder='name@hex.com' />
                </div>
                <div className="input grid grid-cols-3">
                
                    <label className='text-xl' htmlFor="">Password :</label>
                    <input className='outline-none px-2 py-1 col-span-2 rounded-md border-2' type="password" placeholder='********' />
                </div>
                <button type='submit' className=' border-[1px] rounded-lg text-xl px-2 py-1'>Login</button>
            </form>
            <div className='text-center'>
                <p>-----------or-----------</p>
                <h2>Already have an account <a className='text-blue-600 font-semibold' href="/login">Login</a></h2>
            </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Register