import { useNavigate } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
import { MdMode } from "react-icons/md";
import '../styles/Home.css';

export default function Home() {

    let navigate = useNavigate();

    return (
        <div className='home-section'>
            <h1>Where to?</h1>
            <div className="button-container">
                <button onClick={() => { navigate("/card-editor") }}>Card Editor <MdMode /></button>
                <button onClick={() => { navigate("/card-viewer") }}>Card Viewer <AiFillEye /></button>
            </div>
        </div>
    )
}