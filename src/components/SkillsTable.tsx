import React, { useRef } from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNginx, SiFlask, SiDjango, SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiPython, SiTypescript, SiJavascript, SiFastapi, SiUnity, SiLinux, SiExpress, SiGit, SiHtml5, SiCss3, SiDocker } from "react-icons/si";
import { motion, useInView } from 'framer-motion';

interface Technology {
    technologies: string;
    skills: number;
}

const SkillsTable: React.FC = () => {
    const data: Technology[] = [
        { technologies: 'Python', skills: 93 },
        { technologies: 'JavaScript', skills: 89 },
        { technologies: 'TypeScript', skills: 46 },
        { technologies: 'MySQL', skills: 42 },
        { technologies: 'FastAPI', skills: 51 },
        { technologies: 'Next.js', skills: 32 },
        { technologies: 'Git', skills: 37 },
        { technologies: 'Node.js', skills: 90 },
        { technologies: 'React', skills: 43 },
        { technologies: 'Tailwind CSS', skills: 75 },
        { technologies: 'Unity', skills: 16 },
        { technologies: 'Linux', skills: 92 },
        { technologies: 'MongoDB', skills: 6 },
        { technologies: 'Express', skills: 58 },
        { technologies: 'HTML', skills: 97 },
        { technologies: 'CSS', skills: 88 },
        { technologies: 'Docker', skills: 3 },
        { technologies: 'Django', skills: 17 },
        { technologies: 'Flask', skills: 13 },
        { technologies: 'Nginx', skills: 50 },
    ];

    return (
        <div className="overflow-x-visible">
            <table className="w-full text-sm text-left sm:table-auto">
                <thead className="text-xl uppercase font-orbitron font-bold dark:border-gray-700 rounded-t-lg">
                <tr>
                    <th scope="col" className="px-6 py-3 sm:w-auto">
                        Tech
                    </th>
                    <th scope="col" className="px-6 py-3 sm:w-auto min-w-[100px]">
                        Skills
                    </th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref);  // Отслеживаем только при первом входе в область видимости

                    return (
                        <tr
                            ref={ref}
                            key={index}
                            className="border-b border dark:border-gray-700"
                        >
                            <td className="px-6 py-4 flex items-center sm:w-auto">
                                {item.technologies === 'React' && <FaReact className="mr-2 size-6" />}
                                {item.technologies === 'Next.js' && <SiNextdotjs className="mr-2 size-6" />}
                                {item.technologies === 'Tailwind CSS' && <SiTailwindcss className="mr-2 size-6" />}
                                {item.technologies === 'Node.js' && <FaNodeJs className="mr-2 size-6" />}
                                {item.technologies === 'MongoDB' && <SiMongodb className="mr-2 size-6" />}
                                {item.technologies === 'MySQL' && <SiMysql className="mr-2 size-6" />}
                                {item.technologies === 'Python' && <SiPython className="mr-2 size-6" />}
                                {item.technologies === 'JavaScript' && <SiJavascript className="mr-2 size-6" />}
                                {item.technologies === 'TypeScript' && <SiTypescript className="mr-2 size-6" />}
                                {item.technologies === 'FastAPI' && <SiFastapi className="mr-2 size-6" />}
                                {item.technologies === 'Unity' && <SiUnity className="mr-2 size-6" />}
                                {item.technologies === 'Linux' && <SiLinux className="mr-2 size-6" />}
                                {item.technologies === 'Express' && <SiExpress className="mr-2 size-6" />}
                                {item.technologies === 'Git' && <SiGit className="mr-2 size-6" />}
                                {item.technologies === 'HTML' && <SiHtml5 className="mr-2 size-6" />}
                                {item.technologies === 'CSS' && <SiCss3 className="mr-2 size-6" />}
                                {item.technologies === 'Docker' && <SiDocker className="mr-2 size-6" />}
                                {item.technologies === 'Django' && <SiDjango className="mr-2 size-6" />}
                                {item.technologies === 'Flask' && <SiFlask className="mr-2 size-6" />}
                                {item.technologies === 'Nginx' && <SiNginx className="mr-2 size-6" />}
                                {item.technologies}
                            </td>
                            <td className="px-6 py-4 sm:w-auto min-w-[100px]">
                                <motion.div
                                    className="w-full rounded-full dark:border-gray-700"
                                    initial={{ width: '0%' }}
                                    animate={isInView ? { width: `${item.skills}%` } : {}}  // Анимация только при попадании в видимость
                                    transition={{
                                        duration: 1,
                                        ease: [0.22, 1, 0.36, 1], // Плавное увеличение ширины
                                    }}
                                    style={{
                                        backgroundColor:
                                            item.skills >= 50
                                                ? '#22c55e'
                                                : item.skills < 50 && item.skills >= 20
                                                    ? '#F59E0B'
                                                    : '#EF4444',
                                        minWidth: '50px',
                                    }}
                                >
                                    <span className="text-xs font-medium text-neutral-950 text-center block">
                                        {item.skills}%
                                    </span>
                                </motion.div>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default SkillsTable;
