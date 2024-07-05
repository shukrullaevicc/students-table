import AppContext from '../../../context/store';
import { useContext } from 'react';
import './ExpelledStudents.css';

const ExpelledStudents = () => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <div className='students'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Expelled</th>
          </tr>
        </thead>
        <tbody>
          {state.students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>
                <img src={student.avatar} alt="" />
              </td>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.email}</td>
              <td>Excluded</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExpelledStudents