import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export const useVerify = () => {
  const [userData, setUserData] = useState<any>(false);
  let router = useRouter();
  
  const verify = async () => {
    let isVerified = await axios.get(
      "/api/authorization/verify"
    );
    if (isVerified.data.verified !== true) {
      router.push("../");
    }
    let res = isVerified.data;
    setUserData(res);
  };

  useEffect(() => {
    verify();
  }, []);

  return userData;
};
