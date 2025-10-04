import { Toaster } from "react-hot-toast";
import Button from "./components/Button";
import ColorButton from "./components/ColorButton";
import MyUseState from "./components/MyUseState";
import Users from "./components/Users";

function App() {
  // const handleClick = (name: string) => {
  //   console.log(`Clicked ${name}`);
    
  // };
  // const handleClick2 = () => alert("Clicked button 3!");

  return (
    <>
      <div style={ {marginLeft: "100px"}}>Hello World</div>
      {/* <ColorButton label="Random Color" onClick={() => handleClick("ColorBtn")} /> */}

      {/* <Button label="Click Me 1" onClick={() => handleClick("hoadv")} /> */}
      {/* <Button label="Click Me 3" onClick={handleClick2} />
      <MyUseState />
      <Toaster /> */}
      <Users />
    </>
  );
}

export default App;
