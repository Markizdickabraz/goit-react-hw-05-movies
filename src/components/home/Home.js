
export default function Home({ data, genreId }) {

    return (
        data.map(item => (
            <div key={item.id}>
                <h4>{item.title}</h4>
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}/>
                </div>
            ))
    )
}