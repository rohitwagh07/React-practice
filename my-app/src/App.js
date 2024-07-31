// import Calculate from './components/Calculate';

const App=() =>{

  const myArray =['banana','apple','kiwi','orange'];

  const Numbersone = [2,4,6,8];
  const numberstwo = [10,12,14,16];
  const combinednumbers = [...Numbersone,...numberstwo];
  return(
    <>
    <h1>Hello world</h1>
    {myArray.map((item) => <p>{item}</p>)}
    {combinednumbers.map((value)=><p>{value}</p>)}
    
    </>
  )
}
export default App;