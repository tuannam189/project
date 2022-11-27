import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Images from "../../../Constants/image";
import Banner from "../../Banner";
import "./style.scss";

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner
        title="🎉 Your awesome photos 🎉"
        backgroundUrl={Images.PINK_BG}
      />

      <Container className="text-center">
        <div className="add-photos" style={{ textAlign: "center", marginTop: '10px' }}>
          <Link className="photo-add" to="/photos/add">
            Add new photo
          </Link>
        </div>
        <div className="img-uiPhoto" style={{marginTop: '50px',display:'flex', justifyContent: 'center'}}>
          <img width="300px" height="300px" style={{paddingRight: '50px'}} src={Images.ANH_1} alt="colorful" />
          <img width="300px" height="300px" src={Images.ANH_2} style={{paddingRight: '50px'}} alt="colorful" />
          <img width="300px" height="300px" src={Images.COLORFUL_BG} style={{paddingRight: '50px'}} alt="colorful" />
          <img width="300px" height="300px" src={Images.BLUE_BG} alt="colorful" />
        </div>
      </Container>
    </div>
  );
}

export default MainPage;
