import React from 'react';
import { Work, Course } from '../types';

interface SelectedWorksProps {
    works: Work[];
    courses: Course[];
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ works, courses }) => {
    return (
        <section id="selected" className="selected-works">
            <div className="section-header">
                <span className="section-number">01</span>
                <span className="section-title">Selected Works</span>
            </div>

            <div className="gallery-grid" id="selected-container">
                {works.map((work, index) => (
                    <div className={`card ${work.gridClass || 'col-span-1'}`} key={index}>
                        <div className="card-image">
                            <img src={work.img} alt={work.title} />
                        </div>
                        <div className="card-info">
                            <div className="project-meta">
                                {work.title} <span style={{ opacity: 0.5, margin: '0 4px' }}>–</span> {work.year}
                            </div>
                            <div className="project-role">
                                {work.role}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Courses Section */}
            <div className="courses-section">
                <h3 className="courses-title">Curso de Iniciação ao Teatro — CITAC</h3>
                <p className="courses-role">Producer</p>
                <div className="courses-grid" id="courses-container">
                    {courses.map((course, index) => (
                        <div className="course-card" key={index}>
                            <div className="course-img blur-img">
                                <img src={course.img} alt="CITAC" />
                            </div>
                            <span className="course-year">{course.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
