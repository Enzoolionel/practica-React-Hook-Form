import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm.jsx";

const App = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 drop-shadow-md">
        Un turnito
      </h1>
      {isRegister ? <RegisterForm /> : <LoginForm />}
      <p className="text-center text-slate-700 text-sm mt-4">
        {isRegister ? "¿Ya tenés cuenta?" : "¿No tenés cuenta?"}{" "}
        <button
          type="button"
          onClick={() => setIsRegister(!isRegister)}
          className="text-blue-600 hover:underline font-medium"
        >
          {isRegister ? "Ingresar" : "Registrarse"}
        </button>
      </p>
    </div>
  );
};

export default App;
