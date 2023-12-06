import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/carsSlice";

function CarList() {
  const cars = useSelector((state) => state.cars.data);
  const dispatch = useDispatch();

  const handleRemoveCar = (car) => {
    dispatch(removeCar(car));
  };

  const renderedCars = cars.map((car) => (
    <div key={car.id} className="panel">
      <p>
        {car.name} - ${car.value}
      </p>
      <button className="button" onClick={() => handleRemoveCar(car)}>
        Sil
      </button>
    </div>
  ));

  return (
    <div className="car-list">
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className="no-cars">Başlamak için araba ekleyin</div>
      )}
    </div>
  );
}

export default CarList;
