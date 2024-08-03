// src/AnimatedCursor.js

import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
    from {
        transform: translate(-50%, -50%);
    }
    to {
        transform: translate(-50%, -50%) scale(1.5);
    }
`;

const Cursor = styled.div`
    width: 5px;
    height: 5px;
    padding:16px;
    background-color:rgba(20,20,20,.4);
    border:3px solid var(--gray);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    transform: translate(-50%, -50%);
    animation: ${props => props.isActive ? move : ''} 0.2s ease-in-out;

    :hover {
        background-color:blue;
    }
`;

const AnimatedCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const activateCursor = () => setIsActive(true);
        const deactivateCursor = () => setIsActive(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', activateCursor);
        window.addEventListener('mouseup', deactivateCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', activateCursor);
            window.removeEventListener('mouseup', deactivateCursor);
        };
    }, []);

    return (
        <Cursor
            id='custom-cursor'
            isActive={isActive}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default AnimatedCursor;
