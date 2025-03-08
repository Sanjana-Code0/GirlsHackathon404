import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Import Navbar

const ClientManagement = () => {
  const [clients, setClients] = useState(
    JSON.parse(localStorage.getItem("clients")) || []
  );
  const [clientName, setClientName] = useState("");
  const [project, setProject] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleAddClient = () => {
    if (clientName && project && deadline) {
      const newClients = [
        ...clients,
        { clientName, project, deadline, id: Date.now() },
      ];
      setClients(newClients);
      localStorage.setItem("clients", JSON.stringify(newClients));
      setClientName("");
      setProject("");
      setDeadline("");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div>
      <Navbar /> {/* Add Navbar here */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Client Management</h2>
        <div className="p-4 border rounded shadow">
          <div className="mb-3">
            <label className="form-label">Client Name</label>
            <input
              type="text"
              className="form-control"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Project Name</label>
            <input
              type="text"
              className="form-control"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Deadline</label>
            <input
              type="date"
              className="form-control"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100" onClick={handleAddClient}>
            Add Client
          </button>
        </div>

        <div className="mt-4">
          <h4>Client List</h4>
          {clients.length > 0 ? (
            <div className="row">
              {clients.map((client) => (
                <div key={client.id} className="col-md-4 mb-4">
                  <div className="card shadow-lg border-0 rounded-4">
                    <div className="card-body">
                      <h5 className="card-title">{client.clientName}</h5>
                      <p className="card-text"><strong>Project:</strong> {client.project}</p>
                      <p className="card-text"><strong>Deadline:</strong> {client.deadline}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No clients added yet.</p>
          )}
        </div>
      </div>

      <style jsx>{`
        .card {
          width: 100%;
          background-color: #ffffff;
          border-radius: 0.375rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .card-body {
          padding: 20px;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .card-text {
          font-size: 1rem;
          color: #555;
          margin-bottom: 8px;
        }

        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
          padding: 10px;
        }

        .btn-primary:hover {
          background-color: #0056b3;
          border-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default ClientManagement;
