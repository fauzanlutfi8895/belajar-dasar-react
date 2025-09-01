export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld() {
  return <h1>Hello world</h1>;
}

function ParagraphHelloWorld() {
  return <p>Selamat Belajar React dari Coding with Fauzan</p>;
}
