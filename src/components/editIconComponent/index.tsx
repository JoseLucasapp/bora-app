import React from "react";
import { TouchableOpacity, Image } from "react-native";

type EyeIconComponentProps = {
    width: number;
    height: number;
    right: number;
    top: number;
    opt: boolean;
}
const EditIconComponent: React.FC<EyeIconComponentProps> = ({ right, top, width, height, opt }) => {

    const images = {
        pen1: require('../../../assets/icons/pen.png'),
        pen2: require('../../../assets/icons/justPen.png'),
    }
    return (
        <TouchableOpacity style={{ position: 'absolute', right: `${right}%`, top: `${top}%` }}>
            <Image source={opt ? images.pen1 : images.pen2} style={{ width: width, height: height }} />
        </TouchableOpacity>
    )
}

export default EditIconComponent;