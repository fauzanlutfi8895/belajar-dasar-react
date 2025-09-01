export default function HelloWorld() {
  //Spread syntax
  const props = {
    text: "Hai Upiii",
  };
  return (
    <div>
      <HeaderHelloWorld {...props} /> {/* Attribut yg muncul dari parameter child nya, kalau atribut dihapus tetap muncul sesuai isi props di child*/}
      <ParagraphHelloWorld />
    </div>
  );
}

//Menambah props
function HeaderHelloWorld({ text }) {
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
