import classes from "./index.module.css";
import Avatar from "../../components/avatar";
import { useRouter } from "next/router";
import { useEffect } from 'react';

const Developer = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/maintenance');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Avatar src="/yo-dev.JPG" alt="avatar" />
    </>
  );
};
export default Developer;
