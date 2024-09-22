export default function Input({ type, initial_input }) {
  return (
    <label>
      {initial_input[type].name}
      <input type="number" />
    </label>
  );
}
