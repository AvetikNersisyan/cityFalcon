import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {THEME} from '../../themes/theme';

export const DropDown = ({items}) => {
  const [open, setOpen] = useState(true);
  const handleChange = value => {
    console.log(value, 'value');
    setOpen(false);
  };
  return (
    <DropDownPicker
      placeholder="language"
      items={items}
      open={open}
      onSelectItem={handleChange}
      onPress={() => setOpen(p => !p)}
    />
  );
};
