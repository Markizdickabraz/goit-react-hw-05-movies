import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import GalleryItems from "components/Gallery";
import { ListStyled } from "pages/home/homeStyled"
import SearchBox from "components/searchBox";

export default function Movies() {
    
    // const [name, setName] = useState('')
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const productName = searchParams.get("name") ?? "";
    
    const handleChacge = e => {
      // setName(e.currentTarget.value)
      updateQueryString(e.currentTarget.value)
    }
  
      const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
    };  
  
    const KEY = `faab19b092cac6c59a97dec233a38f4d`;
    const BASEURL = `https://api.themoviedb.org/3/search/movie?`;

  async function fetchMovieSearchByName(productName) {
  try {
  const response = await axios.get(`${BASEURL}api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${productName}`)
  setData(response.data.results)
  } catch (error) {
  console.log(error);
  }
  }
    
  const formSubmit = e => {
       e.preventDefault();
      if (productName.trim() === '') {
        alert('Там цей, строка пуста!');
      return;
      }
      
      fetchMovieSearchByName(productName)
    
}
  
  useEffect(() => {
    if (data === []) {
      return;
    }
    fetchMovieSearchByName(productName)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  useEffect(() => {
    if (productName === '') {
      setSearchParams({})
    }
  },[productName])
  
    return (
        <main>
          <SearchBox value={productName} onChange={handleChacge} formSubmit ={formSubmit} />
            <ListStyled>
            <GalleryItems data= {data} />
            </ListStyled>
       </main>
   )
}