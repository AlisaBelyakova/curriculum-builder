import React, { Component } from 'react';
import '../styles/Builder.css';
import CARDS from "../data/builder-cards.json"
import BuilderOneCard from './BuilderOneCard'

class Builder extends Component {
  render() {
    return (
        <div id="builder">



            <span className="cards-container">
                {/* customised section #0 ------------------------------------- 0 */}
                <span className="big-section">
                    <span className="section">
                        <span className="sub-section" id="section-0">
                            <span className="cards-holder">
                                <img src="./images/teachers-cards/Microlending.png" className="card-img"/>

                                <iframe
                                    // width="560"
                                    // height="315"
                                    src="https://www.youtube.com/embed/YmNgUNb_5CE"
                                    frameBorder="0"
                                    // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="card-img">
                                </iframe>

                                <iframe
                                    // width="560"
                                    // height="315"
                                    src="https://www.youtube.com/embed/C4JZqNfu_Xg"
                                    frameBorder="0"
                                    // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="card-img">
                                </iframe>
                            </span>
                        </span>
                    </span>
                    <span className="title-column" id="title-column-0">
                        {/* <p className="number"> 0 </p> */}
                        <p className="title"> Example set-up prepared by Johnny Deepesh </p>
                    </span>
                </span>

                {/* customised section #1 ------------------------------------- 1 */}
                <span className="big-section">
                    <span className="section" id="section-1">
                        <span className="sub-section">
                            <p className="sub-title"> Map your lesson plan – subject intro/instructions/
                                example/ practice and assessment / reflection </p>

                            <p className="sub-title">By the end of the session the participants should be able
                                to demonstrate critical reasoning skills.., understand the concept of..,
                                present answers to.., become substantially proficient in..,
                                find creative solutions to.., empathize with.., produce a ...</p>

                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </span>
                    </span>
                    <span className="title-column">
                        <p className="number"> 1 </p>
                        <p className="title"> State your learning objective </p>
                    </span>
                </span>


                {/* all other sections  ------------------------------------- */}
                {CARDS.map((set, index)=>{
                    return (
                        <BuilderOneCard
                            key={index}
                            title={set.title}
                            subTitles={set.subTitles}
                            source={set.source}
                            sizeArray={set.size}
                        />
                    )
                })}

            </span>
        </div>
    );
  }
}

export default Builder;

// {
//     "size":[0,1],
//     "title": {
//         "text":"State your learning objective",
//          "number":"1"},
//     "subTitles":[
//         "Map your lesson plan – subject intro/ instructions/ example/ practice and assessment format/ reflection",
//         "By the end of the session the participants should be able to demonstrate critical reasoning skills.., understand the concept of.., present answers to.., become substantially proficient in.., find creative solutions to.., empathize with.., produce a ..."
//     ],
//     "source": []
// },