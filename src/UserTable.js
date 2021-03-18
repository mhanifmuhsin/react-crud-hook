import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Division</th>
                    <th>Gender</th>
                    <th>Message</th>
                    <th>Send Copy</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {props.users.length > 0 ? (
                    // jika ada lakukan ini
                    props.users.map(user => {
                        // destruktur
                        const { id, name, username, email, division, gender, message, sendcopy } = user;
                        console.log(user.name, user.sendcopy)
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{division}</td>
                                <td>{(gender === 0) ? 'Male' : 'Female'}</td>
                                <td>{message}</td>
                                <td>{sendcopy ? 'Yes' : 'No'}</td>

                                <td>
                                    <button onClick={() => props.deleteUser(id)}>Delete</button>
                                    <button onClick={() => props.editUser(id, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : ( //jika tidak ada lakukan ini
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )
                }

            </tbody>
        </table>
    )
}

export default UserTable;