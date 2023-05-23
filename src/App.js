import logo from './logo.svg';
import './App.css';
import Counter from "./component/chap03_state/Counter";

function App() {
    //
    // const looping = () => {
    //     const helloList = [];
    //
    //     for (let i = 0; i < 5; i++) {
    //         helloList.push(<SayHello />);
    //     }
    //
    //     return helloList;
    // };

    // jsx 문법에서는 스크립트 코드를 직접 사용 불가능
    // {} 안에서 함수호출문이나 변수참조를 할 수 있음.
  return (
      <>
        <Counter />
      </>
  );

}

export default App;
