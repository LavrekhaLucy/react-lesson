import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {

  return (
    <>
        <MyComponent text={'Title 1'}>
            Lorem ipsum dolor sit.
        </MyComponent>
        <MyComponent text={'Title 2'}/>
        <MyComponent text={'Title 3'}/>
        {/*{MyComponent({text: 'Hello Okten 2'})}*/}

    </>
  )
}

export default App
