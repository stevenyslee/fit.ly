import React from 'react';
import { Button, ButtonGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import SplitMenu from './SplitMenu.jsx';
// import LengthMenu from './LengthMenu.jsx';
// import GeneratePlan from './GeneratePlan.jsx';

const Topshelf = (props) => (
  <div id='Topshelf'>
  <Dropdown isOpen={props.state.splitDropdownOpen} toggle={props.toggleSplit}>
  <DropdownToggle caret color="primary">
    Split
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem onClick={() => props.onDropDownClick('Chest')}>Chest</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem onClick={() => props.onDropDownClick('Shoulders')}>Shoulders</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem onClick={() => props.onDropDownClick('Back')}>Back</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem onClick={() => props.onDropDownClick('Legs')}>Legs</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem onClick={() => props.onDropDownClick('Arms')}>Arms</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem onClick={() => props.onDropDownClick('Abs')}>Abs</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem onClick={() => props.onDropDownClick('Fullbody')}>Fullbody</DropdownItem>
  </DropdownMenu>
  </Dropdown>

  <ButtonGroup>
    <Button color="primary" onClick={() => props.onRadioBtnClick(2)} active={props.state.rSelected === 2}>Short</Button>
    <Button color="primary" onClick={() => props.onRadioBtnClick(4)} active={props.state.rSelected === 4}>Medium</Button>
    <Button color="primary" onClick={() => props.onRadioBtnClick(6)} active={props.state.rSelected === 6}>Long</Button>
  </ButtonGroup>

  <Button color="primary" size="lg" active onClick={() => props.onGenerateWorkoutClick()}>Generate Workout</Button>{' '}
  </div>
)

export default Topshelf;
