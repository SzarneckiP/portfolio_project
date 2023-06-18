import React, { useState, useEffect } from 'react'
// import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Skills.scss'

const Skills = () => {

    const [skills, setSkills] = useState([])
    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        const skillsQuery = '*[_type == "skills"]'
        const experiencesQuery = '*[_type == "experiences"]'

        client.fetch(skillsQuery)
            .then((data) => {
                setSkills(data)
            })

        client.fetch(experiencesQuery)
            .then((data) => {
                setExperiences(data)
            })
    }, [])

    return (
        <>
            <h2 className='head-text'>Skills & <span>Experience</span></h2>

            <div className='app__skills-container'>
                <motion.div
                    className='app__skills-list'
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className='app__skills-item app__flex'
                            key={skill.name + index}
                        >
                            <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </div>
                            <p className='p-text'>
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className='app__skills-exp'>
                    {experiences?.map((experience, index) => (
                        <motion.div
                            className='app__skills-exp-item'
                            key={experience.year + index}
                        >
                            <div className='app__skills-exp-year'>
                                <p className='bold-text'>
                                    {experience.year}
                                </p>
                            </div>
                            <motion.div className='app__skills-exp-works'>
                                {experience.works.map((work, index) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className='app__skills-exp-work'
                                            key={work.name + index}
                                            data-tooltip-id={work.name}
                                            data-tooltip-offset='30'
                                            data-tooltip-variant='light'
                                        >
                                            <h4 className='bold-text'>
                                                {work.name}
                                            </h4>
                                            <p className='p-text'>
                                                {work.company}
                                            </p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            className='skills-ReactTooltip'
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg',
)