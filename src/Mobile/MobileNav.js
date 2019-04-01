import React, { Component } from 'react'; 

class MobileNav extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }
    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
        <div class="wrapper">
            {this.state.isOpen && <div class="sidebar">
            <ul className="nav">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Menu</li>
                <li>Rewards</li>
                <li>Want to join our team?</li>
                <li>Location</li>
                <li>Specials</li>
              </ul>
            </div>}
            <button onClick={() => this.toggleMenu()}>Toggle Menu</button>
      </div>
        )
    }
}

export default MobileNav;