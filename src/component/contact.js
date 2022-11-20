//rafce
import React, {useState} from 'react'


const Contact = () => {

    const [user, setUser] = useState(
        {name: '', 
        email: ''}
    )

    const getUserData = (e) => {
        const {name, value} = e.target;
        setUser((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const postData = async (e) => {
        e.preventDefault();
        const {name, email} = user;
        if(name && email){
            const res = await fetch('https://sign-me-up-bb363-default-rtdb.firebaseio.com/userData.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, email
                })
            })
            if(res){
                setUser({name: '', email: ''})
                alert('Data Stored')
            }
        } else {
            alert('Please fill the data')
        }
    }

  return (
    <div className='form' method="POST"> 
        {/* <img src="https://www.flaticon.com/free-icons/astronaut" alt="logo" /> */}
        Enter your name:
        <br />
        <input type="text" 
        name="name" 
        // placeholder='Full name' 
        onChange={getUserData} 
        value={user.name}/>
        <br />
        Enter your email:
        <br />
        <input type="text" 
        name="email" 
        // placeholder='Email address' 
        onChange={getUserData} 
        value={user.email}/>
        <button onClick={postData}>Submit</button>
    </div>
  )
}

export default Contact