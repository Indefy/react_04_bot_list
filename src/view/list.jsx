import React from 'react';
import { Card } from "./card";

export function List({ data }) {
  return (
    <div className="cards-list">
      <UserList data={data} />
    </div>
  );
}

export function UserList({ data }) {
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id} className="card-item">
          <Card {...user} />
        </li>
      ))}
    </ul>
  );
}