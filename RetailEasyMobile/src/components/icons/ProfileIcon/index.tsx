import React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../../constants/Colors.ts";
import { verticalPixel } from "../../../utils/Normalizer.ts";
import { IBottomTabIcon } from "../../../types/icon.interface.ts";


const ProfileIcon: React.FC<IBottomTabIcon> = ({ size = 24, isFocused = false, fill = "none", stroke = COLORS.GRAY }) => {
  const s = verticalPixel(size)

  if (isFocused) {
    stroke = COLORS.PINK;
  }
  return (
    <Svg width={s} height={s} fill="none" viewBox={"0 0 24 24"}>
      <Path
        d="M12.1197 12.78C12.0497 12.77 11.9597 12.77 11.8797 12.78C10.1197 12.72 8.71973 11.28 8.71973 9.50998C8.71973 7.69998 10.1797 6.22998 11.9997 6.22998C13.8097 6.22998 15.2797 7.69998 15.2797 9.50998C15.2697 11.28 13.8797 12.72 12.1197 12.78Z"
        stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={fill} />
      <Path
        d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z"
        stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={fill} />
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export default ProfileIcon;
