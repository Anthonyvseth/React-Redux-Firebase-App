import React, {useState} from 'react'

const SignIn = () => {
    const [form, setForm] = useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        console.log("SIGN IN ID", e.target.id)
        console.log("SIGN IN VALUE", e.target.value)
        const fieldId = e.target.id
        const fieldValue = e.target.value
        switch (fieldId) {
            case 'email':
                setEmail(fieldValue)
                break;
            case 'password':
                setPassword(fieldValue)
                break;
            default:
                console.log('error')
        }
    }
        

    const handeSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <div className='container'>
            <form className='white' onSubmit={handeSubmit}>
                <h5 className='grey-tex text-darken-3'>Sign In </h5>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={handleChange} />    
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={handleChange} />    
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
