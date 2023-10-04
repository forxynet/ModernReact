import Button from "../components/Button";
import { GoBell, GoCloudOffline, GoDatabase, GoFileBinary } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () =>{
    console.log('Clicked');    
  }
  return (
    <div>
      <div>
        <Button secondary outline rounded className="mb-5" onClick={handleClick}>
        <GoBell />
          Save          
          </Button>
      </div>
      <div>
        <Button primary >
          <GoCloudOffline />
          Cancel</Button>
      </div>
      <div>
        <Button danger >
          <GoDatabase />
          Delete</Button>
      </div>
      <div>
        <Button primary rounded>
          <GoFileBinary />
          Something!</Button>
      </div>     
    </div>
  );
}

export default ButtonPage;
