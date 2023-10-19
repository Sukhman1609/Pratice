
import axios from 'axios'

export const BollywoodData= () => {
    axios.get('http://localhost:4000/api/bollywood')
  .then(response => console.log( 'Bollywood:',response.data))
  .catch(error => console.error('Error:', error));
return (
    <h1>Fetching the Data</h1>
)
}
 

export const HollywoodData= () => {
    axios.get('http://localhost:4000/api/hollywood')
  .then(response => console.log( 'Hollywood:',response.data))
  .catch(error => console.error('Error:', error));}

  export const TechnologyData= () => {
    axios.get('http://localhost:4000/api/technology')
  .then(response => console.log( 'Technology:',response.data))
  .catch(error => console.error('Error:', error));}

  export const FitnessData= () => {
    axios.get('http://localhost:4000/api/fitness')
  .then(response => console.log( 'Fitness:',response.data))
  .catch(error => console.error('Error:', error));}
 
  export const FoodData= () => {
    axios.get('http://localhost:4000/api/food')
  .then(response => console.log( 'Food:',response.data))
  .catch(error => console.error('Error:', error));}
 
 

