export default function ButtonContainer({ tomatoes, setTomatoes }) {
  return (
    <div className="buttons-container">
      <div
        onClick={() => setTomatoes(tomatoes.slice(0, -2))}
        className="button"
      >
        -
      </div>
      <div onClick={() => setTomatoes(tomatoes + "🍅")} className="button">
        +
      </div>
    </div>
  );
}
