
export default function Home({ data },{genreId}) {

    return (
        data.map(item => (
            <li>
                <img src ={data.poster_path} alt= {data.title}></img>
            </li>
        ))
    )
}