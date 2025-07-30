function Main({ children }) {
  return (
    <div className="overflow-scroll">
      <main className="mx-auto max-w-3xl">{children}</main>
    </div>
  );
}

export default Main;
