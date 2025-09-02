import React from "react";

//Jika hanya "text" tanpa kurung kurawal, tidak akan mengirim parameter ke atribut saat dipanggil
const AlertButton = ({ text, message }) => {
  function handleClick() {
    alert(message); //kalau pakai kurung kurawal hasilnya jadi terdeteksi object, isi message nya tidak terurai
  }
  return <button onClick={handleClick}>{text}</button>;
};

export default AlertButton;
