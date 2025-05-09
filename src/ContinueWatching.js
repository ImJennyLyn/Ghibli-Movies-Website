export default function ContinueWatching() {
    const data = JSON.parse(localStorage.getItem('continueWatching')) || [];
  
    return (
      <div className="continue-row">
        {data.map((item, idx) => (
          <div key={idx} className="watch-card">
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    );
  }
  