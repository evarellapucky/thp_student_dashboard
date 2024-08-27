import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function CategoryList() {
  const [faqData, setFaqData] = useState({ categories: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await axios.get("https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/faq.json");
        setFaqData(response.data);
        setError(null);
      } catch (err) {
        setError('Error fetching the data');
        console.error('Error fetching the data', err);
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
    <div className="w-full">
    {faqData.categories.length > 0 ? (
      faqData.categories.map((category, index) => (
        <div
          key={index}
          className="mb-4"
        >
          <Link 
            to={`/faq/${encodeURIComponent(category.name)}`}
            className="collapse bg-gray-light mb-4 border border-secondary"
          >
            <h4 className="collapse-title bg-gray-light hover:bg-blue-gradient cursor-pointer">
              {category.name}
            </h4>
          </Link>
        </div>
      ))
    ) : (
      <div>No FAQ data available.</div>
    )}
  </div>
  );
}

export default CategoryList;