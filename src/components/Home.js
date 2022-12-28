import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();
    return(
        <div className="home-class">
        <h1>welcome, plant parents!</h1>
        <div>
        <img src="https://media.istockphoto.com/id/1009948020/vector/collection-of-different-decor-house-indoor-garden-plants-in-pots-and-stands-graphic-set.jpg?s=612x612&w=0&k=20&c=R1NZ2iDTOIFi2dEKXY5737QiJmWK0RHA_8PjCd8trgY=" alt="home"/></div>
        <button onClick={() => history.push('/users')}>get started</button>
        </div>
    )
}

export default Home;