import './MahasiswaList.css';

const MahasiswaList = (props) => {
    console.log(props)
    return (
        <ul>{
            props.dataMahasiswa.map((mahasiswa) => {
                return <li key={mahasiswa.id}>{mahasiswa.name}</li>
            }) 
        }</ul>
    )
}

export default MahasiswaList