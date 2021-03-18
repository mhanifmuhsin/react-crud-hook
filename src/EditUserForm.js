import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username && user.email && user.division) props.updateUser(user);
    }
    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="six columns">
                        <label>Name</label>
                        <input className="u-full-width" type="text" name="name" value={user.name} onChange={handleChange} />
                        <label>Username</label>
                        <input className="u-full-width" type="text" name="username" value={user.username} onChange={handleChange} />
                        <label>Email</label>
                        <input className="u-full-width" type="email" name="email" value={user.email} onChange={handleChange} />
                        <label for="division">Division</label>
                        <select class="u-full-width" id="division" name="division" value={user.division} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Database Administrator">Database Administrator</option>
                            <option value="Back End Developer">Back End Developer</option>
                            <option value="Front End Developer">Front End Developer</option>
                        </select>
                    </div>
                    <div className="six columns">
                        <label>Gender</label>
                        <label>
                            <input className="u-cf" type="radio" name="gender" value={user.email} onChange={handleChange} />Male
                            <input className="u-cf" type="radio" name="gender" value={user.email} onChange={handleChange} />Female
                        </label>
                        <label for="message">Message</label>
                        <textarea class="u-full-width" placeholder="Hi Dave …" id="message"></textarea>
                        <label class="send-yourself-copy">
                            <input type="checkbox" />
                            <span class="label-body">Send a copy to yourself</span>
                        </label>
                        <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
                        <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditUserForm;
