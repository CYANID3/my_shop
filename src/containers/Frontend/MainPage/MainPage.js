import React from 'react';
import "./MainPage.css";
import NavigationList from '../../../components/NavigationList/NavigationList';
import { Button, Container } from 'semantic-ui-react';



const MainPage = () => {
  return (
      <div>
           <NavigationList/>
       <div className="Banner">
         <div className="Banner-content">
           <h1 className="Banner-title">Big Title Here</h1>
           <h3 className="Banner-description">A fashion boot is a boot worn for reasons of style or fashion (rather than for utilitarian purposes – e.g. not hiking boots, riding boots, rain boots, etc.). The term is usually applied to women's boots. Fashion boots come in a wide variety of styles, from ankle to thigh-length, and are used for casual, formal, and business attire. Although boots were a popular style of women's footwear in the Nineteenth Century, they were not recognized as a high fashion item until the 1960s. They became widely popular in the 1970s and have remained a staple of women's winter wardrobes since then.
           </h3>
           <Button color='red'>Show me more</Button>
         </div>
       </div>
       <Container>

<div className="Mini-banner-container">
  
           <div className="Mini-banner">
           <div className="Mini-banner-content">
           <h1 className="Mini-banner-title">Big Title Here</h1>
           <h3 className="Mini-banner-description">A fashion boot is a boot worn for reasons of style or fashion (rather than for utilitarian purposes – e.g. not hiking boots, riding boots, rain boots, etc.).
           </h3>
           <Button className="Mini-banner-btn" color='red'>Show me more</Button>
           </div>

           </div>
           <div className="Mini-banner">
           <div className="Mini-banner-content">
           <h1 className="Mini-banner-title">Big Title Here</h1>
           <h3 className="Mini-banner-description">A fashion boot is a boot worn for reasons of style or fashion (rather than for utilitarian purposes – e.g. not hiking boots, riding boots, rain boots, etc.). 
           </h3>
           <Button className="Mini-banner-btn" color='red'>Show me more</Button>
           </div>
            </div>
</div>


       </Container>
     

      
      
      </div>
  );
};

export default MainPage;
