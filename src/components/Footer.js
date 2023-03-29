import React from "react";
import "./Footer.css";
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_left">
          <div className="footer_about">
            <h4>About</h4>
            <p><Link>Contact Us</Link></p>
            <p><Link>About Us</Link></p>
            <p><Link>Careers</Link></p>
            <p><Link>Flipkart Stories</Link></p>
            <p><Link>Press</Link></p>
            <p><Link>Flipkart Wholesale</Link></p>
            <p><Link>Corporate Information</Link></p>
          </div>
          <div className="footer_help">
            <h4>Help</h4>
            <p><Link>Payments</Link></p>
            <p><Link>Shipping</Link></p>
            <p><Link>Cancellation & Returns</Link></p>
            <p><Link>FAQ</Link></p>
            <p><Link>Report Infringement</Link></p>
          </div>
          <div className="footer_policy">
            <h4>Policy</h4>
            <p><Link>Return Policy</Link></p>
            <p><Link>Terms Of Use</Link></p>
            <p><Link>Security</Link></p>
            <p><Link>Privacy</Link></p>
            <p><Link>Sitemap</Link></p>
            <p><Link>EPR Compliance</Link></p>
          </div>
          <div className="footer_social">
            <h4>Social</h4>
            <p><Link>Facebook</Link></p>
            <p><Link>Twitter</Link></p>
            <p><Link>YouTube</Link></p>
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_mail">
            <h4>Mail Us:</h4>
            <p>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </p>
          </div>
          <div className="footer_address">
            <h4>Registered Office Address:</h4>
            <p>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India CIN :
              U51109KA2012PTC066107 Telephone: 044-45614700
            </p>
          </div>
        </div>
      </div>
      <div className="footer_foot">
        <div>
            <WorkIcon className = 'footer_icon'/>
            <p>Become a Seller</p>
        </div>
        <div>
            <StarsIcon className = 'footer_icon'/>
            <p>Advertise</p>
        </div>
        <div>
            <CardGiftcardIcon className = 'footer_icon'/>
            <p>Gift Cards</p>
        </div>
        <div>
            <HelpIcon className = 'footer_icon'/>
            <p>Help Center</p>
        </div>
        <div>
            <p>2007-2023 FlipKart.com</p>
        </div>
        <div>
            <img className = 'footer_img'src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="" />
        </div>

      </div>
    </div>
  );
}

export default Footer;
