import BackButton from "../BackButton";

const Historique = () => {
  const data = [ 
    { Article: "Joker", Description: "récupère un joker grâce à tes points THP", Valeur: "2000pts" },
    { Article: "T-shirt THP", Description: "Goodies", Valeur: "15000pts" },
    { Article: "Mug THP", Description: "Goodies", Valeur: "34000000000pts" },
  ];
  const headers = ["Article", "Description", "Valeur"];

  return (
    <div className="overflow-x-auto">
      <h1>Historique</h1>
      <div className='flex justify-end items-center mb-4'>
        <BackButton />
      </div>
      <table className="tableitems">
        {/* head */}
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header.charAt(0).toUpperCase() + header.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.Article}</td>
              <td>{entry.Description}</td>
              <td>{entry.Valeur}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Historique;