import logo from "../logo.png";
import logoAyf from "../logoAYF.png";

const Footer = () => {
    return(
        <>
        <footer className="bg-primary text-white pt-5 pb-4">
            <div className ="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <img src={logo} alt="" width="90" height="50"/>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6>Tentang kami</h6>
                        <h6>Kebijakan Privasi</h6>
                        <h6>Hubungi kami</h6>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5>Challenge Partner Kami</h5>
                        <img src={logoAyf} alt="" width="180" height="150"/>
                    </div>

                    <div className="mt-5 fw-bold">
                        <p>Copyright @2022 Febe29 - Asean Youth Forum | All Right Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;