import React, { useState } from 'react';

const AddUserFrom = (props) => {
    const initUser = { id: null, name: '', username: '', email:'' };
    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username && user.email) {
            handleChange(e, props.addUser(user));
        }
        setUser(initUser);
    }
    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" name="name" value={user.name} onChange={handleChange} />
            <label>Username</label>
            <input className="u-full-width" type="text" name="username" value={user.username} onChange={handleChange}/>
            <label>Email</label>
            <input className="u-full-width" type="email" name="email" value={user.email} onChange={handleChange}/>
            <button className="button-primary" type="submit" onClick={handleSubmit}>Add user</button>
        </form>
    )
}

export default AddUserFrom;