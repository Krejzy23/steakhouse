import ReservationForm from "../components/ReservationsForm"

const Reservations = () => {
  return (
    <main className="background-image min-h-screen pt-24 px-6 pb-20">
      <div className="mx-auto max-w-2xl">
        <div className="bg-gray-50 p-5 border-3 border-yellow-900/10 mb-10 text-center">
          <h1 className="font-serif text-4xl uppercase tracking-widest">
            Rezervace
          </h1>
          <p className="text-black/60 mt-4">
            Vyplňte formulář a my vám rezervaci obratem potvrdíme.
          </p>
        </div>

        <ReservationForm />
      </div>
    </main>
  );
};

export default Reservations;
