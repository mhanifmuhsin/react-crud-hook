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
                {/* cek data terlebih dahulu */}
                {props.users.length > 0 ? (
                    // jika ada lakukan ini
                    props.users.map(user => {
                        // destruktur
                        const { id, name, username } = user;
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>
                                    <button>Delete</button>
                                    <button>Edit</button>
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