import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";


import "react-vertical-timeline-component/style.min.css";
import asu from "../../images/asu.png";
import coep from "../../images/coep.png";


const courses = [

    {
        university_name: "Arizona State University",
        icon: asu,
        iconBg: "#E6DEDD",
        date: "Aug 2022 - May 2024",
        points: [
            "Software Design",
            "Data Visualization",
            "Software Verification and Validation Testing",
            "Advanced Data Structures",
            "Semantic Web Engineering",
            "Game Programming",
            "Human Computer Interaction"
        ],
    },

    {
        university_name: "College of Engineering Pune (COEP)",
        icon: coep,
        iconBg: "#E6DEDD",
        date: "Aug 2014 - May 2018",
        points: [
            "Data Structures and Algorithms",
            "Operating Systems",
            "Network Architecture and Wireless Protocol",
            "Data Mining",
            "Database Management Systems",
            "Big data",
            "Natural Language Processing",
            "Human Computer Interaction"
        ],
    }
];

const CourseCard = ({ course }) => {
    return (
        <VerticalTimelineElement

            contentStyle={{
                background: "#112240",
                color: "#a8b2d1",
                boxShadow: "0 2px 0 #64ffda",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #64ffda" }}
            date={course.date}
            iconStyle={{
                background: course.iconBg,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', // Center the content vertically
                borderRadius: '50%', // Make the container circular
                overflow: 'hidden', // Hide overflow content
            }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={course.icon}
                        alt={course.university_name}
                        // className='w-[60%] h-[60%] object-contain'
                        className='w-full h-full object-contain'
                    />
                </div>
            }
        >
            <div>
                {/* <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3> */}
                <p
                    className='text-[16px]'
                    style={{ margin: 0, color: '#64ffda' }}
                >
                    {course.university_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {course.points.map((point, index) => (
                    <li
                        key={`course-point-${index}`}
                        className='pl-1 tracking-wider'
                        style={{ fontSize: 17 }}
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};



const Education = () => {
    return (
        <>
            <h2 className="numbered-heading">Education</h2>
            <div className='mt-20 flex flex-col'>
                <VerticalTimeline className='custom-timeline'>

                    {courses.map((course, index) => (
                        <CourseCard
                            key={`experience-${index}`}
                            course={course}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
}

export default Education;