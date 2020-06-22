import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkUserIsAdmin } from "../Utils/index";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const useAdminAuth = (props) => {
  const { currentUser } = useSelector(mapState);

  useEffect(() => {
      if (!checkUserIsAdmin(currentUser))
  }, [input]);
};
