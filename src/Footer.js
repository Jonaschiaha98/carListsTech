import logo from "./logo.svg"
export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} className="logo-img" />
            </div>
            <div className="address">
                <h3 className="ok">Adress</h3>
                <h5>48 Monument Road, Kempton Park.</h5>
                <h5><a href="mailto:jonaschiaha98@gmail.com" className="email">jonaschiaha98@gmail.com</a></h5>
                <h5>+27697914586</h5>
            </div>
            <div className="sub">
                <h3 className="sub-here">Subscribe Here</h3>
                <div className="subscribe">
                    <input type="email" placeholder="Subscribe Here" className="subscription" /> <button>subscribe</button>
                </div>
            </div>
            
        </footer>
    )
}