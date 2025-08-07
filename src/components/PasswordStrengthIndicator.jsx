const PasswordStrengthIndicator = ({ password, repetirPassword }) => {
  const strength = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const passwordsMatch =
    password && repetirPassword && password === repetirPassword;

  return (
    <div className="mt-6 w-full max-w-md bg-white p-6 rounded-2xl shadow-md text-sm space-y-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Seguridad de la contraseña
      </h3>

      <p className={strength.length ? "text-green-600" : "text-red-500"}>
        {strength.length ? "✔" : "✖"} Al menos 8 caracteres
      </p>
      <p className={strength.uppercase ? "text-green-600" : "text-red-500"}>
        {strength.uppercase ? "✔" : "✖"} Al menos una mayúscula
      </p>
      <p className={strength.lowercase ? "text-green-600" : "text-red-500"}>
        {strength.lowercase ? "✔" : "✖"} Al menos una minúscula
      </p>
      <p className={strength.number ? "text-green-600" : "text-red-500"}>
        {strength.number ? "✔" : "✖"} Al menos un número
      </p>
      <p className={strength.special ? "text-green-600" : "text-red-500"}>
        {strength.special ? "✔" : "✖"} Un carácter especial (!@#...)
      </p>
      <p className={passwordsMatch ? "text-green-600" : "text-red-500"}>
        {passwordsMatch
          ? "✔ Las contraseñas coinciden"
          : "✖ Las contraseñas no coinciden"}
      </p>
    </div>
  );
};

export default PasswordStrengthIndicator;
