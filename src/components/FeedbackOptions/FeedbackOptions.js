import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={styles.itemContainer}>
            {options.map(option => {
                return (
                    <li key={option}>
                        <button type="button"
                            onClick={onLeaveFeedback}
                            className={styles.item}
                               >
                            {option}
                        </button>
                </li>
                );
            }) }
        </ul>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;