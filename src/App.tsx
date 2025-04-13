import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {

  return (
    <>
        <MyComponent text={'Hello Okten 1'}/>
        <MyComponent text={'Hello Okten 2'}/>
        <MyComponent text={'Hello Okten 3'}/>
        {/*{MyComponent({text: 'Hello Okten 2'})}*/}

    </>
  )
}

export default App
