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
  const [hoveredCategory, setHoveredCategory] = useState(null);


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
        <div
          key={index}
          className="mb-4"
          onMouseEnter={() => setHoveredCategory(category.name)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <Link 
            to={`/faq/${encodeURIComponent(category.name)}`}
            className="collapse collapse-arrow bg-base-200 mb-4 border border-blue-500"
          >
            <div className="collapse-title text-xl font-medium bg-gray-200 cursor-pointer">
              {category.name}
            </div>
          </Link>

          {/* Previsualisation de la catégorie */}
          <div
            className={`transition-all duration-300 ease-in-out ${hoveredCategory === category.name ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
          >
            <div className="bg-white border-t border-gray-300 p-4">
              <ul className="list-disc pl-5">
                {category.questions.map((q, qIndex) => (
                  <li key={qIndex} className="mb-1 text-gray-700">
                    <p>
                      {q.question}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div>No FAQ data available.</div>
    )}
  </div>
  );
}

export default CategoryList;