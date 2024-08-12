import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import CollapseBar from './CollapseBar';

function FaqData() {
  const [FaqData, setFaqData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
  

    const fetchFaqData = async () => {
      try {
        const response = await axios.get("https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/faq.json");
        console.log("data", response.data);
        setFaqData(response.data);
      } catch (err) {
        setError('Error fetching the data');
        console.error(err);
      }
    }; 
})

  return (
    <div>
      
    </div>
  )
}

export default FaqData


