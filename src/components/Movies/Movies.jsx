import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Movies extends Component {

    // We want the list of movies to be shown on the home page on page load, so let's go get them.
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_MOVIES'
        })
    }

    render() {
        return (
            <div>
                <ul className="HomePageLayout">
                    {this.props.reduxStore.movies.map(flick =>
                        <li className="ListItemLayout" key={flick.id}>
                                <img
                                    src={flick.poster}
                                    alt={flick.title}
                                    value={flick.id}
                                />
                            <div className="DescriptionBox" >
                                <h1>{flick.title}</h1>
                                <p><i>{flick.description}</i></p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(Movies);