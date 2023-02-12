import React from 'react';

export default function Categories(props){
    return(
        <div>
            <h1>Categories</h1>
            <div className="categories--row">
            <div className="category--item">
                    <div>
                        <img src="http://placehold.it/" />
                    </div>
                    <div className="category--info">
                        <h3 className="category--title"></h3>
                        <p className="category--title">Category description</p>
                        <p className="category--title" >Courses: <span className="category--courses-num"><i>5</i></span></p>
                    </div>
                </div>
                <div className="category--item">
                    <div>
                        <img src="http://placehold.it/" />
                    </div>
                    <div className="category--info">
                        <h3 className="category--title"></h3>
                        <p className="category--title">Category description</p>
                        <p className="category--title" >Courses: <span className="category--courses-num"><i>5</i></span></p>
                    </div>
                </div>
                <div className="category--item">
                    <div>
                        <img src="http://placehold.it/" />
                    </div>
                    <div className="category--info">
                        <h3 className="category--title"></h3>
                        <p className="category--title">Category description</p>
                        <p className="category--title" >Courses: <span className="category--courses-num"><i>5</i></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}