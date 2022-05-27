import axios from "../utility/axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      axios.get(`users/all/admin/${email}`).then(({ data }) => {
        setAdmin(data.admin);
        setAminLoading(false);
      });
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
