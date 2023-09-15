import "./featureProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Apartment</span>
        <span className="fpCity">Chabel, Kathmandu</span>
        <span className="fpPrice">Rs 60000</span>
       
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Double Room</span>
        <span className="fpCity">Kalanki, Kathmandu</span>
        <span className="fpPrice">Rs 10000</span>
        
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1406&q=80"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Flat</span>
        <span className="fpCity">Sanothimi, Bhaktapur</span>
        <span className="fpPrice">Rs 16000</span>
        
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1625585598750-3535fe40efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="fpImg"
       />
        <span className="fpName">Single Room</span>
        <span className="fpCity">Patan, Lalitpur</span>
        <span className="fpPrice">Rs 5000</span>
      </div>
    </div>
  );
};

export default FeaturedProperties;