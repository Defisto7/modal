import React from 'react';
import Card from '../UI/Card';
import s from './UsersList.module.css'

export default function UserList(props) {
  return (
    <Card className={s.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
