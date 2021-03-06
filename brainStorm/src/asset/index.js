import React from 'react';
import { Image } from 'react-native';
import * as flags from './flagsicon';

type Props = {
  size: 16 | 24 | 32 | 48 | 64,
  code: string,
  type?: 'flat' | 'shiny',
  style?: any,
};

const Flag = ({ size = 64, code, type = 'shiny', style }: Props) => {
  const flag = flags[code];
  const unknownFlag = flags[type];

  return (
    <Image
      source={flag || unknownFlag}
      style={[{ width: size, height: size }, style]}
    />
  );
};

export default Flag;
