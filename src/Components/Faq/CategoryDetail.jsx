import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CollapseBar from '../CollapseBar';
import BackButton from '../BackButton';


function CategoryDetails() {
  const { categoryName } = useParams();
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
            content={q.answer}
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