import css from './feedbackSection.module.css'
import propTypes from 'prop-types';

const Section = ({ title, children }) => (
    <section>
        <h2 className={css.statisticsTitle}>{title}</h2>
        {children}
    </section>

);

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
};

export default Section;