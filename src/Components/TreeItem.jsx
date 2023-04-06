import React, {useState} from 'react';
import { API_URL } from '../config';
import Collapsible from './Collapsible';
import Modal from './Modal';

export const TreeItem = ({ image, category }) => {
  const [active, setActive] = useState(false)

  return (
    <div className='root'>
      <Collapsible title='Карточка'>
        <form className="root-child flex justify-start">
          <Collapsible title={'Категория: '+ category}>
            <ul className="root-li pl-10 border">
              <li className="pl-12 border">Имя: {image}</li>
              <li className="pl-12 border"><img onClick={() => setActive(true)} className='root-img' src={`${API_URL}${image}`} alt={category} /></li>
            </ul>
          </Collapsible>
        </form>
      </Collapsible>
      <Modal active={active} setActive={setActive} >
        <img src={`${API_URL}${image}`} alt={category} />
      </Modal>
    </div>
  );
};
