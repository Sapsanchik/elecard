import React from 'react';
import { API_URL } from '../config';
import moment from 'moment/moment';

export const Item = ({
  image,
  filesize,
  timestamp,
  category,
  handleDeleted,
}) => {
  const fulldate = new Date(timestamp);
  const converted_date = moment(fulldate).format('L');

  return (
    <div>
      <button onClick={() => handleDeleted(image)} className="btn">
        X
      </button>
      <img className="img" src={`${API_URL}${image}`} alt={category} />
      <p>Категория: {category}</p>
      <div className="flex justify-between">
        <p>Дата: {converted_date}</p>
        <p>Размер: {filesize / 1000} Mb</p>
      </div>
    </div>
  );
};
