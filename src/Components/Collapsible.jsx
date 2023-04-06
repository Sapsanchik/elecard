import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

const Collapsible = (props) => {
  const { title = 'click me', children } = props;
  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div onClick={handleVisibility} className=" py-3 px-5 bg-amber-200">
        {title}
      </div>
      <AnimatePresence initial={false}>
        {
          visible && (
            <motion.div
              initial={{height: 0}}
              animate={{height: 'auto'}}
              exit={{height: 0}}
              style={{overflow: 'hidden'}}
              transition={{duration: 1}}
            >
              <div className='py-3 px-5'>
                {children}
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </>
  );
};

export default Collapsible;
