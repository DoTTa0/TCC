import { FaRegEdit } from "react-icons/fa";
import { columns } from "./DataTables";
import { TableCell, TableCellName, TableContainer, TableHead, TableHeaderCell, TableRow } from "./styles";

// Definição de tipos para as propriedades do componente de tabela
interface TableProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
  }

const UsersTableComponent: React.FC<TableProps> = ({ data }) => {
    return (
      <TableContainer>
        <TableHead>
        <TableRow>
          {columns.map((column, index) => (
            <TableHeaderCell key={index}>{column.name}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHead>   
        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => {

                if(column.name === 'Nome') return <TableCellName key={colIndex}>{row[column.value]}</TableCellName>
                
                if(column.name === 'Ação') return <TableCell width={'5%'} key={colIndex}><FaRegEdit fontSize={25} /></TableCell>

                return <TableCell key={colIndex}>{row[column.value]}</TableCell>
              }
              )}
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    );
  };
  
  export default UsersTableComponent;