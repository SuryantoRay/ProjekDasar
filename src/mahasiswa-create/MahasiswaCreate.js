import './MahasiswaCreate.css';
import { useState } from 'react';

const MahasiswaCreate = (props) => {
    const [getInputMahasiswa, setInputMahasiswa] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const newMahasiswa = {
            id: Math.floor(Math.random() * 100) + 1,
            name: getInputMahasiswa
        }

        props.onCreateMahasiswa(newMahasiswa)
        setInputMahasiswa('')
    }

    const handleInputMahasiswa = (event) => {
        setInputMahasiswa(event.target.value)
        console.log(getInputMahasiswa)
    }

    return (
        <form className='todo-from' onSubmit={handleSubmit}>
            <input type='text' value={getInputMahasiswa} onChange={handleInputMahasiswa}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default MahasiswaCreate