import profile from '../assets/profile.JPG';

export default function Home() {
  return (
    <section style={{ padding: '2rem' }}>
      <h1>Welcome to my Portfolio!</h1>
      <p>I'm Joyce Yang, a student and software developer passionate about building creative, fun web applications.</p>
        <img
        src={profile}
        alt="Profile"
        style={{ width: '150px', height: '220px' }}
        />

        <p style={{ marginTop: '1rem' }}>
        Explore my <a href="/projects">projects</a>, learn <a href="/about">about me</a>, or <a href="/contact">get in touch</a>!
        </p>
    </section>
  );
}