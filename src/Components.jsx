import { useEffect, useState } from 'react'
import './Components.css'

const Components = ({ changeSubmitted, setData, data }) => {

    const General = ({data}) => {

        return (
            <div id="container">
                <h2>General</h2>
                <div id="item">
                    <label id="name-label" htmlFor="name-input">Name: </label>
                    <input name="nameInput" id="name-input" defaultValue={data.nameInput}/>
                </div>
                <div id="item">
                    <label id="email-label" htmlFor="email-input">Email: </label>
                    <input name="emailInput" id="email-input" defaultValue={data.emailInput}/>
                </div>
                <div id="item">
                    <label id="phone-number-label" htmlFor="phone-number-input">Phone Number: </label>
                    <input name="phoneNumberInput" id="phone-number-input" defaultValue={data.phoneNumberInput}/>
                </div>
            </div>
        )
    }

    const Education = ({data}) => {
        const [sets, setSets] = useState([]);

        const educationDataNames = Object.getOwnPropertyNames(data).filter((name) => name.includes("educationName"));
        const educationDataFrom = Object.getOwnPropertyNames(data).filter((name) => name.includes("educationFromDate"));
        const educationDataTo = Object.getOwnPropertyNames(data).filter((name) => name.includes("educationToDate"));
        const educationDataSubjects = Object.getOwnPropertyNames(data).filter((name) => name.includes("educationSubjects"));

        useEffect(() => {
            const originalSet = [];
            for (let i=0; i<educationDataNames.length; i++) {
                originalSet.push(educationSet(data, educationDataNames[i], educationDataFrom[i], educationDataTo[i], educationDataSubjects[i], true));
            }
            setSets(originalSet);
        }, []);

        const update = () => {
            const newSet = [...sets];
            newSet.push(educationSet());
            setSets(newSet);
        }
        const educationSet = (data, name = "educationName" + sets.length, fromDate = "educationFromDate" + sets.length, toDate = "educationToDate" + sets.length, subjects = "educationSubjects" + sets.length, originalValues = false) => {
            
            const key = crypto.randomUUID();

            return (
                <div id="set" key={key}>
                    <hr/>
                    <div id="item">
                        <label htmlFor={name}>School: </label>
                        <input name={name} id={name} defaultValue={originalValues ? data[name]:""}/>
                    </div>
                    <div id="item">
                        <label htmlFor={subjects}>Subject(s): </label>
                        <input name={subjects} id={subjects} defaultValue={originalValues ? data[subjects]:""}/>
                    </div>
                    <div id="item">
                        <label htmlFor={fromDate}>From: </label>
                        <input type="date" name={fromDate} id={fromDate} defaultValue={originalValues ? data[fromDate]:""}/>
                    </div>
                    <div id="item">
                        <label htmlFor={toDate}>To: </label>
                        <input type="date" name={toDate} id={toDate} defaultValue={originalValues ? data[toDate]:""}/>
                    </div>
                    <hr/>
                </div>
            )
        }

        return (
            <div id="container">
                <h2>Education</h2>
                {sets}
                <button type="button" id="add-button" onClick={update}>Add Education</button>
            </div>
        )
    }

    const Experience = ({data}) => {
        const [sets, setSets] = useState([]);

        const experienceDataCompany = Object.getOwnPropertyNames(data).filter((name) => name.includes("experienceCompany"));
        const experienceDataFrom = Object.getOwnPropertyNames(data).filter((name) => name.includes("experienceFromDate"));
        const experienceDataTo = Object.getOwnPropertyNames(data).filter((name) => name.includes("experienceToDate"));
        const experienceDataResponsibilities = Object.getOwnPropertyNames(data).filter((name) => name.includes("experienceResponsibilities"));
        const experienceTitle = Object.getOwnPropertyNames(data).filter((name) => name.includes("experienceTitle"));

        useEffect(() => {
            const originalSet = [];
            for (let i=0; i<experienceDataCompany.length; i++) {
                originalSet.push(experienceSet(data, experienceDataCompany[i], experienceDataFrom[i], experienceDataTo[i], experienceDataResponsibilities[i], experienceTitle[i], true));
            }
            setSets(originalSet);
        }, []);

        const update = () => {
            const newSet = [...sets];
            newSet.push(experienceSet());
            setSets(newSet);
        }

        const experienceSet = (data, company = "experienceCompany" + sets.length, fromDate = "experienceFromDatee" + sets.length, toDate = "experienceToDate" + sets.length, responsibilities = "experienceResponsibilities" + sets.length, title = "experienceTitle" + sets.length, originalValues = false) => {
            
            const key = crypto.randomUUID();

            return (
                <div id="set" key={key}>
                    <hr/>
                    <div id="item">
                        <label htmlFor={company}>Company: </label>
                        <input name={company} id={company} defaultValue={originalValues ? data[company]:""}/>
                    </div>
                    <div id="item">
                        <label htmlFor={title}>Title: </label>
                        <input name={title} id={title} defaultValue={originalValues ? data[title]:""}/>
                    </div>
                    <div id="item">
                        <label htmlFor={fromDate}>From: </label>
                        <input type="date" name={fromDate} id={fromDate} defaultValue={originalValues ? data[fromDate]:""}/>
                    </div>
                    <div id="item">
                        <label htmlFor={toDate}>To: </label>
                        <input type="date" name={toDate} id={toDate} defaultValue={originalValues ? data[toDate]:""}/>
                    </div>
                    <div id="item">
                        <label htmlFor={responsibilities}>Responsibilities: </label>
                        <input name={responsibilities} id={responsibilities} defaultValue={originalValues ? data[responsibilities]:""}/>
                    </div>
                    <hr/>
                </div>
            )
        }

        return (
            <div id="container">
                <h2>Experience</h2>
                {sets}
                <button type="button" id="add-button" onClick={update}>Add Experience</button>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        setData(formJson);
        changeSubmitted(true);
    }

    const reload = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    return (
        <div id="Components">
            <h1>CV Editor</h1>
            <form method="post" onSubmit={handleSubmit}>
                <General data={data}/>
                <Education data={data}/>
                <Experience data={data}/>
                <div id="buttons">
                    <button type="submit">Submit</button>
                    <button type="reset" onClick={reload}>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default Components