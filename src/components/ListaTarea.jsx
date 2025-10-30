import ListGroup from 'react-bootstrap/ListGroup';
import ItemsTarea from './ItemsTarea';

const ListaTarea = ({tareasProps,borrarTarea}) => {
  return (
    <div>
      <ListGroup className='border border-danger'>
        {
          tareasProps.map((tareaMap)=><ItemsTarea key={tareaMap._id} desdeListaTarea={tareaMap} borrarTarea={borrarTarea}/>)
        }
      
      </ListGroup>
    </div>
  );
};

export default ListaTarea;
