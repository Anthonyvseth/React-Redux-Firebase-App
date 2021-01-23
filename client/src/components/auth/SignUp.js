import React, {useState} from 'react'

const SignUp = () => {
    const [form, setForm] = useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleChange = (e) => {
        console.log("SIGNup ID", e.target.id)
        console.log("SIGNup VALUE", e.target.value)
        const fieldId = e.target.id
        const fieldValue = e.target.value
        switch (fieldId) {
            case 'email':
                setEmail(fieldValue)
                break;
            case 'password':
                setPassword(fieldValue)
                break;
            case 'firstname':
                setFirstName(fieldValue)
                break;
            case 'lastname':
                setLastName(fieldValue)
                break;
            default:
                console.log('error')
        }
    }
        

    const handeSubmit = (e) => {
        e.preventDefault()
        console.log(email, password, firstName, lastName)
    }

    return (
        <div className='container'>
            <form className='white' onSubmit={handeSubmit}>
                <h5 className='grey-tex text-darken-3'>Sign Up</h5>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={handleChange} />    
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={handleChange} />    
                </div>
                <div className='input-field'>
                    <label htmlFor='firstname'>First Name</label>
                    <input type='text' id='firstname' onChange={handleChange} />    
                </div>
                <div className='input-field'>
                    <label htmlFor='lastname'>Last Name</label>
                    <input type='text' id='lastname' onChange={handleChange} />    
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
