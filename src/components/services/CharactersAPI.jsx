import { useState, useEffect } from "react";

export const CharactersAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Пробуем несколько API endpoints
        const apiUrls = [
          'https://swapi.py4e.com/api/people/', // Основной рабочий
          'https://swapi.dev/api/people/',      // Запасной (может не работать)
          'https://akabab.github.io/starwars-api/api/all.json' // Альтернативный источник
        ];
        
        let lastError;

        for (const url of apiUrls) {
          try {
            console.log('Trying API:', url);
            const response = await fetch(url);
            
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const jsonData = await response.json();
            console.log('Success with API:', url);
            
            // Форматируем данные для единообразия
            const formattedData = url.includes('akabab') 
              ? { results: jsonData.slice(0, 10), count: jsonData.length } 
              : jsonData;
              
            setData(formattedData);
            return;
            
          } catch (err) {
            console.log('Failed with API:', url, err.message);
            lastError = err;
          }
        }
        
        throw lastError || new Error('All APIs failed');
        
      } catch (err) {
        console.error('All API attempts failed:', err);
        setError(err.message);
        useLocalDataFallback();
      } finally {
        setLoading(false);
      }
    };

    const useLocalDataFallback = () => {
      const localData = {
        count: 3,
        results: [
          {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male"
          },
          {
            "name": "Darth Vader",
            "height": "202", 
            "mass": "136",
            "hair_color": "none",
            "skin_color": "white",
            "eye_color": "yellow",
            "birth_year": "41.9BBY",
            "gender": "male"
          },
          {
            "name": "Leia Organa",
            "height": "150",
            "mass": "49",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "19BBY",
            "gender": "female"
          }
        ]
      };
      setData(localData);
    };

    fetchData();
  }, []);

  return { data, loading, error };
};