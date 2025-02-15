import User from "../models/user.model.js";
import nodemailer from "nodemailer";
import cron from "node-cron";

export const sendmeetingdetails = async (req, res) => {
    try {
        const { userId, date, time, meetingLink } = req.body;

        if(!userId || !date || !time || !meetingLink){
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const meetingTime = new Date(`${date}T${time}:00.000Z`);

        const meetingDetails = `Meeting scheduled for ${meetingTime.toUTCString()}. Join using this link: ${meetingLink}`;

        user.meetingDetails = meetingDetails;
        await user.save();

        res.status(200).json({ message: "Meeting booked successfully", meetingDetails });

        scheduleEmail(user.email, meetingTime,meetingLink);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getmeetingdetails = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ meetingDetails: user.meetingDetails });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


const scheduleEmail = (email, meetingTime,meetingLink) => {
    const oneHourBefore = new Date(meetingTime.getTime() - 60 * 60 * 1000);

    cron.schedule(
        `${oneHourBefore.getUTCMinutes()} ${oneHourBefore.getUTCHours()} * * *`,
        async () => {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "Meeting Reminder",
                text: `Your meeting is scheduled for ${meetingTime.toUTCString()}, Here is the link to join the meeting: ${meetingLink}`,
            }

            try {
                await transporter.sendMail(mailOptions);
                console.log("Email sent successfully");
            } catch (error) {
                console.log("Error sending email:", error);
            }
        },
        {scheduled: true,
            timezone: "UTC",
        }
    )
}