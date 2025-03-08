import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // Import Navbar

const SkillDevelopment = () => {
  const loadSkillsFromLocalStorage = () => {
    const storedSkills = localStorage.getItem("skills");
    return storedSkills ? JSON.parse(storedSkills) : [];
  };

  const [skills, setSkills] = useState(loadSkillsFromLocalStorage);
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("Beginner");
  const [skillProgress, setSkillProgress] = useState(0);

  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSkill = {
      id: Date.now(),
      name: skillName,
      level: skillLevel,
      progress: skillProgress,
    };

    setSkills([...skills, newSkill]);
    setSkillName("");
    setSkillLevel("Beginner");
    setSkillProgress(0);
  };

  return (
    <div>
      <Navbar /> {/* Add Navbar here */}
      <div className="container mt-5">
        <h2 className="text-center mb-4 fw-bold">Skill Development</h2>
        <p className="text-center lead">
          Explore courses, tutorials, and resources to enhance your skills.
        </p>

        {/* Skill Form */}
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body">
                <h5 className="card-title fw-bold">Add a New Skill</h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="skillName" className="form-label">
                      Skill Name
                    </label>
                    <input
                      type="text"
                      id="skillName"
                      className="form-control"
                      value={skillName}
                      onChange={(e) => setSkillName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="skillLevel" className="form-label">
                      Skill Level
                    </label>
                    <select
                      id="skillLevel"
                      className="form-select"
                      value={skillLevel}
                      onChange={(e) => setSkillLevel(e.target.value)}
                      required
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="skillProgress" className="form-label">
                      Progress (0-100)
                    </label>
                    <input
                      type="number"
                      id="skillProgress"
                      className="form-control"
                      value={skillProgress}
                      onChange={(e) => setSkillProgress(e.target.value)}
                      max="100"
                      min="0"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Add Skill
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Display Skills */}
        <div className="row">
          {skills.map((skill) => (
            <div key={skill.id} className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{skill.name}</h5>
                  <p className="card-text">Level: {skill.level}</p>
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                      role="progressbar"
                      style={{ width: `${skill.progress}%` }}
                      aria-valuenow={skill.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {skill.progress}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillDevelopment;
