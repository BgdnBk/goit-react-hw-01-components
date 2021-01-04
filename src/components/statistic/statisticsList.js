import React from 'react';
import PropTypes from 'prop-types';

import Statistik from './Statistik';

function StatisticList({ items }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {items.map(item => (
          <Statistik key={item.id} label={item.label} stats={item.percentage} />
        ))}
      </ul>
    </section>
  );
}

export default StatisticList;

StatisticList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
