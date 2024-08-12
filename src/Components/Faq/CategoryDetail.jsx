import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CollapseBar from '../CollapseBar';
import BackButton from '../BackButton';
import { fetchFaqData } from './FaqData';

function CategoryDetails() {
  const { categoryName } = useParams(); // Récupérer le nom de la catégorie depuis l'URL
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


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Décoder le nom de la catégorie pour correspondre aux données
  const decodedCategoryName = decodeURIComponent(categoryName);

  // Trouver la catégorie correspondant au nom décodé
  const category = faqData.categories.find(
    cat => cat.name === decodedCategoryName
  );

  if (!category) {
    return <div>Category not found.</div>;
  }

  return (
    <div>
      <div className='flex flex-row mb-4'>
      <BackButton />
      <h1 className='text-3xl font-bold mb-4'>{category.name}</h1>
      </div>
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