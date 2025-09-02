const SayHelloForm = () => {
  return (
    <div>
      <form>
        <input type="text" id="input_name" />
        {/* Ini DOM Manipulation, tapi percuma menggunakan react jika masih menggunakan DOM Manipulation  */}
        <button
          onClick={e => {
            e.preventDefault();
            const name = document.getElementById("input_name").value;
            //Tidak masalah jika id nya duluan di ambil, sedangkan component nya dibawah karena dibaca dari document(seluruh isi file)
            document.getElementById("text_hello").innerText = `Hello ${name}`; //innerText adalah property, hanya bisa diberikan nilai dengan cara =
          }}
        >
          Say Hello
        </button>
      </form>
      <h1 id="text_hello">Hello World</h1>
    </div>
  );
};

export default SayHelloForm;
