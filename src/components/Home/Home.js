import React from 'react'

const Home = (props) => {
    console.log(props); // !!! u propsu vec imaju metode prosledjene od RRoutera
    setTimeout(() => {
        props.history.push("/about") // metoda za redirekciju
    }, 5000);
    return (
        <h1>Home component</h1>
    )
}

export default Home;