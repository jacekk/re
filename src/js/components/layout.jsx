import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h1>{ this.props.pageTitle }</h1>
                </div>
                <div className="row">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Layout;
