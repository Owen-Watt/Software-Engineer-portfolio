import './communities.css';
import { Helmet } from "react-helmet";
import Community from '../Community/Community'
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Communities() {

  
  return (
    <>
      <Helmet>
        <title>Communities | Nestor Diaz</title>
      </Helmet>

      <div className="communities-contentBack">
        <div className = "community-wrapper">
        <Community
            icon={faHouse}
            title="Georgetown, DC"
            description="Internationally recognized for its elegance, charm and prestige for more than two centuries, Georgetown was founded in 1751, forty years prior to the founding of Washington, DC."
            fade="fade-right"
            demo=""
            demoType="Visit This Neighbourhood"
            image="https://homevisit.s3.amazonaws.com/img/297757/www_xl/158_GEORGETOWN_297757_648242.jpg"
          />

          <div className = "mobile-horizontal-line"></div>

          <Community
            icon={faHouse}
            title="Potomac, DC"
            description="Resting along the tree-lined banks of the Potomac River, this affluent community of Montgomery County is home to much of Washington's elite including athletes, local team owners, media personalities, corporate officials, and politicians."
            fade="fade-up"
            demo=""
            demoType="Visit This Neighbourhood"
            image="https://homevisit.s3.amazonaws.com/img/310481/www_xl/146_POTOMAC_310481_673881.jpg"
          />

          <div className = "mobile-horizontal-line"></div>
          <Community
            icon={faHouse}
            title="McLean, DC"
            description="Showcasing the finest in living, dining, and shopping, McLean continues to uphold its reputation as one of the best places to reside within the Washington Metropolitan Area."
            fade="fade-left"
            demo=""
            demoType="Visit This Neighbourhood"
            image="https://homevisit.s3.amazonaws.com/img/316288/www_xl/058_MCLEAN_316288_666738.jpg"
          />

          <div className = "mobile-horizontal-line"></div>

          <Community
            icon={faHouse}
            title="Georgetown, DC"
            description="Internationally recognized for its elegance, charm and prestige for more than two centuries, Georgetown was founded in 1751, forty years prior to the founding of Washington, DC."
            fade="fade-right"
            demo=""
            demoType="Visit This Neighbourhood"
            image="https://homevisit.s3.amazonaws.com/img/297757/www_xl/158_GEORGETOWN_297757_648242.jpg"
          />

          <div className = "mobile-horizontal-line"></div>

          <Community
            icon={faHouse}
            title="Potomac, DC"
            description="Resting along the tree-lined banks of the Potomac River, this affluent community of Montgomery County is home to much of Washington's elite including athletes, local team owners, media personalities, corporate officials, and politicians."
            fade="fade-up"
            demo=""
            demoType="Visit This Neighbourhood"
            image="https://homevisit.s3.amazonaws.com/img/310481/www_xl/146_POTOMAC_310481_673881.jpg"
          />

          <div className = "mobile-horizontal-line"></div>
          <Community
            icon={faHouse}
            title="Georgetown, DC"
            description="Internationally recognized for its elegance, charm and prestige for more than two centuries, Georgetown was founded in 1751, forty years prior to the founding of Washington, DC."
            fade="fade-left"
            demo=""
            demoType="Visit This Neighbourhood"
            image="https://homevisit.s3.amazonaws.com/img/297757/www_xl/158_GEORGETOWN_297757_648242.jpg"
          />

          <div className = "mobile-horizontal-line"></div>
        </div>
      </div>
    </>
  );
}

export default Communities;