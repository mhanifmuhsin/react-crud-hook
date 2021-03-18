import React, { useState } from 'react';

const AddUserFrom = (props) => {
    const initUser = { id: null, name: '', username: '', email: '', division: '', gender: 0, message: '', sendcopy: false };
    const [user, setUser] = useState(initUser);


    const handleChange = e => {
        props.addUser(user);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username && user.email && user.division && user.message) {
            handleChange();
        }
        setUser(initUser);
    }
    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="six columns">
                        <label>Name</label>
                        <input className="u-full-width" type="text" name="name" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
                        <label>Username</label>
                        <input className="u-full-width" type="text" name="username" value={user.username} onChange={e => setUser({ ...user, username: e.target.value })} />
                        <label>Email</label>
                        <input className="u-full-width" type="email" name="email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
                        <label htmlFor="division">Division</label>
                        <select className="u-full-width" id="division" name="division" value={user.division} onChange={e => setUser({ ...user, division: e.target.value })}>
                            <option value="">Select</option>
                            <option value="Database Administrator">Database Administrator</option>
                            <option value="Back End Developer">Back End Developer</option>
                            <option value="Front End Developer">Front End Developer</option>
                        </select>
                    </div>
                    <div className="six columns">
                        <label>Gender</label>
                        <label>
                            <input className="u-cf" type="radio" name="gender" checked={user.gender === 0} onChange={e => setUser({ ...user, gender: 0})} />Male
                            <input className="u-cf" type="radio" name="gender" checked={user.gender === 1} onChange={e => setUser({ ...user, gender: 1 })} />Female
            </label>
                        <label htmlFor="message">Message</label>
                        <textarea className="u-full-width" placeholder="Hi Dave …" id="message" name="message" value={user.message} onChange={e => setUser({ ...user, message: e.target.value })}></textarea>
                        <label className="send-yourself-copy">
                            <input type="checkbox" checked={user.sendcopy} onChange={e => setUser({ ...user, sendcopy: e.target.checked })} />
                            <span className="label-body">Send a copy to yourself</span>
                        </label>
                        <button className="button-primary" type="submit" onClick={handleSubmit}>Add user</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default AddUserFrom;