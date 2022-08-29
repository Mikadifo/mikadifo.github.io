import './ExperienceCard.css';

const ExperienceCard = ({ experienceInfo }) => {
    return (
        <div
            className="row experience-container"
            data-testid={experienceInfo.id}
        >
            <div className="container col-6 col-md-4">
                <div className="row justify-content-md-center text-md-center">
                    <img
                        className="exp-img"
                        src={experienceInfo.imgUrl}
                        alt={experienceInfo.title}
                    />
                    <div className="row">
                        <p className="date-label">
                            {experienceInfo.dateStart} -{' '}
                            {experienceInfo.dateEnd}
                        </p>
                    </div>
                </div>
            </div>
            <div className="container col-4 justify-content-center d-none d-md-flex">
                <div className="separator" />
            </div>
            <div className="container col-6 col-md-4 d-flex align-items-center">
                <div className="row">
                    <h3 className="card-title text-md-center text-end">
                        {experienceInfo.institution}
                    </h3>
                    <p className="card-area text-md-center text-end">
                        {experienceInfo.title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
