import React, { useEffect } from "react";
import { useUserQuery, useLoginQuery, useAuthTokenQuery } from "./api";

const Test = () => {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const code = queryParams.get("code");
  const code = "";
  const { refetch: sendAuthToken } = useAuthTokenQuery(code ?? "");
  useEffect(() => {
    if (code) {
      // sendAuthToken(code);
      console.log("aa");
      sendAuthToken();
    }
  }, [code]);

  console.log("Code:", code);


  return (
    <div>
      <button
        
      >
        login
      </button>
    </div>
  );
};

export default Test;
