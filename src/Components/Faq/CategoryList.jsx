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
    <div>
    {faqData.categories.map((category, index) => (
      <div key={index}>
        <h2>
          <Link to={`/faq/${encodeURIComponent(category.name)}`}>
            {category.name}
          </Link>
        </h2>
      </div>
    ))}
  </div>
  );
}

export default CategoryList;