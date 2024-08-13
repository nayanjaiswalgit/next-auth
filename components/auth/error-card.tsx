import React from "react";
// import { Card, CardFooter, CardHeader } from "../ui/card";
// import { Header } from "./header";
// import { BackButton } from "./back-button";
import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    // <Card className="w-[400px] shadow-md">
    //   <CardHeader>
    //     <Header label="Oops! Something went wrong!" />
    //   </CardHeader>
    //   <CardFooter>
    //     <BackButton label="Back to login" href="auth/login" />
    //   </CardFooter>
    // </Card>

    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className=" w-full justify-center items-center">
        <ExclamationTriangleIcon />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
