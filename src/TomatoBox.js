export default function TomatoeBox({ tomatoes }) {
  return (
    <div className="tomato-box">
      <h1 style={{ fontSize: "15px" }}>
        {!tomatoes ? "No tomatoes" : tomatoes}
      </h1>
    </div>
  );
}
