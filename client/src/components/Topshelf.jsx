import React from 'react';
import { Button, ButtonGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import SplitMenu from './SplitMenu.jsx';
import LengthMenu from './LengthMenu.jsx';
import GeneratePlan from './GeneratePlan.jsx';

const Topshelf = (props) => (
  <div id='Topshelf'>
  <Dropdown isOpen={props.state.splitDropdownOpen} toggle={props.toggleSplit}>
  <DropdownToggle caret color="primary">
    Split
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Chest</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Shoulders</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Back</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Legs</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Arms</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Abs</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Fullbody</DropdownItem>
  </DropdownMenu>
  </Dropdown>

  <ButtonGroup>
    <Button color="primary" onClick={() => props.onRadioBtnClick(1)} active={props.state.rSelected === 1}>One</Button>
    <Button color="primary" onClick={() => props.onRadioBtnClick(2)} active={props.state.rSelected === 2}>Two</Button>
    <Button color="primary" onClick={() => props.onRadioBtnClick(3)} active={props.state.rSelected === 3}>Three</Button>
  </ButtonGroup>

  <Button color="primary" size="lg" active>Generate Workout</Button>{' '}
  </div>
)

export default Topshelf;
