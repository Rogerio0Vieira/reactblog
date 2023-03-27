import { useState, useEffect } from 'react';
import { Container, StyledTable, StyledTableCell, StyledTableContainer} from './styles';
import {TableHead, TableRow, TableBody, TableCell} from '@mui/material';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUsers() {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const UserList = () => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUsers() {
      const data = await fetchUsers();
      setUsers(data);
    }
    getUsers();
  }, []);
  
  return (
    <Container>
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </Container>
  );
};