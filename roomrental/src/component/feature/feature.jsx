import "./feature.css";

const feature = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2017/03/13/07/17/apartment-2138949_1280.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lalitpur</h1>
          <h2>12 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2017/05/08/13/41/architecture-2295480_1280.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bhaktapur</h1>
          <h2>13 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kathamndu</h1>
          <h2>11 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default feature;