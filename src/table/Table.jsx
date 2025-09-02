import Row from "./Row";

const Table = () => {
  return (
    <table border={1}>
      <tbody>
        {/* Menambahkan id membuatnya menjadi pure component dibandingkan menggunakan counter++ */}
        <Row id="1" text="satu" />
        <Row id="2" text="dua" />
        <Row id="3" text="tiga" />
      </tbody>
    </table>
  );
};

export default Table;
