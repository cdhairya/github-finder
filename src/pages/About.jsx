function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="text-2xl mb-4 font-light">
        A React app to search GitHub profiles and see profile details. This
        project uses the GitHub REST API.
        <strong className="block">Dhairya Chheda</strong>
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout made with:{" "}
        <span className="text-white">TailwindCSS & DaisyUI</span>
      </p>
    </div>
  );
}

export default About;
