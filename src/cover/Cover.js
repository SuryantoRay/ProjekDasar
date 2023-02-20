import { useState } from 'react';
import './Cover.css';
import MahasiswaList from '../mahasiswa-list/MahasiswaList';
import MahasiswaCreate from '../mahasiswa-create/MahasiswaCreate';

const Cover = () => {
    const [getMahasiswa, setMahasiswa] = useState([
        {id: '1', name: 'Suryanto'},
        {id: '2', name: 'Naldo'},
        {id: '3', name: 'Ervina'},
        {id: '4', name: 'Mikhael'},
    ])

    const eventCreateMahasiswa = (mahasiswa) => {
        setMahasiswa(getMahasiswa.concat(mahasiswa))
    }

    return (
        <div>
            <h1>Daftar Mahasiswa</h1>
            <MahasiswaCreate onCreateMahasiswa={eventCreateMahasiswa}/>
            <MahasiswaList dataMahasiswa={getMahasiswa} />
        </div>
    )
}

export default Cover