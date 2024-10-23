import { useState, useEffect } from 'react'
import './Make_cv.css'

const Make_cv = ({ changeSubmitted, data }) => {
    
    console.log(data);
    const name = data["nameInput"];

    const EducationCarousel = () => {

        const educationDataNames = Object.getOwnPropertyNames(data).filter((name) => name.includes("educationName"));
        const educationDataFrom = Object.getOwnPropertyNames(data).filter((name) => name.includes("educationFromDate"));
        const educationDataTo = Object.getOwnPropertyNames(data).filter((name) => name.includes("educationToDate"));
        const educationDataSubjects = Object.getOwnPropertyNames(data).filter((name) => name.includes("educationSubjects"));
        
        const EducationTile = (name, subject, from, to) => {
            return (
                <div id="tile">
                    <h2>{data[name]}</h2>
                    <p id="tile-details">{data[subject]}</p>
                    <p id="tile-dates">From {data[from]} to {data[to]}</p>
                </div>
            )
        }

        const tiles = [];
            for (let i=0; i<educationDataNames.length; i++) {
                tiles.push(EducationTile(educationDataNames[i], educationDataSubjects[i], educationDataFrom[i], educationDataTo[i]));
            }

        return (
            <div id="carousel">
                {tiles}
            </div>
        )
    }

    const ExperienceCarousel = () => {

        const experienceDataCompany = Object.getOwnPropertyNames(data).filter((name) => name.includes("experienceCompany"));
        const experienceDataFrom = Object.getOwnPropertyNames(data).filter((name) => name.includes("experienceFromDate"));
        const experienceDataTo = Object.getOwnPropertyNames(data).filter((name) => name.includes("experienceToDate"));
        const experienceDataResponsibilities = Object.getOwnPropertyNames(data).filter((name) => name.includes("experienceResponsibilities"));
        const experienceTitle = Object.getOwnPropertyNames(data).filter((name) => name.includes("experienceTitle"));

        const ExperienceTile = (company, responsibilities, title, from, to) => {
            return (
                <div id="tile">
                    <h2>{data[title]} at {data[company]}</h2>
                    <p id="tile-details">{data[responsibilities]}</p>
                    <p id="tile-dates">From {data[from]} to {data[to]}</p>
                </div>
            )
        }

        const tiles = [];
            for (let i=0; i<experienceDataCompany.length; i++) {
                tiles.push(ExperienceTile(experienceDataCompany[i], experienceDataResponsibilities[i], experienceTitle[i], experienceDataFrom[i], experienceDataTo[i]));
            }

        return (
            <div id="carousel">
                {tiles}
            </div>
        )
    }

    const Contact = () => {
        const email = data["emailInput"];
        const phoneNumber = data["phoneNumberInput"];

        return (
            <div id="contact">
                <h2>Contact Me:</h2>
                <ul>
                    <li><strong>My Email:</strong> {email}</li>
                    <li><strong>My Phone Number:</strong> {phoneNumber}</li>
                </ul>
            </div>
        )
    }
    

    const handleEdit = () => {
        changeSubmitted(false);
    }

    return (
        <div id="Make_cv">
            <h1>{name}'s CV</h1>
            <h2>Education: </h2>
            <EducationCarousel />
            <h2>Experience: </h2>
            <ExperienceCarousel />
            <Contact />
            <button id="edit-button" onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default Make_cv