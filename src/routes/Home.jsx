import { useNavigate } from 'react-router-dom';

export default function Home() {

    let navigate = useNavigate();

    return (
        <div className='home-section'>
            <h1>Pick your poison</h1>
            <button onClick={() => {navigate("/card-editor")}}>Card Editor</button>
            <button onClick={() => {navigate("/card-viewer")}}>Card Viewer</button>
        </div>
    )
}