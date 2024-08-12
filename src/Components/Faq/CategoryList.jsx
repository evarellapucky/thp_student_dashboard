import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const fetchFaqData = async () => {
  try {
    const response = await axios.get("https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/faq.json");
    return response.data;
  } catch (err) {
    console.error('Error fetching the data', err);
    throw err;
  }
};

function CategoryList() {
  const [faqData, setFaqData] = useState({ categories: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFaqData();
        setFaqData(data);
        setError(null);
      } catch (err) {
        setError('Error fetching the data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full max-w-4xl">
    {faqData.categories.length > 0 ? (
      faqData.categories.map((category, index) => (
        <details key={index} className={`collapse collapse-arrow bg-base-200 mb-4 border border-blue-500`}>
          <summary className="collapse-title text-xl font-medium bg-gray-200 flex items-center justify-between px-4 py-2 cursor-pointer">
           
              <Link 
                to={`/faq/${encodeURIComponent(category.name)}`}
                className="block w-full h-full text-blue-500 p-4"
              >
                {category.name}
              </Link>
          
          </summary>
        </details>
      ))
    ) : (
      <div>No FAQ data available.</div>
    )}
  </div>
  );
}

export default CategoryList;