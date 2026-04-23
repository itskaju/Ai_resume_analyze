function Reviews() {
  const reviews = [
    {
      name: "Rahul",
      text: "This tool improved my resume score instantly!",
    },
    {
      name: "Kajal",
      text: "Best ATS checker I have used 🔥",
    },
    {
      name: "Amit",
      text: "Got interview calls after using this!",
    },
  ];

  return (
    <div className="container py-5 text-center">
      <h1 className="fw-bold mb-4">Customer Reviews ⭐</h1>

      <div className="row">
        {reviews.map((r, i) => (
          <div className="col-md-4" key={i}>
            <div className="card p-4 shadow mb-4">
              <h6>{r.name}</h6>
              <p className="text-muted">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
