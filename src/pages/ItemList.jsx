import React, { useEffect, useState } from 'react';
import { getId } from '../api';
import { Item } from '../Components/Item';
import { Button, Spinner } from 'flowbite-react';

const cats = [
  { name: 'Все' },
  { name: 'Имя' },
  { name: 'Дата' },
  { name: 'Размер' },
  { name: 'Категория' },
];

const ItemList = () => {
  const [collection, setCollection] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 100);
  };
  const decrementCount = () => {
    setCount(count - 100);
  };

  const handleReset = () => {
    loadData();
  };

  const handleDeleted = (id) => {
    setCollection((list) => {
      const newCollection = [...list];
      const index = newCollection.map((el) => el.image).indexOf(id);
      newCollection.splice(index, 1);
      return newCollection;
    });
  };

  const loadData = async () => {
    return await getId()
      .then((json) => {
        setIsLoading(false);
        setCollection(json);
        console.log(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении данных');
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <Spinner aria-label="Extra large spinner example" size="xl" />{' '}
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div className="form flex w-full justify-between gap-5 pl-7 pr-7 pt-14">
        <form className="form-search flex gap-5">
          <label className="flex gap-3">
            {cats.map((obj, i) => (
              <div>
                <input
                  type="radio"
                  onClick={() => setCategoryId(i)}
                  className={categoryId === i ? 'active' : ''}
                  key={obj.name}
                  name={obj.name}
                  checked={obj.name === 'Категория'}
                />
                <p>{obj.name}</p>
              </div>
            ))}
          </label>
          <input
            className="search-input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Поиск"
          />
        </form>

        <div className="">
          <Button
            className=" w-32"
            gradientDuoTone="greenToBlue"
            onClick={() => handleReset()}
          >
            Reset
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-5 justify-center align-middle">
        {collection.length ? (
          collection
            .filter((obj) => {
              return obj.category
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            })
            .map((obj, index) => (
              <Item
                key={index}
                handleDeleted={handleDeleted}
                image={obj.image}
                filesize={obj.filesize}
                timestamp={obj.timestamp}
                category={obj.category}
              />
            ))
            .splice(count, 100)
        ) : (
          <div>
            <Spinner aria-label="Extra large spinner example" size="xl" />{' '}
            Loading...
          </div>
        )}
      </div>
      <div className="flex w-full justify-center pt-10 pb-14 gap-2">
        <Button
          className=" w-32"
          onClick={decrementCount}
          gradientDuoTone="greenToBlue"
        >
          Previos
        </Button>
        <div className="hidden">{count}</div>
        <Button
          className=" w-32"
          onClick={incrementCount}
          gradientDuoTone="greenToBlue"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ItemList;
