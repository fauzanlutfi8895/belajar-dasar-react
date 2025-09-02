import React from "react";

//Jika hanya "text" tanpa kurung kurawal, tidak akan mengirim parameter ke atribut saat dipanggil
const AlertButton = ({ text, message }) => {
  //   function handleClick() {
  //     alert(message); //kalau pakai kurung kurawal hasilnya jadi terdeteksi object, isi message nya tidak terurai
  //   }


  //Object event (berguna mencari info tentang event component)
  function handleClick(e) {
    console.info(e); //pakai e.target untuk mencari tau element nya
    alert(message);
  }
  return <button onClick={handleClick}>{text}</button>;
};

export default AlertButton;
