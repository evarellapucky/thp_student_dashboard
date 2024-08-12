import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CollapseBar from '../CollapseBar';

function CategoryDetails() {
  const { categoryName } = useParams(); // Récupérer le nom de la catégorie depuis l'URL
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
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Trouver la catégorie correspondante
  const category = faqData.categories.find(cat => encodeURIComponent(cat.name) === categoryName);

  if (!category) {
    return <div>Category not found.</div>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      {category.questions.length > 0 ? (
        category.questions.map((q, qIndex) => (
          <CollapseBar
            key={qIndex}
            title={q.question}
            content={<div>{q.answer}</div>}
            borderColor="border-blue-500"
          />
        ))
      ) : (
        <div>No questions available for this category.</div>
      )}
    </div>
  );
}

export default CategoryDetails;