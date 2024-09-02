import { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext"; // 引入LanguageContext
import React from 'react'

const NotFound = () => {
  const { texts } = useContext(LanguageContext); // 使用LanguageContext

  return (
    <div>
      {texts.notFound}
    </div>
  )
}

export default NotFound;
