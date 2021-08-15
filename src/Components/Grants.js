import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, CardBody, CardSubtitle } from 'reactstrap';
import classnames from 'classnames';

const Grants = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="container">
           <div className="row">
               <div className="col-6 offset-3">
                   <Nav tabs className="d-flex justify-content-between ">
                       <NavItem>
                           <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1');}}>
                               <div className="text-dark">Bakalavr</div>
                           </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>
                               <div className="text-dark">Magitratura</div>
                           </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>
                               <div className="text-dark">Doktarantura</div>
                           </NavLink>
                       </NavItem>
                   </Nav>
               </div>
           </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <div className="container">
                      <Row>
                          <Col sm="12" className="grant_sections bg-secondary rounded-pill mt-3 ">
                              <h3 className="text-light">
                                  Bo'lim: Bakalavr
                              </h3>
                          </Col>
                          <Col sm="3" className="mt-5">
                              <div>
                                  <Card>
                                      <CardBody>
                                          <CardTitle tag="h3">Sohalar</CardTitle>
                                          <CardText>lorem it</CardText>
                                          <CardText>Lorem ipsum.</CardText>
                                          <CardText>Lorem ipsum dolor sit amet.</CardText>
                                          <CardText>Lorem.</CardText>

                                      </CardBody>
                                  </Card>
                              </div>
                          </Col>
                          <Col sm="3" className="mt-5 offset-1">
                              <div>
                                  <Card>
                                      <CardBody>
                                          <CardTitle tag="h3">talablar</CardTitle>
                                          <CardText>lorem it</CardText>
                                          <CardText>Lorem ipsum.</CardText>
                                          <CardText>Lorem ipsum dolor sit amet.</CardText>
                                          <CardText>Lorem.</CardText>
                                      </CardBody>
                                  </Card>
                              </div>
                          </Col>
                          <Col sm="3" className="mt-5 offset-1">
                              <div>
                                  <Card>
                                      <CardBody>
                                          <CardTitle tag="h3">Sohalar</CardTitle>
                                          <CardText>lorem it</CardText>
                                          <CardText>Lorem ipsum.</CardText>
                                          <CardText>Lorem ipsum dolor sit amet.</CardText>
                                          <CardText>Lorem.</CardText>

                                      </CardBody>
                                  </Card>
                              </div>
                          </Col>
                      </Row>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                    <div className="container">
                        <Row>
                            <Col sm="12" className="grant_sections bg-secondary rounded-pill mt-3 ">
                                <h3 className="text-light">
                                    Bo'lim: Magistratura
                                </h3>
                            </Col>
                            <Col sm="3" className="mt-5">
                                <div>
                                    <Card>
                                        <CardBody>
                                            <CardTitle tag="h3">Sohalar</CardTitle>
                                            <CardText>lorem it</CardText>
                                            <CardText>Lorem ipsum.</CardText>
                                            <CardText>Lorem ipsum dolor sit amet.</CardText>
                                            <CardText>Lorem.</CardText>

                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm="3" className="mt-5 offset-1">
                                <div>
                                    <Card>
                                        <CardBody>
                                            <CardTitle tag="h3">talablar</CardTitle>
                                            <CardText>lorem it</CardText>
                                            <CardText>Lorem ipsum.</CardText>
                                            <CardText>Lorem ipsum dolor sit amet.</CardText>
                                            <CardText>Lorem.</CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm="3" className="mt-5 offset-1">
                                <div>
                                    <Card>
                                        <CardBody>
                                            <CardTitle tag="h3">Sohalar</CardTitle>
                                            <CardText>lorem it</CardText>
                                            <CardText>Lorem ipsum.</CardText>
                                            <CardText>Lorem ipsum dolor sit amet.</CardText>
                                            <CardText>Lorem.</CardText>

                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </TabPane>
                <TabPane tabId="3">
                    <div className="container">
                        <Row>
                            <Col sm="12" className="grant_sections bg-secondary rounded-pill mt-3 ">
                                <h3 className="text-light">
                                    Bo'lim: Doktarantura
                                </h3>
                            </Col>
                            <Col sm="3" className="mt-5">
                                <div>
                                    <Card>
                                        <CardBody>
                                            <CardTitle tag="h3">Sohalar</CardTitle>
                                            <CardText>lorem it</CardText>
                                            <CardText>Lorem ipsum.</CardText>
                                            <CardText>Lorem ipsum dolor sit amet.</CardText>
                                            <CardText>Lorem.</CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm="3" className="mt-5 offset-1">
                                <div>
                                    <Card>
                                        <CardBody>
                                            <CardTitle tag="h3">talablar</CardTitle>
                                            <CardText>lorem it</CardText>
                                            <CardText>Lorem ipsum.</CardText>
                                            <CardText>Lorem ipsum dolor sit amet.</CardText>
                                            <CardText>Lorem.</CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm="3" className="mt-5 offset-1">
                                <div>
                                    <Card>
                                        <CardBody>
                                            <CardTitle tag="h3">Sohalar</CardTitle>
                                            <CardText>lorem it</CardText>
                                            <CardText>Lorem ipsum.</CardText>
                                            <CardText>Lorem ipsum dolor sit amet.</CardText>
                                            <CardText>Lorem.</CardText>

                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Grants;