import {Dimensions} from 'react-native';

const {width, height, scale} = Dimensions.get('screen');

export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;
export const DEVICE_SCALE = scale;
