import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from 'react';
import ItemList from '../itemList/itemList';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";
import { getAutos, getAutosPorCategoria } from '../../utils.js';

const ItemListContainer = ({ titulo }) => {
  const [arrayAutos, setArrayAutos] = useState([]);
  const [show, setShow] = useState(true);
  const { categoriaMarca } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setArrayAutos([]); 
      try {
        const data = categoriaMarca
          ? await getAutosPorCategoria(categoriaMarca)
          : await getAutos();
        setArrayAutos(data);
      } catch (error) {
        console.error("Error al obtener autos:", error);
      }
    };

    fetchData();
  }, [categoriaMarca]);

  if (arrayAutos.length === 0) {
    return <h2 className="tituloAlerta">Cargando Autos...</h2>;
  }

  return (
    <>
      {show && (
        <Alert variant="danger" className="mensaje">
          <strong>{titulo}</strong>
          <div className="alert-btn-container">
            <Button onClick={() => setShow(false)}>Cerrar</Button>
          </div>
        </Alert>
      )}
      <ItemList autos={arrayAutos} />
    </>
  );
};

export default ItemListContainer;
