import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Button Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}





// import React from 'react';
// import { Dropdown} from 'reactstrap';
// import { DropdownButton} from 'reactstrap';
// class Dropdownn extends React.Component {
//  render(){
//      return (
//        <Dropdown.Button id="dropdown-basic-button" title="Dropdown button">
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//         </Dropdown.Button>
//      )
// }  
// };

// export default Dropdown;