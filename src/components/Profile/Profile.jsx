import {useState} from 'react';
import altImage from '../altImage.png';


const Profile =() => {

    const [profileData,setProfileData] = useState({
        Uname: '', DOB: '', Religion: '', Height: ''
    });
    const [submitted,setSubmitted] = useState(false);
    const [picture,setPicture] = useState(null);

    const handleSubmit = async (event) => {
        setSubmitted(true);
        event.preventDefault();
        console.log('Form Submitted');
        return(
            <div>
                <h1>Form Submitted</h1>
            </div>
        );
    };

    const Logout = () => {
        localStorage.clear();
        window.location.reload();
    };
    const back =() => {
        setSubmitted(false);
        setPicture(null);
    };

    if(!submitted){
    return (
        <div className="wrapper">
            <div className="form">
                <button onClick={Logout} className="logoutButton">Logout</button>
                <form onSubmit={handleSubmit}>
                    <label className="label">Name</label>
                    <input required placeholder="Enter your Name..." className="input" type="text" value={profileData.Uname} 
                    onChange={(e) => setProfileData({...profileData,Uname : e.target.value})}/>
                    <label className="label">Date Of Birth</label>
                    <input required className="input" type="date" value={profileData.DOB} 
                    onChange={(e) => setProfileData({...profileData,DOB : e.target.value})}/>
                    <label className="label">Religion</label>
                    <select className="select1" value={profileData.Religion} onChange={(e) => setProfileData({...profileData,Religion : e.target.value})} required>
                        <option value="">Select your Religion</option>
                        <option className="option" value="Christianity">Christianity</option>
                        <option className="option" value="Buddhism">Buddhism</option>
                        <option className="option" value="Hinduism">Hinduism</option>
                        <option className="option" value="Islam">Islam</option>
                        <option className="option" value="Judaism">Judaism</option>
                        <option className="option" value="Sikhism">Sikhism</option>
                        <option className="option" value="Jainism">Jainism</option>
                        <option className="option" value="No Religion">No Religion</option>
                        <option className="option" value="Other Religion">Other Religion</option>
                    </select>
                    <label className="label">Height (in cm)</label>
                    <input required placeholder="Enter your Height in cm..." className="input" type="number" value={profileData.Height} 
                    onChange={(e) => setProfileData({...profileData,Height : e.target.value})}/>
                    <label className="label">Picture</label>
                    <input className="inputButton" type="file" onChange={(e) => setPicture({file: URL.createObjectURL(e.target.files[0])})}/>
                    <button className="submitButton" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
    else{
        var date = profileData.DOB.split('-');
        return (
            <div className="wrapper">
                <div className="form">
                    <button className="backButton" onClick={back}>Back to Form Page</button>
                    <button className="logoutButtonDetailsPage" onClick={Logout}>Logout</button>
                    <div className="details">
                        <Pic picture={picture}></Pic>
                        <h2>Name &nbsp;: &nbsp; {profileData.Uname}</h2>
                        <h2>Date Of Birth &nbsp;: &nbsp;{`${date[2]}-${date[1]}-${date[0]}`}</h2>
                        <h2>Religion &nbsp;:&nbsp; {profileData.Religion}</h2>
                        <h2>Height &nbsp;: &nbsp;{profileData.Height} cm</h2>
                    </div>
                </div>
            </div>
        )
    }

}
const Pic =({picture}) => {
    if(picture == null){
        return (
            <img id="picture" src={altImage} className="picture" alt="ProfPic"/>
        )
    }
    else{
    return(
            <img id="picture" src={picture.file} className="picture" alt="UploadedPic"/>
    );
    }
}

export default Profile;
