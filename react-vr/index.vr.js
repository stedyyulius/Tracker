import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image
} from 'react-vr';

export default class react_vr extends React.Component {
  render() {
    return (
      <View>
        <Pano source={{uri:'https://video.360cities.net/littleplanet-360-imagery/360Level43Lounge-8K-stable-noaudio-1024x512.jpg?update_cache=548959'}}/>
        <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqqYjIV_XFLlL9kxHre1RpGtNOA5vthwHAxDPkVrMnETIETXop'}}
          style={{
            width: 1,
            height: 1,
            transform: [{translate: [0, 0, -3]},
                        {rotateX: 0},
                        {rotateY: 0}]
          }} />
        <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMFdrZ5G3bNgCXsN5FcVw_wX45bmYAOU-VZ7cpMdpRbwDOHtE'}}
          style={{
            width: 1,
            height: 1,
            transform: [{translate: [2.5, 1, -3]},
                        {rotateX: 0},
                        {rotateY: 150}]
          }} />
          <Image source={{uri: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1334203/1160/772/m1/fpnw/wm0/plane-icon-flat-01-.jpg?1464952489&s=9df858dc84e12bbb1b7fec70d322afe9'}}
            style={{
              width: 1,
              height: 1,
              transform: [{translate: [-2.7, 2, -3]},
                          {rotateX: 0},
                          {rotateY: 0}]
            }} />
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr', () => react_vr);
