import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle,handleToCard}) => {
    const {name, img, price} = bottle
    return (
        <div className='bottle'>
            <h2>Bottle Name: {name}</h2>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={()=>handleToCard(bottle)}>Pueches</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleToCard: PropTypes.func.isRequired
}

export default Bottle;