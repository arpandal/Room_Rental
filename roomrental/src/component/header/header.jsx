import "./header.css";

const header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem">
                    <span>Room</span>

                    </div>
                    <div className="headerListItem">
                    <span>Flat</span>

                    </div>
                    <div className="headerListItem">
                    <span>Apartment</span>

                    </div>
                    <div className="headerListItem">
                    <span>About Us</span>

                    </div>
                    <div className="headerListItem">
                    <span>Contact Us</span>

                    </div>
                   
                </div>
                <p className="headerDesc">Search for your Best Fit</p>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                     <input type="text" placeholder="Room, Flat, Location..." className="headeSearchInput"/>
                    </div>
                    <div className="headerSearchItem">
                <button className="headerBtn">
                  Search
                </button>
              </div>
                </div>
            </div>
        </div>
    );

};
export default header