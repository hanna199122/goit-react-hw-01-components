import StatisticsItem from '../statisticsItem';

import css from './Statistics.module.css';

const Statistics = props => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css['stat-list']}>
        {/* <StatisticsItem />
        <StatisticsItem />
        <StatisticsItem />
        <StatisticsItem /> */}
        {props.stats.map(stat => (
          <StatisticsItem key={stat.id} {...stat} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
