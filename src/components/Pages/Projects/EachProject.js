import React from "react"
import GoHome from "../../../components/Pages/Common/GoHome"
import ProjectDescription from "./ProjectDescription"
import ProjectImages from "./ProjectImages"
const EachProject = ({ lastItem, laptopImage, name, config, stackTextDesc, projectDesc, projectInfo }) => {
    return (
        <div className="projectElement projectSnapStop h-full w-full pr-1 text-center">
            <div className="flex h-[85%] w-full flex-col overflow-auto overflow-hidden p-1 lg:flex-row">
                <ProjectImages
                    laptopImage={laptopImage}
                    stackTextDesc={stackTextDesc}
                ></ProjectImages>
                <ProjectDescription
                    name={name}
                    stackTextDesc={stackTextDesc}
                    projectInfo={projectInfo}
                    projectDesc={projectDesc}
                    config={config}
                ></ProjectDescription>
            </div>
          
            <GoHome></GoHome>
        </div>
    )
}

export default EachProject
