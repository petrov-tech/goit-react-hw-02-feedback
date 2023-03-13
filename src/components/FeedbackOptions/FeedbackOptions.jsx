import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ positive, negative, neutral }) {
  return (
    <>
      <button className={css.feedbackBtn} onClick={positive}>
        Good
      </button>
      <button className={css.feedbackBtn} onClick={neutral}>
        Neutral
      </button>
      <button className={css.feedbackBtn} onClick={negative}>
        Bad
      </button>
    </>
  );
}
