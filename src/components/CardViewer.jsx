import { useState } from "react";
import styled from 'styled-components';

const Card = styled.div`
    height: 25rem;
    width: 20rem;
    border: 2px solid black;
`

function CardViewer() {

    const [displayedCard, setCardToDisplay] = useState('');

    return (
        <div className="viewer-section">
            <Card>
                
            </Card>
        </div>
    )
}

export default CardViewer;