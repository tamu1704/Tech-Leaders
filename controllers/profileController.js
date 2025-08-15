
const Profile = require("../models/profileModel");


const getProfile = async (req,res)=>{
    const data = await Profile.find({});
    return res.status(200).json({ 
        message: "All Profiles",
        data
    });


}

const updateProfile = async (req, res) => {
    const { imageUrl, summary, skills, workExperience, linkedinUrl, githubUrl, codingPlatform, resumeUrl } = req.body;

    if (
        !imageUrl ||
        !summary ||
        !skills ||
        !workExperience ||
        !linkedinUrl ||
        !githubUrl ||
        !codingPlatform ||
        !resumeUrl
    ) {
        return res.status(400).send({ message: "Please Add all mandatory fields" });
    }

    const updatedProfile = await Profile.findOneAndUpdate(
        { userId: req.user[0]._id },
        { imageUrl, summary, skills, workExperience, linkedinUrl, githubUrl, codingPlatform, resumeUrl },
        { new: true }
    );

    if (!updatedProfile) {
        return res.status(400).json({ message: "Profile not updated" });
    }
    return res.status(200).json({
        message: "Profile Updated",
        data: updatedProfile
    });
};

const createProfile = async (req,res)=> {  
    const { imageUrl, summary, skills, workExperience, linkedinUrl, githubUrl, codingPlatform, resumeUrl} = req.body;

    if (!imageUrl || !summary,! skills || !workExperience, !linkedinUrl || !githubUrl, !codingPlatform || !resumeUrl){
        return res.status(400).send({ message: "Please Add all mandatory fields" });
    }

    console.log(req.user)

    const newProfile = await Profile.create({
        userId: req.user[0]._id,
        imageUrl,
        summary,
        skills, 
        workExperience,
        linkedinUrl,
        githubUrl, 
        codingPlatform,
        resumeUrl
    })

    const data = await newProfile.save();

    return res.status(201).json({ 
        message: "Profile Created",
        data
    });


}



module.exports = {getProfile, createProfile, updateProfile};
