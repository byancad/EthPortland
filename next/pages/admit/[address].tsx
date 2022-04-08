import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Admit = () => {
  const router = useRouter();
  const { address } = router.query;
  return <div>{address}</div>;
};

export default Admit;
