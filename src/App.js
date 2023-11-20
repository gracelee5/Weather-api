import Weather from './weather';
const App=()=> {

  const currentLocation = "Seoul"; // 예제로 현재 위치를 "Seoul"로 설정

  return (
    <div className="App">
      
      <Weather location={currentLocation}/>
    </div>
  );
}

export default App;
