import logo from "../assets/logo_ayfn_nocolor.png";
import logoAyf from "../assets/LogoAYF.png";

const Footer = () => {
    return(
        <>
         <footer className=' container-fluid' style={{ padding : 20, background : "#0D6FFB", color : "white" }}>
            <div className='row '>
                <div className='col-md-4 col-lg-4 col-xl-2 mx-auto mt-4 '><h4>Asean Youth Forum News</h4>
                <img  className="img-fluid" src={"./src/assets/logo_ayfn_nocolor.png"} alt="" style={{ width : 140 }} />
                
                </div>
                <div className='col-md-4 col-lg-3 col-xl-2 mx-auto mt-3'><h4>Challenge Partner</h4>
                <img  className="img-fluid" src={"./src/assets/logoAYF.png"} alt="" style={{ width : 140 }}/>
               </div>
                <div className='col-md-3 col-lg-3 col-xl-2 mx-auto mt-3'><h4>Contact</h4>
                <p>aseanyouthforumnews@gmail.com</p>
                <p>08123456789</p>
                <p>Jalanin aja No.100 Yogyakarta</p>
                <ul>
                    
                </ul>
                </div>
            </div>
        
        </footer>
        </>
    )
}

export default Footer;