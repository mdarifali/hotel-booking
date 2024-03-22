import Offers from "../Offers/Offers";
import Quick from "../Quick/Quick";

const Home = () => {
    return (
        <div className="container mx-auto lg:px-60 my-24">
           <Offers />
           <Quick />
        </div>
    );
};

export default Home;