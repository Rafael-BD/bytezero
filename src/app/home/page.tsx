import React from 'react';
// import colors from '../style/colors';
import { styled } from '../../../stitches.config';

const Text = styled('p', {
    fontFamily: '$geistSans',
    color: '$hiContrast',

    variants: {
        size: {
            1: {
                fontSize: '$1',
            },
            2: {
                fontSize: '$2',
            },
            3: {
                fontSize: '$3',
            },
        },
    },
});

const HomePage = () => {
    return (
        <div>
            <Text size="3">Bem-vindo à Home Page</Text>

            <h1>Bem-vindo à Home Page</h1>
            <p>Esta é uma página simples em NextJS.</p>
        </div>
    );
};

export default HomePage;