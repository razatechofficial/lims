// app/users/UserList.tsx
import React from "react";

// Simulate delay using a promise
const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function UserList() {
  // Simulate a delay of 3 seconds
  await simulateDelay(3000);

  return (
    <ul>
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>
    </ul>
  );
}

export default UserList;
