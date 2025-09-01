export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld() {
  const text = "Hello world";
  return <h1>{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "Selamat Belajar React dari Coding with Fauzan";
  return <p>{text.toUpperCase()}</p>;
}
