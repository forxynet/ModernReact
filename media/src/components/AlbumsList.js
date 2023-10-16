import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAblbum = () => {
    addAlbum(user);
  };

  let content;
  if(isLoading){
    content = <Skeleton times={3} />;
  }else if(error){
    content = <div>Error loading albums.</div>
  } else {
    content = data.map(album => {
        const header = <div>{album.tite}</div>
        return <ExpandablePanel key={album.id} header={header}>
            List of fotos in the album
        </ExpandablePanel>
    });
  }

  return <div>
    <div>
        Albums for {user.name}
        <Button onClick={handleAddAblbum}>
            + Ad Album
        </Button>
    </div>
    <div>
        {content}
    </div>
  </div> 
}

export default AlbumsList;
