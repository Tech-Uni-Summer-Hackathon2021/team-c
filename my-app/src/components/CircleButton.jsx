import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { shape, func, string } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleButton(props) {
  const {
    style, onPress, name,
  } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Feather size={32} color="white" name={name} />
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  name: string.isRequired,
  style: shape(),
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 50,
    height: 50,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 40,
  },
});
