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
            className="collapse bg-base-200 mb-4 border border-primary"
          >
            <div className="collapse-title text-xl font-medium bg-slate-100 hover:bg-blue-500 cursor-pointer">
              {category.name}
            </div>
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