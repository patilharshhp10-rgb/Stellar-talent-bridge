import { useEffect, useState } from "react";

function Counter({ target, label, color }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="stat-card" style={{ background: color }}>
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats-section">
      <Counter target={500} label="Clients" color="#6a11cb" />
      <Counter target={1000} label="Placements" color="#2575fc" />
      <Counter target={95} label="Success Rate" color="#ff7a18" />
    </section>
  );
}