import React, {PureComponent} from 'react';

export default class BuilderOneCard extends PureComponent {

  render() {
    const { sizeArray, title, subTitles, source } = this.props;

    return (
        <span className="big-section">
            <span className="section">
                {sizeArray.map( (indexOfSubTitle, i) =>{
                    return (
                        <span className="sub-section" key={i}>
                            <p className="sub-title">{subTitles[indexOfSubTitle]}</p>
                            {source.length > 0
                            && <span className="cards-holder">
                                {source[indexOfSubTitle].map((imgSrc, j)=> (
                                    <img src={imgSrc} className="card-img" key={j}/>
                                    ))}
                            </span>}
                        </span>
                    )
                })}

            </span>
            <span className="title-column">
                <p className="number"> {title.number}</p>
                <p className="title">{title.text}</p>
            </span>
        </span>
    );
  }
}