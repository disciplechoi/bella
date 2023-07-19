export async function fetchPlants() {
  const headers = {
		'X-RapidAPI-Key': '4c995cd038msh932b7d565251d43p15ba39jsn617265e9a116',
		'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
	}
  
  const response = await fetch('https://house-plants2.p.rapidapi.com/all-lite',{
    headers: headers,

  });

  const result = await response.json();

  return result;
}