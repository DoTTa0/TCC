import { FaCircle, FaRegEdit } from "react-icons/fa";
import { columns } from "./DataTables";
import { TableCell, TableCellCheckin, TableCellPatientName, TableContainer, TableHead, TableHeaderCell, TableRow } from "./styles";

// Definição de tipos para as propriedades do componente de tabela
interface TableProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
  }

const MedicalProcedureTableComponent: React.FC<TableProps> = ({ data }) => {
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

                if(column.name === '') return <TableCell width={'1%'} key={colIndex}><FaCircle fontSize={25} color="green"/></TableCell>

                if(column.name === 'Paciente') return <TableCellPatientName key={colIndex}>{row[column.value]}</TableCellPatientName>

                if(column.name === 'Check-in') return <TableCell key={colIndex}><TableCellCheckin checkin={row[column.value]}>{row[column.value] ? 'Presente' : 'Ausente'}</TableCellCheckin></TableCell>
                
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
  
  export default MedicalProcedureTableComponent;