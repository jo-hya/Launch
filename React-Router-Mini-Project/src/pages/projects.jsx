export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive single-page application built with React and Vite.',
      link: '#',
    },
    {
      title: 'To-Do App',
      description: 'A task management app built using React Hooks.',
      link: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Displays real-time weather using OpenWeather API.',
      link: '#',
    },
  ];

  return (
    <section style={{ padding: '2rem' }}>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, idx) => (
          <li key={idx} style={{ marginBottom: '1rem' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
