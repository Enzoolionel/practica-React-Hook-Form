import RegisterForm from "./components/RegisterForm";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 drop-shadow-md">
        Un turnito
      </h1>
      <RegisterForm />
    </div>
  );
};

export default App;
