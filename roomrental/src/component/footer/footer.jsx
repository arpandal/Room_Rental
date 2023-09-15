import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">

      <div className="fLists">

        <ul className="fList">
          <li className="fListItem">Single Room </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Double Room </li>
          <li className="fListItem">Flat</li>
          
        </ul>
        
        <ul className="fList">

          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Contact Us</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">© 2023 Room Rental. All Right Reserved.</div>
    </div>
  );
};

export default Footer;