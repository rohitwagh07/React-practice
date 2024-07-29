const App=() =>{

  const myArray =['banana','apple','kiwi','orange'];
  return(
    <>
    <h1>Hello world</h1>
    {myArray.map((item) => <p>{item}</p>)}

    
    </>
  )
}
export default App;