import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';

const TopBar = styled.div`
    background-color: ${colors.foreground};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
`;

const HomePage = () => {
    return (
        <div>
            <TopBar>
                <h1>Top Bar</h1>
            </TopBar>

            <h1>Bem-vindo à Home Page</h1>
            <p>Esta é uma página simples em React.</p>
        </div>
    );
};

export default HomePage;