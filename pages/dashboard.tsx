import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import DashboardPage from '../components/Elite/Dashboard/Dashboard';

const Dashboard = () => {
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
      <DashboardPage />
    </Wrapper>
  );
}

export default Dashboard;
