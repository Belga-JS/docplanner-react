import React, { Component } from 'react';
class Picture extends Component {
    state = {}
    render() {
        return (
            <div className="photo-doc">
                <div >
                    <h1 className="title-doc">Improve the lives of millions. Change yours foreve</h1>
                    <p className="parag">More than 1000 team mates share our same vision, goals and passion.<br /> With offices in Warsaw, Barcelona,
                     Istanbul, Rome, Mexico City and <br />Curitiba, our search for great talent never stops.
                    </p>
                </div>
                <div className="offices-slider">
                    <div className="warsaw">
                        <a href="https://www.docplanner.com/career?ass=" className="office-inner">
                            <figure className="office-image">
                                <img scr="https://www.docplanner.com/images/warsaw.png"
                                    srcset="https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x" />
                            </figure>
                            <div className="office-desc">
                                Warsaw
                        <span className="btn btn-small">see opening</span>
                            </div>
                        </a>

                    </div>
                    <div className="barcelone">
                        <a href="https://www.docplanner.com/career?&loc=spain#jobs-offers" className="office-inner">
                            <figure className="office-image">
                                <img scr="https://www.docplanner.com/images/barcelona.png"
                                    srcset="https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x" />
                            </figure>
                            <div class="office-desc">
                                Barcelone
                        <span className="btn btn-small">SEE OPENINGS</span>
                            </div>
                        </a>
                    </div>
                    <div className="Istanbul">
                        <a href="/career?loc=rome#jobs-offers" className="office__inner">
                            <figure className="office-image">
                                <img scr="https://www.docplanner.com/images/istanbul.png"
                                    srcset="https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x" />
                            </figure>
                            <div className="office-desc">
                                Istanbul
                        <span className="btn btn-small">See openings</span>
                            </div>
                        </a>
                    </div>
                    <div className="Rome">
                        <a href="/career?loc=italy#jobs-offers" className="office__inner">
                            <figure className="office__image">
                                <img scr="https://www.docplanner.com/images/rome.png"
                                    srcset="https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x" />
                            </figure>
                            <div className="office-desc">
                                Rome
                        <span className="btn btn-small">See openings</span>
                            </div>
                        </a>
                    </div>
                    <div className="Mexico">
                        <a href="/career?&loc=mexico#jobs-offers" className="office__inner">
                            <figure className="office__image">
                                <img scr="https://www.docplanner.com/images/mexico-city.png"
                                    srcset="https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x" />
                            </figure>
                            <div className="office-desc">
                                Mexico City
                        <span className="btn btn-small">See openings</span>
                            </div>
                        </a>
                    </div>
                    <div className="Curitiba">
                        <a href="/career?&loc=brazil#jobs-offers" className="office__inner">
                            <figure className="office__image">
                                <img scr="https://www.docplanner.com/images/curitiba.png"
                                    srcset="https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x" />
                            </figure>
                            <div className="office-desc">
                                <span>curitiba</span>
                                <span className="btn btn-small">See openings</span>
                            </div>
                        </a>
                    </div>
                </div>


            </div>
        );
    }
}

export default Picture;