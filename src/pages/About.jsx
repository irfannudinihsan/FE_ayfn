import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import logoAYF from "../assets/LogoAYF.png";
import logoAYFNColor from "../assets/logo_ayfn_color.png";

const About = () => {
    return (
        <>
        <Navbar/>
        <div className="container">
            <h1 className="text-center m-5 fw-bold">About Us</h1>
            <div className="row my-5  d-flex flex-wrap-reverse" >
                <div className="col-xl-4 col-md-4 text-center">
                    <img src={logoAYF} className="img-fluid"/>
                </div>
                <div className="col-xl-8 col-md-8 ">
                    <h3 className="mb-3 fw-bold text-center text-decoration-underline">ASEAN YOUTH FORUM</h3>
                    <p>ASEAN Youth Forum (AYF) adalah sebuah gerakan yang mewakili dan memperjuangkan generasi muda di ASEAN untuk menyuarakan keprihatinan dan strategi mereka untuk mencapai ASEAN yang lebih baik. AYF telah menjadi platform pemuda di ASEAN untuk menyuarakan dan menuntut hak-hak mereka untuk komunitas regional yang berkelanjutan, inklusif, berpusat pada orang, dan digerakkan oleh pemuda. Jaringan tersebut bertujuan untuk melembagakan dan mendirikan cabang-cabang nasionalnya untuk memfokuskan keterlibatan pada isu-isu lokal yang penting dan tepat waktu yang mempengaruhi kaum muda, dan mengkonsolidasikan proposal dan agenda kebijakan untuk diajukan ke kantor-kantor ASEAN yang relevan.ASEAN Youth Forum (AYF) adalah gerakan yang mewakili dan memperjuangkan anak muda di ASEAN untuk menyuarakan keprihatinan dan strategi mereka untuk mencapai ASEAN yang lebih baik. AYF telah menjadi platform pemuda di ASEAN untuk menyuarakan dan menuntut hak-hak mereka untuk komunitas regional yang berkelanjutan, inklusif, berpusat pada orang, dan digerakkan oleh pemuda. Jaringan tersebut bertujuan untuk melembagakan dan mendirikan cabang-cabang nasionalnya untuk memfokuskan keterlibatan pada isu-isu lokal yang penting dan relevan yang mempengaruhi kaum muda dan mengkonsolidasikan proposal dan agenda kebijakan untuk diajukan ke kantor-kantor ASEAN yang relevan. Karena fokus kami adalah pada kaum muda, kami tidak memiliki 1 tujuan SDG spesifik yang kami prioritaskan.</p>
                </div>
            </div>
            
            
            <div className="row my-5  d-flex flex-wrap">
                <div className="col-xl-8 col-md-8">
                    <h3 className="mb-3 fw-bold text-center text-decoration-underline">ASEAN YOUTH FORUM NEWS</h3>
                    <p>Asean Youth Forum News adalah platform media aspirasi pemuda di Asean yang memfasilitasi pemuda dalam menyampaikan aspirasi dalam berbagai hal dan  membantu pemuda Asean dalam mendapatkan informasi berkualitas.</p>
                </div>
                <div className="col-xl-4 col-md-4 text-center">
                    <img src={logoAYFNColor} className="img-fluid"/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default About