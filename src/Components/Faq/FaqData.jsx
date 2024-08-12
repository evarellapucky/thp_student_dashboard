import axios from 'axios';

export const fetchFaqData = async () => {
  try {
    const response = await axios.get("https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/faq.json");
    return response.data;
  } catch (err) {
    console.error('Error fetching the data', err);
    throw err;
  }
};