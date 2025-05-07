import React from "react";
import { TouchableOpacity, Image } from "react-native";

type EyeIconComponentProps = {
    width: number;
    height: number;
    right: number;
    top: number;
    handleFunction: (status: boolean) => void;
    status: boolean
}
const EyeIconComponent: React.FC<EyeIconComponentProps> = ({ handleFunction, status, right, top, width, height }) => {

    const images = {
        closed_eye: require('../../../assets/icons/closedEye.png'),
    }
    return (
        <TouchableOpacity onPress={() => handleFunction(!status)} style={{ position: 'absolute', right: `${right}%`, top: `${top}%` }}>
            <Image source={images.closed_eye} style={{ width: width, height: height }} />
        </TouchableOpacity>
    )
}

export default EyeIconComponent;