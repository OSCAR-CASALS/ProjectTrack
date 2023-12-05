class TheClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {Page: "Profile"};
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(event){
        this.setState({
            Page: event.target.value
        });
    }
    
    render(){
        const Location = window.location.href
        switch (this.state.Page){
            case "PersProj":
                return(<div>
                    <div class="ButHeader">
                        <button id="Profile" onClick={this.handleButton} value="Profile">Profile</button>
                        <button id="PersProjects" onClick={this.handleButton} value="PersProj" class="ClickedBut">Personal Projects</button>
                        <button id="AcProjects" onClick={this.handleButton} value="AcProjects">Academic Projects</button>
                    </div>
                    <br />
                    <div class="Mainest_main">
                        <h1>Personal Projects</h1>
                        <h3 style={{textAlign: "center"}}>Websites</h3>
                        <div class="Projects">
                            <div class="Project">
                                <a href={Location + "/RomanConverter"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://i.pinimg.com/564x/71/86/c0/7186c0389fe57abb0958f00a49b8df2a.jpg" class="WebLogo" />
                                    <p class="WebTitle">Roman Converter</p>
                                </a>
                            </div>
                            <div class="Project">
                                <a href={Location + "/RandomQuotes"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://www.publicdomainpictures.net/pictures/180000/velka/planet-earth-1467948406vpS.jpg" class="WebLogo" />
                                    <p class="WebTitle">Random Quotes</p>
                                </a>
                            </div>
                            <div class="Project">
                                <a href={Location + "/HorrorStories"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://publicdomainvectors.org/photos/Terrified-Face.png" class="WebLogo" />
                                    <p class="WebTitle">Horror Stories</p>
                                </a>
                            </div>
                        </div>
                        <h3 style={{textAlign: "center"}}>Apps/Programs</h3>
                        <div class="Projects">
                            <div class="Project">
                                <a href={Location + "/SpaceInvaders"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://lh3.googleusercontent.com/pw/ADCreHd9O9A8xxMrPvTjkt--jqwdsZWZ8PCBLhC2-xhMgo7TGfBp6rxhXcwPZpkltSLQb6nZlMn0NRlLAZF4WCwxlvs629sJ-vQla6DH8ka_iO5E2KLoMcBROdlsNZ8DptOZmZwAnpn86qs9BXv39UocFYU=w64-h63-s-no-gm?authuser=0" class="WebLogo" alt="SpaceInvadersClone Logo"/>
                                    <p class="WebTitle">Space Invaders</p>
                                </a>
                            </div>
                            <div class="Project">
                                <a href={Location + "/SmithWaterman"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Needleman-Wunsch_pairwise_sequence_alignment.png" class="WebLogo" alt="SmithWaterman Logo"/>
                                    <p class="WebTitle">Smith Waterman</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>);
            case "Profile":
                return(<div>
                    <div class="ButHeader">
                        <button id="Profile" onClick={this.handleButton} value="Profile" class="ClickedBut">Profile</button>
                        <button id="PersProjects" onClick={this.handleButton} value="PersProj">Personal Projects</button>
                        <button id="AcProjects" onClick={this.handleButton} value="AcProjects">Academic Projects</button>
                    </div>
                    <br />
                    <div class="Mainest_main">
                        <h1>Profile</h1>
                        <br />
                        <div style={{textAlign: "right"}}>
                            <img src="https://lh3.googleusercontent.com/pw/ADCreHecWaZedSmZfzR7TT98qXJA05HKHmQtCjR7z7ejqPHqSUO6HV8EBZEviw4CUTgKENKIdonFvuV1pqgrr2HnCRwZl3iXQoimNHmBu_YFtvYnUc_WJZOaCEedYLPoD4SwqrJNGibjlfudD4zwJ-fRNv4=w1314-h985-s-no-gm?authuser=0" alt="Profile Picture" style={{height:"40%", width:"40%", float:"left"}}/>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.6)", width:"54%", float: "right", padding: "1vw", textAlign: "center", fontSize: "small"}}>
                                <h3 style={{fontSize: "large"}}>Description</h3>
                                <p>I am a bioinformatician passionate about programming who recently graduated from the Bioinformatics degree organised by universities: ESCI-UPF, UPC, UB and UAB.
                                    Ever since I was 14 years old I have been programming in my spare time therefore I am constantly improving my skills.</p>

                                <p>On this website you can check some of the projects I have done on my spare time or for university.</p>
                                <fieldset style={{border: "none", backgroundColor: "white", width: "82%", margin: "auto"}}></fieldset>
                                <h3 style={{fontSize: "large"}}>Training</h3>
                                <p>Bioinformatics university degree organised by:</p>
                                <ul style={{textAlign: "center"}}>
                                    <li style={{listStyleType: "none"}}>- ESCI-UPF</li>
                                    <li style={{listStyleType: "none"}}>- Universitat Autonoma de Barcelona(UAB)</li>
                                    <li style={{listStyleType: "none"}}>- Universitat Politècnica de Catalunya(UPC)</li>
                                    <li style={{listStyleType: "none"}}>- Universitat de Barcelona(UB)</li>
                                </ul>
                                <p>Bachillerato científico at Centre d'Estudis Roca</p>
                                <fieldset style={{border: "none", backgroundColor: "white", width: "82%", margin: "auto"}}></fieldset>
                                <h3 style={{fontSize: "large", textAlign: "center"}}>Contact Information:</h3>
                                <p>casals.400010@gmail.com</p>
                                <p>Phone:616 77 08 36</p>
                            </div>
                        </div>
                        <div style={{float: "right", fontSize: "small", textAlign: "left", width: "54%"}}>
                        </div>
                    </div>
                    </div>);
            case "AcProjects":
                return(<div>
                    <div class="ButHeader">
                        <button id="Profile" onClick={this.handleButton} value="Profile">Profile</button>
                        <button id="PersProjects" onClick={this.handleButton} value="PersProj">Personal Projects</button>
                        <button id="AcProjects" onClick={this.handleButton} value="AcProjects" class="ClickedBut">Academic Projects</button>
                    </div>
                    <br />
                    <div class="Mainest_main">
                        <h1>Academic Projects</h1>
                        <h3 style={{textAlign: "center"}}>Pipelines/Projects</h3>
                        <div class="Projects">
                            <div class="Project">
                                <a href={Location + "/FinalDegreeProject"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://lh3.googleusercontent.com/pw/ADCreHefWWvoomeqfIPib3vIc3GbIQ0PtZsw4T67JGBL-YC7jr_0k4ADqh4JyAEt8BSSczOE-bodvSXTkKHpnjVNP17Vq1rUsHKdCzd6Fvse8FBCGCeIpJJrCfW21RZPjBBtWpeP53ejB1vwDF1TGylAgI0=w880-h630-s-no-gm?authuser=0" class="WebLogo" alt="FinalDegreeProject Logo" />
                                    <p class="WebTitle">TFG</p>
                                </a>
                            </div>
                            <div class="Project">
                                <a href={Location + "/HeartFailure"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://biopharmaapac.com/uploads/articles/download_2-1570.jpg" class="WebLogo" alt="Heart Failure Logo"/>
                                    <p class="WebTitle">Heart Failure</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>)
        }
    }
}
ReactDOM.render(<TheClass />, document.getElementById("MainOfMains"))
