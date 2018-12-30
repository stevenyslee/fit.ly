import React from 'react';
import { Button, ButtonGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Topshelf = ({ onDropDownClick, toggleSplit, onRadioBtnClick, onGenerateWorkoutClick, splitDropdownOpen, split, duration }) => {
  let dropdownName = split || 'Split';

  return (
    <div id='Topshelf'>
      <Dropdown id='SplitMenu' isOpen={splitDropdownOpen} toggle={toggleSplit}>
      <DropdownToggle caret color="primary">
        {dropdownName}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => onDropDownClick('Chest')}>Chest</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem onClick={() => onDropDownClick('Shoulders')}>Shoulders</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem onClick={() => onDropDownClick('Back')}>Back</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem onClick={() => onDropDownClick('Legs')}>Legs</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem onClick={() => onDropDownClick('Arms')}>Arms</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem onClick={() => onDropDownClick('Abs')}>Abs</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem onClick={() => onDropDownClick('Fullbody')}>Fullbody</DropdownItem>
      </DropdownMenu>
      </Dropdown>

      <ButtonGroup id='LengthMenu'>
        <Button color="primary" onClick={() => onRadioBtnClick(2)} active={duration === 2}>Short</Button>
        <Button color="primary" onClick={() => onRadioBtnClick(4)} active={duration === 4}>Medium</Button>
        <Button color="primary" onClick={() => onRadioBtnClick(6)} active={duration === 6}>Long</Button>
      </ButtonGroup>

      <Button id='GeneratePlan' color="primary" size="lg" active onClick={() => onGenerateWorkoutClick()}>Generate Workout</Button>{' '}
    </div>
  );
}

export default Topshelf;
