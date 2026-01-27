import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Countdown2 from "../Countdown/Countdown2";
import { Project, data } from '../../Interfaces/InterfaceProject'; 
import { useTranslation } from 'react-i18next';
import "./Projects.css";

function Projects() {
    const { t } = useTranslation();
    const [dates, setDates] = useState<Project[]>([]);

    useEffect(() => {
        setDates(data);
    }, []);

    return (
        <section className="StyleCard">
            <h1 className="marketplace-title">{t('projects.title')}</h1>
            <div className="slider owl-carousel">
                {dates.map((item, index) => (
                    <div 
                        className={`card ${item.status === "não iniciado" ? "blur" : ""}`} 
                        key={item.id}
                    >
                        <div className="img"><img src={item.image} alt={item.title} /></div>
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="sub-title">{item.subtitle}</div>
                            <div className="progress-container">
                                <Countdown2 data={new Date(item.date)} title={item.title} />
                                <progress id={`file${index}`} value={item.progress} max="100"></progress>
                                <span className="progress-percentage">{item.progress}%</span>
                            </div>
                            <div className="btn-website">
                                <a className="btn-website-link" href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Abrir website do ${item.title}`} title={item.title}>
                                    {t('projects.websiteButton')}
                                </a>
                            </div>
                            <div className="btn">
                                <Link className="btn-link" to={`/project/${item.id}`} aria-label={`Ver cronograma de ${item.title}`} title={t('projects.scheduleButton')}>
                                    {t('projects.scheduleButton')}
                                </Link>
                            </div>
                        </div>
                        {item.status === "não iniciado" && (
                            <div className="overlay">
                                {t('projects.comingSoon')}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
