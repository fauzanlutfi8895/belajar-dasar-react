//Nested Components: Namanya harus children, tidak berlaku untuk array function
export default function Container({ children }) {
  return (
    <div>
      <h1>Coding with Fauzan</h1>
      {children}
      <footer>
        <p>2025 Coding with Fauzan</p>
      </footer>
    </div>
  );
}
