const Film = ({film}) => {

    const castMembers = film.roles.filter((roles) => roles.voice).map((role) => {
        return <li key={role.id}>{role.voice}</li>
    });

    return(
        <>
            <h2>{film.title}</h2>
            <p>Released: {film.released}</p>
            <p>About: {film.about}</p>
            <ul>{castMembers}</ul>
        </>
    )

};

export default Film;