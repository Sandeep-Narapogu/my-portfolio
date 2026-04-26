import React from "react"
import EachItemList from "../Common/EachItemList"
const Achievements = () => {
    return (
        <React.Fragment>
            <h1 className="text-3xl text-green-400">Certificates</h1>
            <EachItemList desc="Microsoft Azure Developer (AZ-204) | Azure Fundamentals (AZ-900) | Data Fundamentals (DP-900) | AI Fundamentals (AI-900) "></EachItemList>
            <EachItemList desc="Postman API Fundamentals Student Expert certification."></EachItemList>
            <EachItemList desc="Atlassian Agile Project Management Professional Certificate"></EachItemList>
            <EachItemList desc="Career Essentials in GitHub by GitHub"></EachItemList>
            </React.Fragment>







    )
}

export default Achievements
