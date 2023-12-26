
function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Il seguente approccio è funzionale
         ma causa il refresh dell'intera pagina, 
         si chiede una nuova richiesta al server che 
         sta facendo funzionare il progetto,
          causa il restart della react application</p>
      <p>Go to <a href="/SecondPage">SecondPage</a></p>
    </>
  );
}
export default HomePage;
