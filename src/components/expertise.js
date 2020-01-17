import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default class Expertise extends Component {
  render() {
    return (
      <div className="s-about__section">
        <div className="row">
          <div className="column">
            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
              <h3>Career</h3>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row block-large-1-2 block-900-full work-positions">
          <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
            <div className="column">
              <div className="position">
                <div className="position__header">
                  <h6>
                    <span className="position__co">Celebrity Cruises</span>
                    <span className="position__pos">
                      Digital E-Commerce Analyst
                    </span>
                  </h6>
                  <div className="position__timeframe">
                    March 2018 - October 2019
                  </div>
                </div>
                <p>
                  Lead digital analyst for the Celebrity Web team and provided
                  support for multiple teams looking to drive revenue on the
                  web. I worked closely with the eCommerce and UX/UI teams while
                  recommending enhancements on the Celebrity booking funnel and
                  Cruise Planner portal.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
            <div className="column">
              <div className="position">
                <div className="position__header">
                  <h6>
                    <span className="position__co">Royal Caribbean</span>
                    <span className="position__pos">Digital Analyst</span>
                  </h6>
                  <div className="position__timeframe">
                    May 2016 - March 2018
                  </div>
                </div>

                <p>
                  I reported to the Director of Business Intelligence on digital
                  analytics for the Royal Caribbean website, establishing real
                  time analytics on the booking funnel and working with Dev Ops
                  during code migrations.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
            <div className="column">
              <div className="position">
                <div className="position__header">
                  <h6>
                    <span className="position__co">Pyramid Time Systems</span>
                    <span className="position__pos">eCommerce Manager</span>
                  </h6>
                  <div className="position__timeframe">Jan 2014 - Mar 2016</div>
                </div>
                <p>
                  Managed all digital marketing for a startup SaSS for time and
                  attendance software and manufactured products of time and
                  attendance systems.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
            <div className="column">
              <div className="position">
                <div className="position__header">
                  <h6>
                    <span className="position__co">ABS, Inc. </span>
                    <span className="position__pos">Digital Marketing</span>
                  </h6>
                  <div className="position__timeframe">
                    Sept 2010 - Dec 2013
                  </div>
                </div>

                <p>
                  Coordinated marketing and business development for a
                  third-party administrator of employee benefit programs, with
                  responsibility for expanding annual sales growth by more than
                  20%.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}
