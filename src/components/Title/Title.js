import React from 'react';

//Title component will be the text rendered in the browser's tab dynamically
class Title extends React.Component {
    render() {
        return <title>{this.props.mode}</title>
    }
}

export default Title;