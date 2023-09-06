import zenrentals from "../images/zen rentals.jpg"
import shopmedical from "../images/medicalshop.png"
const Home = () => {
    return ( <>
    <div>
        <div><img className="zenrentals" src={zenrentals} alt="zenrentals" /></div>
        <div className="my-col-6 off-1 xs-off-1">
            <h1>Zen Med Rentals</h1>
            <p className="text-med">Zed Med Rentals is a supplier of medical equipment to consumers, hospitals, medical professionals,
            and governmental agencies in Ikoyi, Lagos. Stop in for a visit today to see our wide selection of durable medical equipment
            and other medical supplies.
            </p>

            <div className="my-col-6 xs-centered">
                <img className="shopmedical" src={shopmedical} alt="shopmedical" />

            </div>

        </div>  
    </div>

    
    </>

    );
}

export default Home;