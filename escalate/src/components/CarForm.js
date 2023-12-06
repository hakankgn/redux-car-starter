import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatedCars } from "../store/carsSlice";

function CarForm() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !value) {
      alert("Lütfen bir marka ve fiyat giriniz");
      return;
    }

    const car = { name, value, id: crypto.randomUUID() };
    dispatch(updatedCars(car));
    setName("");
    setValue("");
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle ">Araba Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Marka</label>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Fiyat</label>
          <input
            className="input"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-link">Gönder</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
