import React, {useState} from 'react'

const OnChange = () => {
    const [user, setUser] = useState('');
    const handler =  e =>{
        setUser(e.target.value)
    };
  return (
    <div>
      <center>
        <input type='txet' placeholder='UserName' value={user} name='user' 
         onChange={handler}
        /><br/>
        {user}
      </center>
    </div>
  )
}

export default OnChange;
