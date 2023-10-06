import { FaRegTrashCan } from "react-icons/fa6";
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import ExpandablePnael  from "./ExpandablePanel";
import AlbumsList from './AlbumsList';

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = <>
    <Button className="mr-3" loading={isLoading} onClick={handleClick}>
            <FaRegTrashCan />
          </Button>
          {error && <div>Error deleting user.</div>}
          {user.name}
  </>;

  return (  
  <ExpandablePnael header={header}>
    <AlbumsList user={user} />
  </ExpandablePnael>   
  );
}

export default UsersListItem;
