import React from 'react';
import PropTypes from 'prop-types';
import s from '../profile-social/profile.module.css';

export default function Painting({
  name,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.liStyles}>
          <span className={s.label}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={s.liStyles}>
          <span className={s.label}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={s.liStyles}>
          <span className={s.label}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Painting.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
