import React, { useState, useEffect } from "react";
import axios from "axios";
import "../entretien.css"
import { Link } from "react-router-dom";
const FormationList = () => {
  const [formations, setFormations] = useState([]);
  const [users, setUsers] = useState([]);
  const [offres, setOffres] = useState([]);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await axios.get("/api/formations");
        setFormations(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchOffres = async () => {
      try {
        const response = await axios.get("/api/offres");
        setOffres(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFormations();
    fetchUsers();
    fetchOffres();
  }, []);

  const getUserNames = (userIds) => {
    const names = userIds.map((userId) => {
      const user = users.find((user) => user._id === userId);
      return user ? `${user.Firstname} ${user.Lastname}` : "";
    });
    return names.join(", ");
  };
  const getOffreTitle = (offreId) => {
    const offre = offres.find((offre) => offre._id === offreId);
    return offre ? offre.name : "";
  };
  const handleDelete = async (formationId) => {
    try {
      await axios.delete(`/api/formations/${formationId}`);
      setFormations(formations.filter((e) => e._id !== formationId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="entretiens-list-container">
      <h2>Liste des Formations</h2>
      <table>
        <thead>
          <tr>
            <th>Candidats</th>
            <th>Formation</th>
            <th>Type</th>
            <th>Date</th>

          </tr>
        </thead>
        <tbody>
          {formations.map((formation) => (
            <tr key={formation._id}>
              <td>{getUserNames(formation.user)}</td>
              <td>{getOffreTitle(formation.offre)}</td>
              <td>{formation.type}</td>
              <td>{formation.date}</td>

              <td className="gap__actions">
              <Link to={`/formation/${formation._id}`} ><span className="badge bg-secondary badgecandidature" >
                  <i className="fas fa-edit"></i>
                </span>

                </Link>
                <span className="badge bg-danger badgecandidature" >
                <i className="fas fa-trash" onClick={() => handleDelete(formation._id)}></i>
              </span>
                
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default FormationList;