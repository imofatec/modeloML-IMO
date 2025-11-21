export default function FormRow({ children, cols = 1 }) {
  return (
    <div
      className={
        cols === 1
          ? "w-full px-5"
          : "flex w-full px-5 gap-4 items-start"
      }
    >
      {children}
    </div>
  );
}
