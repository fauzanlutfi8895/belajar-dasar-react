import "./HelloWorld.css"; //harus memakai .css

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
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "Selamat Belajar React dari Coding with Fauzan";
  return <p className="content">{text.toUpperCase()}</p>;
}
