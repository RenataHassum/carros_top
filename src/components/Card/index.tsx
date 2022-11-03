import './styles.css';
import carImg from '../../assets/car.png';

export default function Card() {
  return (
      <div className="card-container ct-container">
        <div className="card-img">
          <img src={carImg} alt="Carro" />
        </div>
        <div className="card-text">
          <h2>Audi Supra TT</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        <button className="card-button">Comprar</button>
        </div>
      </div>
  );
}
