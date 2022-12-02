import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import logoAYF from "../assets/LogoAYF.png";
import logoSmall from "../assets/logo_small.png";

const About = () => {
    return (
        <>
        <Navbar/>
        <div className="container">
            <h2 className="text-center m-5 fw-bold">About Us</h2>
            <div className="row m-5">
                <div className="col-sm-4 text-center">
                    <img src={logoAYF} width="220"/>
                </div>
                <div className="col-sm-8">
                    <h3 className="fw-bold text-center text-decoration-underline">ASEAN YOUTH FORUM</h3>
                    <p>ASEAN Youth Forum (AYF) adalah sebuah gerakan yang mewakili dan memperjuangkan generasi muda di ASEAN untuk menyuarakan keprihatinan dan strategi mereka untuk mencapai ASEAN yang lebih baik. AYF telah menjadi platform pemuda di ASEAN untuk menyuarakan dan menuntut hak-hak mereka untuk komunitas regional yang berkelanjutan, inklusif, berpusat pada orang, dan digerakkan oleh pemuda. Jaringan tersebut bertujuan untuk melembagakan dan mendirikan cabang-cabang nasionalnya untuk memfokuskan keterlibatan pada isu-isu lokal yang penting dan tepat waktu yang mempengaruhi kaum muda, dan mengkonsolidasikan proposal dan agenda kebijakan untuk diajukan ke kantor-kantor ASEAN yang relevan.</p>
                </div>
            </div>
            
            
            <div className="row m-5">
                <div className="col-sm-8">
                    <h3 className="fw-bold text-center text-decoration-underline">ASEAN YOUTH FORUM NEWS</h3>
                    <p>sebuah plaform website berita untuk anak muda asean yang ingin mencari berbagai hal informasi dari seluruh asean dan juga platform berbagi informasi seluruh asean yang informasinya valid</p>
                </div>
                <div className="col-sm-4 text-center">
                    <img src={logoSmall} width="200"/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default About