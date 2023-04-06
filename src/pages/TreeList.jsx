import React, { useEffect, useState } from 'react';
import { getId } from '../api';
import { TreeItem } from '../Components/TreeItem';


const TreeList = () => {
  const [collection, setCollection] = useState([]);
 
  const loadData = async () => {
    return await getId()
      .then((json) => {
        setCollection(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении данных');
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h1 className=' text-xl'>Tree Page</h1>     
      <div className="content">
        {collection
          .filter((obj) => {
            return obj.category;
          })
          .map((obj, index) => (
            <TreeItem
              key={index}
              image={obj.image}
              category={obj.category}
            />
          ))}
      </div>
    </div>
  );
};

export default TreeList;
