import colors from '@/style/colors';
import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
    theme: {
        colors: {
            primary: colors.primary,
            secondary: colors.secondary,
            tertiary: colors.tertiary,
            background: colors.background,
            foreground: colors.foreground,
        },
        fontSizes: {
            1: '24px',
            2: '28px',
            3: '32px',
        },
    },
});
