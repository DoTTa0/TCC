import { Link } from "react-router-dom";
import styled from "styled-components";

// Estilizando a tabela e suas células
export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
  padding: 10px 0px;
  border-radius: 5px;
`;

export const TableRow = styled.tr`
    background-color: white;
  /* &:nth-child(even) {
    background-color: #f9f9f9;
  } */
`;

export const TableHeaderCell = styled.th`
  border-bottom: .5px solid #dddddd;
  text-align: left;
  padding: 15px; /* Adicionando padding ao cabeçalho */
  color: #334D6E;
  font-weight: normal;
`;

export const TableCell = styled.td`
  border-bottom: 1px solid #dddddd;
  text-align: left;
  padding: 20px;
  color: #707683;
`;

export const TableCellPatientName = styled.td`
  border-bottom: 1px solid #dddddd;
  text-align: left;
  padding: 20px;
  color: #323C47;
  font-weight: 550;
`;

interface TableCellCheckinProps {
  checkin: boolean;
}

export const TableCellCheckin = styled.div<TableCellCheckinProps>`
  background-color: ${({checkin}) => checkin ? '#2ED47A' : 'red' };
  color: white;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const IconLink = styled(Link)`
  color: #707683;
  text-decoration: none;
`