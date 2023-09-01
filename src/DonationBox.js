import icon1 from './icon-1.png'
import icon2 from './icon-2.png'
import icon3 from './icon-3.png'
export default function DonationBox(){
    return(
        <div className="donation">
            <div className="donata"></div>
            <div className="donation-box">
                <div className="box">
                    <div className="ico"><img src={icon1} alt='hand' /></div>
                        <h4 class="volunteer_text">VOLUNTEERS</h4>
                        <p class="lorem_text">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        <div class="join_bt"><a href="#">Join Now</a></div>
                 </div>
                <div className="box">
                    <div className="ico"><img src={icon2} alt='hand' /></div>
                        <h4 class="volunteer_text">VOLUNTEERS</h4>
                        <p class="lorem_text">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        <div class="join_bt"><a href="#">Join Now</a></div>
                 </div>
                <div className="box">
                    <div className="ico"><img src={icon3} alt='hand' /></div>
                        <h4 class="volunteer_text">VOLUNTEERS</h4>
                        <p class="lorem_text">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        <div class="join_bt"><a href="#">Join Now</a></div>
                 </div>
            </div>
        </div>
    )
}