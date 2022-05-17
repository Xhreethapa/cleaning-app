import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Wrapper from "../components/Wrapper/Wrapper";

function dashboard() {
  const { data: session } = useSession();

  return (
    <Wrapper>
      <div>
        dashboard
        <p>
          {" "}
          {session ? (
            <div onClick={() => signOut()}>Sign Out</div>
          ) : (
            <div onClick={() => signIn()}>Bhaak Muji </div>
          )}
        </p>
      </div>
    </Wrapper>
  );
}

export default dashboard;
