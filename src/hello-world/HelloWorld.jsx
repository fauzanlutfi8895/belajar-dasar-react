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
  return <h1 style={{ color: "red", backgroundColor: "aqua" }}>{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "Selamat Belajar React dari Coding with Fauzan";
  const style = {
    color: "white",
    backgroundColor: "brown",
  };
  return <p style={style}>{text.toUpperCase()}</p>;
}
