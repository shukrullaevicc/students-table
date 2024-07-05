import { AiOutlineUserDelete } from "react-icons/ai"; 
import axios from '../../../api';
import './Students.css';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../../context/store';

const Students = () => {
  const [state, dispatch] = useContext(AppContext);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getStudents() {
      try {
        let response = await axios("/users?page=1");
        setStudents(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    getStudents();
  }, []);

  const changeAndAddToTheListOfFallen = (studentId) => {
    const updatedStudents = students.filter(student => student.id ==+ studentId);
    dispatch({ type: 'ADD_TO_THE_LIST_OF_FALLEN', students: updatedStudents });
  }

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
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>
                <img src={student.avatar} alt="" />
              </td>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.email}</td>
              <td>
                <button onClick={() => changeAndAddToTheListOfFallen(student.id)} className='students__btn'>
                  <AiOutlineUserDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;