import { useState, useEffect } from "react";
import axios from "axios";
import Profile from "./Profile";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/profiles");
        setProfiles(data);
        error && setError(undefined);
      } catch (err) {
        setError({
          status: err.response.status,
          errMsg: "Couldn't fetch life paths from db",
        });
      }
    };
    fetchProfiles();
  }, [error]);

  if (profiles.length < 1) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Failed to fetch life paths</div>;
  }

  return (
    <>
    
    <section className="  ">
      <h1 className="">Profiles</h1>
      <div className="">
        {profiles.map((profile, idx) => (
          <Profile key={idx} profile={profile} />
        ))}
      </div>
      </section>
    
    </>
  );
};

export default Profiles;
