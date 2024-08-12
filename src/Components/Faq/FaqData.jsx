import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import CollapseBar from '../CollapseBar';

function FaqData() {
  const [faqData, setFaqData] = useState({ categories: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await axios.get("https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/faq.json");
        console.log("data", response.data);
        setFaqData(response.data);
        setError(null);
      } catch (err) {
        setError('Error fetching the data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex justify-center p-4">
    <div className="w-full max-w-4xl">
      {faqData.categories.length > 0 ? (
        faqData.categories.map((category, index) => (
          <CollapseBar
            key={index}
            title={category.name}
            content={
              <div>
                {category.questions.map((q, qIndex) => (
                  <div key={qIndex} className="mb-4">
                    <strong>{q.question}</strong>
                    <div>{q.answer}</div> 
                  </div>
                ))}
              </div>
            }
            borderColor="border-blue-500"
          />
        ))
      ) : (
        <div>No FAQ data available.</div>
      )}
    </div>
  </div>
  );
}

export default FaqData


