import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import COLORS from '../theme';

const Icon = ({iconName, width, height, color, onPress, style}) => {
  switch (iconName) {
    case 'DownArrow':
      return (
        <TouchableOpacity style={style} onPress={onPress}>
          <Svg
            width={width ?? '14'}
            height={height ?? '8'}
            viewBox="0 0 14 8"
            fill="none">
            <Path
              d="M2 -8.74228e-08L7 5L12 -5.24537e-07L14 0.999999L7 8L-3.0598e-07 1L2 -8.74228e-08Z"
              fill={color ?? COLORS.arrow}
            />
          </Svg>
        </TouchableOpacity>
      );
    case 'UpArrow':
      return (
        <TouchableOpacity style={style} onPress={onPress}>
          <Svg
            width={width ?? '14'}
            height={height ?? '8'}
            viewBox="0 0 14 8"
            fill="none">
            <Path
              d="M12 8L7 3L2 8L-3.0598e-07 7L7 -3.0598e-07L14 7L12 8Z"
              fill={color ?? COLORS.arrow}
            />
          </Svg>
        </TouchableOpacity>
      );
    case 'LeftArrow':
      return (
        <TouchableOpacity style={style} onPress={onPress}>
          <Svg
            width={width ?? '8'}
            height={height ?? '14'}
            viewBox="0 0 8 14"
            fill="none">
            <Path
              d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z"
              fill={color ?? COLORS.arrow}
            />
          </Svg>
        </TouchableOpacity>
      );
    case 'RightArrow':
      return (
        <TouchableOpacity style={style} onPress={onPress}>
          <Svg
            width={width ?? '8'}
            height={height ?? '14'}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M1.74846e-07 12L5 7L1.04907e-06 2L1 -6.11959e-07L8 7L1 14L1.74846e-07 12Z"
              fill={color ?? COLORS.arrow}
            />
          </Svg>
        </TouchableOpacity>
      );
    case 'Play':
      return (
        <TouchableOpacity style={style} onPress={onPress}>
          <Svg
            width={width ?? '40'}
            height={height ?? '40'}
            viewBox="0 0 40 40"
            fill="none">
            <Path
              d="M34.5496 21.1623C34.7251 20.9174 34.8434 20.6437 34.8977 20.3574C34.952 20.0711 34.941 19.778 34.8654 19.4955C34.7899 19.213 34.6513 18.9469 34.4579 18.7129C34.2646 18.479 34.0203 18.2819 33.7396 18.1334L8.9349 4.7289C8.53153 4.51186 8.06892 4.39734 7.59741 4.39779C6.19743 4.39779 5.06494 5.38224 5.06494 6.59779V33.4001C5.06494 33.8112 5.19744 34.2134 5.44744 34.5623C6.18743 35.5934 7.74741 35.909 8.9349 35.2668L33.7396 21.8645C34.0671 21.6867 34.3471 21.4445 34.5521 21.1601L34.5496 21.1623ZM36.4146 25.6001L11.6124 39.0023C8.04991 40.929 3.36246 39.9801 1.14749 36.889C0.398617 35.847 0.000477114 34.6365 0 33.4001L0 6.60002C0 2.95334 3.39996 0 7.59991 0C9.01739 0 10.4074 0.344445 11.6124 0.995558L36.4146 14.4C39.977 16.3245 41.0695 20.3912 38.852 23.4845C38.2371 24.3423 37.4021 25.0667 36.4146 25.6001V25.6001Z"
              fill={color ?? COLORS.arrow}
            />
          </Svg>
        </TouchableOpacity>
      );
    case 'Pause':
      return (
        <TouchableOpacity style={style} onPress={onPress}>
          <Svg
            width={width ?? '40'}
            height={height ?? '32'}
            viewBox="0 0 24 30"
            fill="none">
            <Path
              d="M20.4 0.683228H18C16.0118 0.683228 14.4 2.27819 14.4 4.17893V25.5539C14.4 27.5215 16.0118 29.1164 18 29.1164L20.4 29.25C22.3883 29.25 24 27.6551 24 25.6875V4.31252C24 2.34499 22.3875 0.683228 20.4 0.683228ZM6 0.683228H3.6C1.61175 0.683228 0 2.27819 0 4.24573V25.6207C0 27.6543 1.61175 29.25 3.6 29.25H6C7.98825 29.25 9.6 27.6551 9.6 25.6875V4.31252C9.6 2.34499 7.9875 0.683228 6 0.683228Z"
              fill={color ?? COLORS.arrow}
            />
          </Svg>
        </TouchableOpacity>
      );
    case 'Facebook':
      return (
        <TouchableOpacity style={style} onPress={onPress}>
          <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 20.1117C0 30.055 7.22167 38.3233 16.6667 40V25.555H11.6667V20H16.6667V15.555C16.6667 10.555 19.8883 7.77833 24.445 7.77833C25.8883 7.77833 27.445 8 28.8883 8.22167V13.3333H26.3333C23.8883 13.3333 23.3333 14.555 23.3333 16.1117V20H28.6667L27.7783 25.555H23.3333V40C32.7783 38.3233 40 30.0567 40 20.1117C40 9.05 31 0 20 0C9 0 0 9.05 0 20.1117Z"
              fill="#3b5998"
            />
          </Svg>
        </TouchableOpacity>
      );
    case 'Google':
      return (
        <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <Path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 9.99999 25.5225 9.99999 20C9.99999 14.4775 14.4775 10 20 10C22.5492 10 24.8683 10.9617 26.6342 12.5325L31.3483 7.81834C28.3717 5.04417 24.39 3.33334 20 3.33334C10.7958 3.33334 3.33333 10.7958 3.33333 20C3.33333 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#FFC107"
          />
          <Path
            d="M5.255 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 10 20 10C22.5492 10 24.8683 10.9617 26.6342 12.5325L31.3483 7.81834C28.3717 5.04417 24.39 3.33334 20 3.33334C13.5983 3.33334 8.04667 6.9475 5.255 12.2425Z"
            fill="#FF3D00"
          />
          <Path
            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0158 27.975C24.2863 29.2903 22.1729 30.0017 20 30C15.665 30 11.9842 27.2358 10.5975 23.3783L5.16251 27.5658C7.92084 32.9633 13.5225 36.6667 20 36.6667Z"
            fill="#4CAF50"
          />
          <Path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7618 25.1803 27.5778 26.7943 26.0133 27.9758L26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#1976D2"
          />
        </Svg>
      );
    default:
      break;
  }
};

export default Icon;
