import React from "react";
import { TouchableOpacity, Image } from "react-native";

type SearchIconProps = {
    width: number;
    height: number;
    right: number;
    top: number;
}
const SearchIcon: React.FC<SearchIconProps> = ({ right, top, width, height }) => {

    const images = {
        search: require('../../../assets/icons/Search.png'),
    }
    return (
        <TouchableOpacity style={{ position: 'absolute', right: `${right}%`, top: `${top}%`, zIndex: 1 }}>
            <Image source={images.search} style={{ width: width, height: height }} />
        </TouchableOpacity>
    )
}

export default SearchIcon;