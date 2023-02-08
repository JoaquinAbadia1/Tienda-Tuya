import 'bootstrap/dist/css/bootstrap.min.css';
import { Link , useNavigate} from 'react-router-dom';
import {getProductById} from '../../bbdd'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from '../Card/Card.css'



function Cardd({id, name,img,price}) {
  return (
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={img} alt= {name} className='img'/>
      <Card.Body className='carta'>
        <Card.Title className='texto'>{name}</Card.Title>
        <Card.Text className='texto'>${price}</Card.Text>
        <Link to= {`/item/${id}`} className='boton'>Ver Detalle</Link>
      </Card.Body>
    </Card>
  );
}

export default Cardd;