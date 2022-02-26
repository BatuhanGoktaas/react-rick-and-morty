import logo from "assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <nav className="navbar bg-success bg-opacity-50 p-2 ">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <img src={logo} width={220} />
        </div>

        <div className="d-flex">
          <h4 className="me-3 text-white ">Karakterler</h4>
          <h4 className="me-3 text-white">Bölümler</h4>
          <h4 className="text-white">Evrenler</h4>
        </div>
      </div>
    </nav>
  );
};

export default Header;
