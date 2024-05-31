import { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../../constants/Colors.ts";
import { horizontalPixel } from "../../../utils/Normalizer.tsx";
import { BASE_SIZE } from "../../../constants/Size.ts";
import { IBottomTabIcon } from "../../../types/icon.interface.ts";


const HomeIcon: FC<IBottomTabIcon> = ({size = 24, fill = "none", stroke = COLORS.BLACK, isFocused = false}) => {
  const s = horizontalPixel(size)
  const b = BASE_SIZE.ICON;

  if(isFocused){
    stroke = COLORS.WHITE;
    fill = COLORS.GRAY
  }

  return (
    <Svg width={s} height={s} fill={fill} scale={s/b}>
      <Path
        d="M9.02 2.83999L3.63 7.03999C2.73 7.73999 2 9.22999 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28999 21.19 7.73999 20.2 7.04999L14.02 2.71999C12.62 1.73999 10.37 1.78999 9.02 2.83999Z"
        stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" scale={s/b}/>
      <Path d="M12 17.99V14.99" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        scale={s/b}
      />
    </Svg>

  )
}

export default HomeIcon;