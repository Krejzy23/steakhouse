import { useState, useEffect, useMemo } from "react";

const ReservationForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
    note: "",
  });

  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const today = new Date().toISOString().split("T")[0];

  // Načíst všechny rezervace ze JSON serveru
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await fetch("http://localhost:3001/reservations");
        const data = await res.json();
        setReservations(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchReservations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((f) => ({
      ...f,
      [name]: value,
      ...(name === "date" && { time: "" }), // reset času
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Ochrana proti minulému času
    const selectedDateTime = new Date(`${form.date}T${form.time}`);
    if (selectedDateTime <= new Date()) {
      setStatus("past");
      setLoading(false);
      return;
    }

    // Kontrola obsazenosti
    const taken = reservations.some(
      (r) => r.date === form.date && r.time === form.time
    );
    if (taken) {
      setStatus("taken");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, createdAt: new Date().toISOString() }),
      });

      if (!res.ok) throw new Error();

      const newReservation = await res.json();

      setReservations((prev) => [...prev, newReservation]);
      setStatus("success");

      setForm({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        guests: 2,
        note: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Generuji možné časy po hodine v zavislosti na oteviracce
  const timeSlots = useMemo(() => {
    const slots = [];
    for (let h = 11; h <= 21; h++) {
      slots.push(`${h.toString().padStart(2, "0")}:00`);
    }
    return slots;
  }, []);

  //resi aktualni cas a datum pro rezarvace

  const now = new Date();
  const isToday = form.date === today;

  const availableSlots = timeSlots.map((time) => {
    const [h, m] = time.split(":").map(Number);

    const slotDate = new Date();

    slotDate.setHours(h, m, 0, 0);

    const isPast = isToday && slotDate <= now;

    const taken = reservations.some(
      (r) => r.date === form.date && r.time === time
    );

    return {
      time,
      disabled: isPast || taken,
    };
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 border-2 border-yellow-900/10 bg-gray-50 p-8 shadow"
    >
      <h2 className="text-2xl font-[circular-web] uppercase">
        Rezervace stolu
      </h2>

      <div className="flex flex-col md:flex-row gap-2">
        <input
          name="name"
          placeholder="Jméno"
          value={form.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          name="phone"
          placeholder="Telefon"
          value={form.phone}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <h4 className="font-[robert] text-black/60">Datum</h4>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            min={today}
            required
            className="form-input"
          />
        </div>

        <div>
          <h4 className="font-[robert] text-black/60">Čas</h4>
          <select
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">Vyberte čas</option>
            {availableSlots.map(({ time, disabled }) => (
              <option key={time} value={time} disabled={disabled}>
                {time} {disabled ? "(nedostupné)" : ""}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h4 className="font-[robert] text-black/60">Počet hostů</h4>
          <input
            name="guests"
            type="number"
            min="1"
            max="12"
            value={form.guests}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>

      <textarea
        name="note"
        placeholder="Poznámka k rezervaci"
        value={form.note}
        onChange={handleChange}
        className="form-input h-32"
      />

      <button
        type="submit"
        disabled={loading || !form.time}
        className="bg-yellow-900/20 text-black px-6 py-3 uppercase tracking-widest hover:text-gray-50 hover:bg-black"
      >
        {loading ? "Odesílám..." : "Rezervovat"}
      </button>

      {status === "success" && (
        <p className="text-green-600">Rezervace odeslána!</p>
      )}
      {status === "error" && <p className="text-red-600">Něco se pokazilo.</p>}
      {status === "taken" && (
        <p className="text-red-600">Tento čas je již obsazený.</p>
      )}
      {status === "past" && (
        <p className="text-red-600">Nelze rezervovat zpětně.</p>
      )}
    </form>
  );
};

export default ReservationForm;
