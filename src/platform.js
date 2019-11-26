import React, { Component } from 'react';
class Platform extends Component {
    state = {}
    render() {
        return (
            <div className="platform-glo">
                <div className="text-palt">
                    <h1>The world's <br />
                        biggest healthcare platfo
                    </h1>
                    <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20
                            countries
                    </p>
                    <img src="https://media.licdn.com/dms/image/C4E0BAQFOWnbru99f5w/company-logo_200_200/0?e=2159024400&v=beta&t=EceoeatN3ZdtLKlQdk-5b9mznHFILuVm2EExIss1FTA"/>
                </div>
                <div className="pays-plat">
                    <div className="item1">
                        <img scr="https://www.docplanner.com/img/flag.png"
                            srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x" />
                        <h3>Leader in 10 countries</h3>
                        <p>Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia,
                                            Argentina and Chile </p>
                    </div>
                    <div className="item2">
                        <img scr="https://www.docplanner.com/img/visits.png"
                            srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x" />
                        <h3>1.5 million appointments</h3>
                        <p>booked last month</p>
                    </div>
                    <div className="item3">
                        <img scr="https://www.docplanner.com/img/patients.png"
                            srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x" />
                        <h3>30 million unique patients</h3>
                        <p>visit us every month</p>
                    </div>
                    <div className="item4">
                        <img scr="https://www.docplanner.com/img/doctors.png"
                            srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x" />
                        <h3>2 million active doctors</h3>
                        <p>trust in our solutions</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Platform;