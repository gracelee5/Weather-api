import React,{useState} from "react";
import './index.css';
import axios from 'axios';

const Weather = ({ location })=>{
    const [inputValue, setInputValue] = useState(location);
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const searchWeather = async () => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=79b2033146e6b8a5efba94c36166a416`);


      // API 응답을 받아와서 상태에 저장하거나 다른 처리를 수행할 수 있습니다.
      setWeatherData(response.data);
      setError(null);

      // 예제로 콘솔에 출력
      console.log(response.data);
    } catch (error) {
      setError('날씨 정보를 가져오는 중 오류가 발생했습니다.');
      console.error('Error fetching weather data:', error.message);
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      // 엔터 키를 누르면 searchWeather 함수 호출
      searchWeather();
    }
  };

  return (
    <div className="inputfield">
      {/* 입력 필드 */}
      <input
        type="text"
        value={inputValue}  // 입력 필드의 값은 상태(state)에 의해 결정됩니다.
        onChange={handleInputChange}  // 입력 값이 변경될 때 호출되는 함수
        placeholder="도시를 입력하세요"
        onKeyPress={handleEnterKeyPress} 
      />
      <div className="output">
        {weatherData && (
            <div>
            <p className="city">{weatherData.name}</p>
            <p className="temperature">{Math.round((weatherData.main.temp - 273.15) * 10) / 10}°C</p>
            <p className="weather-condition">{weatherData.weather[0].description}</p>
            </div>
        )}
        </div>

      {/* 에러 메시지 출력 */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

    </div>
  );
};

export default Weather;