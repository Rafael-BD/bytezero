import { styled } from "../../stitches.config";

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



export default function Home() {
  return (
    <div>
      <main className="page">
        <Text size={3} as={'h1'}>Bem-vindo a plataforma ByteZero</Text>
        <Text size={2}>Aqui você encontra os melhores cursos de tecnologia.</Text>
      </main>
    </div>
  );
}
