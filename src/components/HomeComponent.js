import React from 'react';

function HomeComponent(props) {
    return (
        <React.Fragment>
            <div className="body">
                <header className="text-white" id="top">
                    <div className="container text-center">
                            <h1 id="caption">Hello, my name is Ervin.</h1>
                                <p className="text-center lead" id="caption">And I'm a Frontend Developer & Freelancer.</p>
                                    <a className="btn text-white" href="/images/RESUME2021.pdf" download>Download Resume</a>
                    </div>
                </header>

                <section id="about" className="bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mx-auto">
                                <img src="./images/me.JPG" className="img-fluid shadow-lg rounded-circle mx-auto d-block" alt="Responsive image"/>
                            </div>
                            <div className="col-md-7 mx-auto">
                                <h2 className="text-center line"><strong>About Me</strong></h2>
                                    <p className="text-center pt-2">I am a Los Angeles native who is driven and permanently curious.  In the past year I graduated from a Full Stack Bootcamp and have decided to apply the skills I learned through freelancing.  I enjoy creating and learning new things and in my off time you can find me shooting hoops or trying to fix my golf slice.   </p>
                                    <p className="text-center">Skills:
                                        <span className="badge badge-pill badge1 text-white">HTML</span>
                                        <span className="badge badge-pill badge1 text-white">CSS</span>
                                        <span className="badge badge-pill badge1 text-white">JavaScript</span>
                                        <span className="badge badge-pill badge1 text-white">React</span>
                                        <span className="badge badge-pill badge2 text-white">Web Devolopment</span>
                                        <span className="badge badge-pill badge2 text-white">Freelance</span>
                                        <span className="badge badge-pill badge3 text-white">Communication</span>
                                        <span className="badge badge-pill badge3 text-white">Self Sufficient</span>
                                        <span className="badge badge-pill badge3 text-white">Problem Solver</span>
                                        <span className="badge badge-pill badge3 text-white">Dependable</span>
                                    </p>
                                <br/>
                                <img className="img-fluid mx-auto d-block shadow" src="http://ghchart.rshah.org/2980B9/pointblank3d" alt="Name Your GitHub chart" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 mx-auto">
                                    <h2 className="text-center line">Projects</h2>
                                    <br/>
                                    {/* <!-- Project #1 --> */}
                                        <div className="card text-white" id="card1">
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Responsive Cafe Site</h5>
                                                    <span className="badge badge-pill badge1">HTML</span>
                                                    <span className="badge badge-pill badge1">CSS</span>
                                                    <span className="badge badge-pill badge1 mb-2">Javascript</span>
                                                        <p className="card-text">I built a cafe site from scratch that will allow a small business to grow its online presence and allow its users to view information on the cafe, such as their location, registering for their weekly newsletters, history, menu and a way of ordering online.</p>
                                                        <p className="card-text"></p>
                                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#project1">
                                                            Sneak Peak
                                                        </button>
                                            </div>
                                        </div>
                                    {/* <!-- Project #2 --> */}
                                </div>
                            </div>
                        </div>
                </section>

        
    
                <div className="modal fade" id="project1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">
                                    The Daily Grind
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src="./images/theDailyGrind.png" className="img-fluid rounded" alt="Daily Grind Snapshot"/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark">
                                    Go to Site
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                

                <section id="contact">
                    <div className="container text-white">
                        <div className="row">
                            <div className="col-lg-6 mx-auto" id="connect">
                                <h2 className="display-4">Lets Connect</h2>
                                <p>
                                    <a className="nav-link" href="mailto:ean1207@gmail.com" target="_blank" id="black">
                                        <i className="fa fa-envelope fa-lg"> 
                                            <u>
                                                ean1207@gmail.com
                                            </u>
                                        </i>
                                    </a>
                                </p>
                                    <a className="btn btn-social-icon btn-github text-white social mx-2" href="http://github.com/" target="_blank">
                                        <i className="fa fa-github fa-lg"></i>
                                    </a>
                                    <a className="btn btn-social-icon btn-linkedin text-white social" href="http://linkedin.com/" target="_blank">
                                        <i className="fa fa-linkedin fa-lg"></i>
                                    </a>
                            </div>
                        </div>
                        <div className="row justify-content-center pt-2">
                            <a className="text-white" href="#" id="black">Back to Top</a>
                        </div>
                    </div>
                </section>

                <footer className="py-5" id="footer">
                    <div className="container">
                        <p className="m-0 text-center text-white">Copyright &copy; 2021 Ervin Natareno.  All rights reserved.  This site was built from scratch.</p>
                    </div>
                </footer>
            </div>
        </React.Fragment>
    );
}

export default HomeComponent;