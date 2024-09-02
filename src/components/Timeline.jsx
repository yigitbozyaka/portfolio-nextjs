import { forwardRef } from "react";

const Timeline = (props, ref) => {
    const timeline_data = [
        {
            "year": 2020,
            "title": "Learning the Basics",
            "description": "Started learning HTML, CSS, and JavaScript, and began creating simple websites."
        },
        {
            "year": 2021,
            "title": "Advanced Web Development",
            "description": "Expanded skills by learning React, Node.js, and Next.js, and began freelancing to build websites."
        },
        {
            "year": 2022,
            "title": "Freelancing Experience",
            "description": "Gained practical experience as a freelancer, working on various web development projects."
        },
        {
            "year": 2024,
            "title": "Exploring Mobile Apps",
            "description": "Started learning and developing mobile apps with React Native while continuing freelance work."
        }
    ];
    return (
        <div ref={ref} className="flex flex-col mt-20 xl:mt-0">
            <h4 className="text-3xl text-center font-bold">
                Milestone of My Career?!
            </h4>
            <div className="mx-auto w-20 border mt-4 mb-10"></div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {timeline_data.map((timeline, index) => (
                    <li key={index}>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className={`${index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'} mb-10`}>
                            <time className="font-mono italic">{timeline.year}</time>
                            <h4 className="text-lg font-black">{timeline.title}</h4>
                            <p>
                                {timeline.description}
                            </p>
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default forwardRef(Timeline);