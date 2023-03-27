import styled from 'styled-components';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export const Container = styled.div`
padding: 16px;
`;

export const StyledTableContainer = styled(TableContainer)`
overflow: auto;
`;

export const StyledTable = styled(Table)`
min-width: 650px;
border-collapse: collapse;
`;

export const StyledTableCell = styled(TableCell)`
font-weight: bold;
color: transparent;
`;

