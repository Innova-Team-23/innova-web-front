import React, { useEffect, useState } from 'react';
import { CustomMenu } from "./Test";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Test2() {
    const [selected, setSelected]=useState(0);
    const [selectedKeys, setSelectedKeys] = useState("/");
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        const pathName = location.pathname;
        setSelectedKeys(pathName);
      }, [location.pathname]);
  return (
    <div>
        <div className="menu">
        {CustomMenu.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => {
                navigate(item.key);
                setSelected(index);
              }}
            >
    
            </div>
          );
        })}
    </div>
    </div>
  );
}
