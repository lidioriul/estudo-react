import React, { Component } from 'react'
import UserForm from './UserForm'

class User extends Component {
    render() {
        let list = [
            {
                nome: "Lidio",
                email: "lidioriul@gmail.com"
            },
            {
                nome: "Antonio",
                email: "antonio@gmail.com"
            }
        ]

        return (
            <div>
                <UserForm></UserForm>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    {list.map((iten) => {
                        return <tr>
                            <td>
                                {iten.nome}
                            </td>
                            <td>
                                {iten.email}
                            </td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}

export default User;