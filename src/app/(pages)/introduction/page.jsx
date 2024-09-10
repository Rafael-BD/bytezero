import GlowEffect from "@/components/glowEffect";
import { styled } from "../../../../stitches.config";

const Text = styled('p', {
    color: '$primary',
    fontFamily: 'var(--font-geist-mono)',
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

const TextColorGradient = styled(Text, {
    background: 'linear-gradient(45deg, #ff0000, #800080)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    backgroundSize: '30%',
});

const Header = styled('header', {
    maxWidth: '45%',

    '@media (max-width: 768px)': {
        maxWidth: '100%',
    },
});

export default function Introduction() {
    return (
        <div>
            <main className="page">
                <Header>
                    <Text size={3} as={'h1'}>Bem-vindo a plataforma</Text> 
                    <TextColorGradient size={3} as={'h1'}>ByteZero!</TextColorGradient>
                    <Text size={1}>Aqui você encontra os melhores cursos de tecnologia.</Text>
                </Header>
                <GlowEffect color="purple" position={{ top: '10%', left: '20%' }} size={400} />
            </main>
        </div>
    );
}
