import React from 'react';

import Svg, {Path} from 'react-native-svg';

export const ArrowDown = props => {
  return (
    <Svg width="14" height="30" viewBox="-5 0 30 10 ">
      <Path
        {...props}
        id="a"
        d="M1.635 5.195h20.722c1.434 0 2.15 1.731 1.136 2.746L13.136 18.306a1.614 1.614 0 0 1-2.28 0L.5 7.941C-.515 6.926.201 5.195 1.635 5.195z"
      />
    </Svg>
  );
};
