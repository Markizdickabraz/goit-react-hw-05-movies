import axios from "axios";
import { useState } from "react";
import GalleryItems from "components/Gallery";
import { FormStyled } from "./moviesStyled"
import { ListStyled } from "pages/home/homeStyled"


export default function Movies() {
    
    const [name, setName] = useState('')
    const [data, setData] = useState([])
    
    const handleChacge = e => {
        setName(e.currentTarget.value)
    }
    // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    
    const KEY = `faab19b092cac6c59a97dec233a38f4d`;
    const BASEURL = `https://api.themoviedb.org/3/search/movie?`;

    
    async function fetchMovieSearchByName() {
  try {
    const response = await axios.get(`${BASEURL}api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${name}`)
    setData(response.data.results)
  } catch (error) {
    console.log(error);
  }
}
    

        const formSubmit = e => {
     e.preventDefault();
        if (name.trim() === '') {
        alert('Там цей, строка пуста!');
        return;
    }
         fetchMovieSearchByName()
         setName('')
     }

    
    return (
        <main>
            <FormStyled onSubmit={formSubmit}>
        <label>Пошук за назвою
                    <input type="text"
             name="name"
        value={name}
        onChange = {handleChacge}
        autoComplete="off"
                    />
        </label>
            <button type="onSubmit">Search</button>
            </FormStyled>
            <ListStyled>
            <GalleryItems data= {data} />
            </ListStyled>
       </main>
   )
}