import React from "react";

class SwipeImages extends React.Component {
    render() {
        return(
            <React.Fragment>
                {/* Full-width images with number and caption text */}
                <div className="mySlides fade">
                    <div className="pic1">1 / 3</div>
                    <img src={require("./Images/pic1.jpeg")} style={{width: "100%"}} alt="pic1" />
                    <div className="text">Caption Text</div>
                </div>

                <div className="pic2">
                    <div className="numbertext">2 / 3</div>
                    <img src={require("./Images/pic2.jpeg")} style={{width: "100%"}} alt="pic2" />
                    <div className="text">Caption Two</div>
                </div>

                <div className="pic3">
                    <div className="numbertext">3 / 3</div>
                    <img src={require("./Images/pic3.jpeg")} style={{width: "100%"}} alt="pic3" />
                    <div className="text">Caption Three</div>
                </div>

                {/* Next and previous buttons*/}
                {/*<a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={plusSlides(1)}>&#10095;</a>*/}

                <br />

                {/* The dots/circles */}
                <div style={{textAlign: "center"}}>
                    <span class="dot" onClick="currentSlide(1)"></span>
                    <span class="dot" onClick="currentSlide(2)"></span>
                    <span class="dot" onClick="currentSlide(3)"></span>
                </div>
            </React.Fragment>
        )
    }
}

export default SwipeImages