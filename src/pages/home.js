import wheelchair from '../images/wheel chair.jpg'
import scooter from '../images/scooter.jfif'
import orthopedic from '../images/orthopedic.jpg'
import bed from '../images/hospital bed.jpg'
import bloodpressure from '../images/blood pressure.jpg'
import autoclave from '../images/autoclave.webp'
import crotches from '../images/crutches.jpg'
import coldtherapy from '../images/cold therapy.jpeg'
import doctor from '../images/doctor.webp'
const Home = () => {
    return ( <>
    <div>
        <div className="bg-landing" >
            <div className="dark-scarf">
            <div className="my-mother xs-px20 centered xs-down-60">
                <div className="xs-10 centered xs-off-1">
                   <div className="white bold">Quality Medical Care Delivered At The</div>
                   <div className="color-code-1 bold">Comfort of Your Home</div> 
                </div>
            </div>
            </div>
        </div>
        <div className="my-col-5 xs-10 xs-off-1 off-1 xs-down-2 down-2">
            <div className="px20 bold">Zen Med Rentals</div>
            <div className="px13">Zed Med Rentals is a supplier of medical equipment to consumers, hospitals, medical professionals,
            and governmental agencies in Ikoyi, Lagos. Stop in for a visit today to see our wide selection of durable medical equipment
            and other medical supplies.
            </div>
            <div className="my-col-5 xs-5 n-container bg-black xs-down-4 xs-off-3 down-4">
                <div className="white xs-px12 xs-off-1 off-1">Contact Us to Rent Now!</div>
            </div>

        </div>
        <div className="my-col-3 xs-6 xs-off-3 xs-down-3 centered mg-4 down-1">
            <img className="shopmedical" src={doctor} alt="shopmedical" />

        </div>
    </div>
    <div className="off-1 xs-10 my-col-10  xs-off-1"><h3>Lists of our Equipments</h3></div>
    <div className="xs-down-4 xs-10 my-col-10 xs-off-1 off-1">
        <div className="my-col-3">
           <div className="my-col-10 off-1">
           <div className="z-container centered">
                <img className="pic-container down-1" src= {wheelchair} alt="" />
                <div className="px15 xs-px25 bold">Wheel Chair</div>
                <div className="my-col-10 xs-10 xs-off-1 off-1">
                    <div className="xs-px20 px12">Wheel chair is for your comfortabilty. These are designed to make life easier if long-distance
                mobility may become an issue.</div>
                </div>
            </div>
           </div>
        </div>
        <div className="my-col-3">
           <div className="my-col-10 off-1">
           <div className="z-container centered xs-down-5">
                <img className="pic-container down-1" src= {coldtherapy} alt="" />
                <div className="px15 xs-px25 bold">Cold Therapy Unit</div>
                <div className="my-col-10 xs-10 xs-off-1 off-1">
                    <div className="xs-px20 px12">It is indispensable for post-surgery or injury recovery, as it helps to reduce pain, swelling, and inflammation.</div>
                </div>
            </div>
           </div>
        </div>
        <div className="my-col-3">
           <div className="my-col-10 off-1">
           <div className="z-container centered xs-down-5">
                <img className="pic-container down-1" src= {scooter} alt="" />
                <div className="px15 xs-px25 bold">Scooter</div>
                <div className="my-col-10 xs-10 xs-off-1 off-1">
                    <div className="xs-px20 px12">It is a versatile and efficient mode of personal transportation, ideal for short commutes and urban travel.</div>
                </div>
            </div>
           </div>
        </div>
        <div className="my-col-3">
           <div className="my-col-10 off-1">
           <div className="z-container centered xs-down-5">
                <img className="pic-container down-1" src= {orthopedic} alt="" />
                <div className="px15 xs-px25 bold">Orthopedic</div>
                <div className="my-col-10 xs-10 xs-off-1 off-1">
                    <div className="xs-px20 px12">They are crucial for individuals with mobility challenges, providing support, stability, and pain relief to help them regain independence.</div>
                </div>
            </div>
           </div>
        </div>
        <div className="my-col-3">
           <div className="my-col-10 off-1 xs-down-4 down-12">
           <div className="z-container centered xs-down-5">
                <img className="pic-container down-1" src= {bed} alt="" />
                <div className="px15 xs-px25 bold">Hospital Bed</div>
                <div className="my-col-10 xs-10 xs-off-1 off-1">
                    <div className="xs-px20 px12">A hospital bed at home is vital for accommodating the specialized medical needs and providing comfort and care to patients.</div>
                </div>
            </div>
           </div>
        </div>
        <div className="my-col-3">
           <div className="my-col-10 off-1 down-12">
           <div className="z-container centered xs-down-5">
                <img className="pic-container down-1" src= {bloodpressure} alt="" />
                <div className="px15 xs-px25 bold">Blood Pressure Machine</div>
                <div className="my-col-10 xs-10 xs-off-1 off-1">
                    <div className="xs-px20 px12">Wheel chair is for your comfortabilty. These are designed to make life easier if long-distance
                mobility may become an issue.</div>
                </div>
            </div>
           </div>
        </div>
        <div className="my-col-3">
           <div className="my-col-10 off-1 down-12">
           <div className="z-container centered xs-down-5">
                <img className="pic-container down-1" src= {autoclave} alt="" />
                <div className="px15 xs-px25 bold">Autoclave</div>
                <div className="my-col-10 xs-10 xs-off-1 off-1">
                    <div className="xs-px20 px12">Autoclave is essential in healthcare settings to sterilize medical instruments and equipment.</div>
                </div>
            </div>
           </div>
        </div>
        <div className="my-col-3">
           <div className="my-col-10 off-1 down-12">
           <div className="z-container centered xs-down-5">
                <img className="pic-container down-1" src= {crotches} alt="" />
                <div className="px15 xs-px25 bold">Crutches</div>
                <div className="my-col-10 xs-off-1 off-1">
                    <div className="xs-px20 px12">Wheel chair is for your comfortabilty. These are designed to make life easier if long-distance
                mobility may become an issue.</div>
                </div>
            </div>
           </div>
        </div>
        
    </div>
    
    
    </>

    );
}

export default Home;