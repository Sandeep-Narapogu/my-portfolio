import React from "react"
import VerticalStackText from "./VerticalStackText"
const ProjectImages = ({ stackTextDesc, laptopImage }) => {
    return (
        <div className="flex w-full items-center lg:w-[60%]">
            <div className="flex w-[5%]">
                <VerticalStackText stackTextDesc={stackTextDesc}></VerticalStackText>
            </div>
            <div className="flex w-[95%] items-center">
                <img draggable="false" className="h-[100%] w-[70%]" src={laptopImage} alt="laptop version"></img>
            </div>
        </div>
    )
}

export default ProjectImages
