const ShopItems = () => {
  const data = [ 
    { Article: "Joker", Description: "récupére un joker grâce a tes points THP", Valeur: "2000pts" },
  ];
  const headers = ["Article", "Description", "Valeur"];
  const currentItems = data;

  return (
    <div className="overflow-x-auto">
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
            {currentItems.map((entry, index) => ( 
                <>
                <tr key={index}>
                    <td>{entry.Article}</td>
                    <td>{entry.Description}</td>
                    <td>{entry.Valeur}</td>
                </tr>
                <tr >
                    <td>T-shirt THP</td>
                    <td>Goodies</td>
                    <td>15000pts</td>
                </tr>
              </>
            ))}
            </tbody>
        </table>
    </div>
  );
}

export default ShopItems;