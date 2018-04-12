import * as React from "react";
import "./styles.css";

export default class AboutUs extends React.Component<any, any> {

  render() {
    const aboutUs = this.props.data;
    return (
      <section ref={this.props.aboutRef} className="about-section" id="about-section">
        <div className="section-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-xs-12">
              <div className="who-we-are">
                <div className="title-area">
                  <div className="title-icon">
                    <i className="icofont icofont-users-alt-1" />
                  </div>
                  <h4
                    className="section-subtitle wow fadeInUp animated"
                    data-wow-duration="600ms"
                    data-wow-delay="300ms"
                  >
                    {aboutUs.heading1}
                  </h4>
                  <h3
                    className="section-tittle wow fadeInUp animated"
                    data-wow-duration="600ms"
                    data-wow-delay="400ms"
                  >
                    {aboutUs.title1}
                  </h3>
                </div>
                <p className="wow fadeInUp animated" data-wow-duration="600ms" data-wow-delay="500ms">
                  {aboutUs.description1}
                </p>
              </div>
            </div>
            <div className="col-sm-7 col-xs-12">
              <div className="company-mission">
                <div className="our-company wow fadeInUp animated" data-wow-duration="600ms" data-wow-delay="300ms">
                  <div className="title-icon">
                    <i className="icofont icofont-star-shape" />
                  </div>
                  <h5>{aboutUs.heading2}</h5>
                  <h4>{aboutUs.title2}</h4>
                  <p>
                    {aboutUs.description2}
                  </p>
                </div>
                <div className="our-mission wow fadeInUp animated" data-wow-duration="600ms" data-wow-delay="400ms">
                  <div className="title-icon">
                    <i className="icofont icofont-hand-power" />
                  </div>
                  <h5>{aboutUs.heading3}</h5>
                  <h4>{aboutUs.title3}</h4>
                  <p>
                    {aboutUs.description3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}