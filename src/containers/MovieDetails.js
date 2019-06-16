import React, { Component } from 'react';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
    }


    render() {
        return (
            <div
            style={{
                display: `${this.props.showModal ? 'block' : 'none'}`,
                backgroundColor: 'rgba(0,0,0,.8)'
              }}
            >
                Modal Pop up
            </div>
        );
    }

}

export default MovieDetails;
