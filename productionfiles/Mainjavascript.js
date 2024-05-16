screen.orientation.lock("portrait");

// Functions

function Profile(){
    return(<div class="Mainest_main">
                <h1>Profile</h1>
                <br />
                <div style={{textAlign: "center"}}>
                    <img src="https://lh3.googleusercontent.com/pw/ADCreHecWaZedSmZfzR7TT98qXJA05HKHmQtCjR7z7ejqPHqSUO6HV8EBZEviw4CUTgKENKIdonFvuV1pqgrr2HnCRwZl3iXQoimNHmBu_YFtvYnUc_WJZOaCEedYLPoD4SwqrJNGibjlfudD4zwJ-fRNv4=w1314-h985-s-no-gm?authuser=0" alt="Profile Picture" style={{height:"40%", width:"40%"}}/>
                    <br />
                    <br />
                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.6)", minWidth:"80%", padding: "2%", textAlign: "center", fontSize: "small", margin: "auto"}}>
                        <h3 style={{fontSize: "large"}}>Description</h3>
                        <p>I am a recently graduated bioinformatician and full stack developer passionate about programming and eager to gain professional experience,</p>

                        <p>as many others, my programing journey starts when I was 14 with curiosity about how websites work and slowly learning how fun and useful programing is.</p>

                        <p>On this web you can check some of the projects I do on my spare time, some of my academic work, and my profesional experience.</p>
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
                <div style={{fontSize: "small", width: "54%"}}>
                </div>
            </div>);
}


function PersonalProjects(){
    const Location = window.location.href
    return(<div class="Mainest_main">
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
                    <div class="Project">
                        <a href ={Location + "/3_Bullets"} target="_blank" rel="noopener noreferrer">
                            <img src="https://github.com/OSCAR-CASALS/3_Bullets/blob/main/sprites/Recharge.png?raw=true" class="WebLogo" />
                            <p class="WebTitle">3_Bullets</p>
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
            </div>);
}

function AcademicProjects(){
    const Location = window.location.href
    return(<div class="Mainest_main">
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
            </div>);
}

function ProfesionalExperience(){
    return(<div class="Mainest_main">
                <h1>Profesional Experience</h1>
                <br />
                <h3 style={{textAlign: "center"}}>Full stack developer</h3>
                <h5 style={{textAlign: "center"}}>Click to visit the websites I have worked on</h5>
                <div class="Projects">
                    <div class="Project">
                        <a href="https://polxavier.github.io/DataTeva" target="_blank" rel="noopener noreferrer">
                            <img src="https://polxavier.github.io/DataTeva/Logo.png" class="WebLogo" alt="TevaData Logo" style={{height: "70%"}}/>
                            <p class="WebTitle" style={{marginBottom: "0"}}>Made his website</p>
                        </a>
                    </div>
                </div>
                <h3 style={{textAlign: "center"}}>Bioinformatician</h3>
                <div class="Projects">
                    <div class="Project">
                        <img src="https://media.licdn.com/dms/image/C560BAQH4YYFRZ46Rag/company-logo_200_200/0/1631432590225/admit_therapeutics_logo?e=2147483647&v=beta&t=uyWfqTsPamOiVny-MdO3L2nuXielYz02Nhm4m190FiY" class="WebLogo" alt="Admit Therapeutics Logo" style={{height: "70%"}} />
                        <p class="WebTitle" style={{marginBottom: "0"}}>Junior</p>
                    </div>
                </div>
            </div>);
}


// Class that handles components

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
        switch (this.state.Page){
            case "PersProj":
                return(<div>
                    <div class="ButHeader">
                        <button id="Profile" onClick={this.handleButton} value="Profile">Profile</button>
                        <button id="PersProjects" onClick={this.handleButton} value="PersProj" class="ClickedBut">Pers. Projects</button>
                        <button id="AcProjects" onClick={this.handleButton} value="AcProjects">Academic Projects</button>
                        <button id="AcProjects" onClick={this.handleButton} value="ProfExperience">Prof. experience</button>
                    </div>
                    <br />
                    <PersonalProjects />
                    <br />
                </div>);
            case "Profile":
                return(<div>
                    <div class="ButHeader">
                        <button id="Profile" onClick={this.handleButton} value="Profile" class="ClickedBut">Profile</button>
                        <button id="PersProjects" onClick={this.handleButton} value="PersProj">Pers. Projects</button>
                        <button id="AcProjects" onClick={this.handleButton} value="AcProjects">Academic Projects</button>
                        <button id="AcProjects" onClick={this.handleButton} value="ProfExperience">Prof.Experience</button>
                    </div>
                    <br />
                    <Profile />
                    </div>);
            case "AcProjects":
                return(<div>
                    <div class="ButHeader">
                        <button id="Profile" onClick={this.handleButton} value="Profile">Profile</button>
                        <button id="PersProjects" onClick={this.handleButton} value="PersProj">Pers. Projects</button>
                        <button id="AcProjects" onClick={this.handleButton} value="AcProjects" class="ClickedBut">Academic Projects</button>
                        <button id="AcProjects" onClick={this.handleButton} value="ProfExperience">Prof. experience</button>
                    </div>
                    <br />
                    <AcademicProjects />
                </div>)
            case "ProfExperience":
                return(
                    <div>
                        <div class="ButHeader">
                            <button id="Profile" onClick={this.handleButton} value="Profile">Profile</button>
                            <button id="PersProjects" onClick={this.handleButton} value="PersProj">Pers. Projects</button>
                            <button id="AcProjects" onClick={this.handleButton} value="AcProjects">Academic Projects</button>
                            <button id="AcProjects" onClick={this.handleButton} value="ProfExperience" class="ClickedBut">Prof. experience</button>
                        </div>
                        <br />
                        <ProfesionalExperience />
                    </div>
                )
        }
    }
}
ReactDOM.render(<TheClass />, document.getElementById("MainOfMains"))
