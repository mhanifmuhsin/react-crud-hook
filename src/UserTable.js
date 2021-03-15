import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {props.users.length > 0 ? (
                    // jika ada lakukan ini
                    props.users.map(user => {
                        // destruktur
                        const { id, name, username } = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>
                                    <button onClick={() => props.deleteUser(id)}>Delete</button>
                                    <button onClick={() => props.editUser(id,user)}>Edit</button>
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