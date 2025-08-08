import { useForm } from 'react-hook-form';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import { createAdmin } from '../api/admin.api';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    // reset,
  } = useForm();

  const password = watch('password', '');
  const repetirPassword = watch('repetirPassword', '');

  const onSubmit = async (data) => {
    let res = await createAdmin(data);
    // reset();
    console.log(res);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Registrarse
        </h2>

        {/* Nombre */}
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="fullName"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('nombre', {
              required: { value: true, message: 'Nombre es requerido' },
              minLength: { value: 3, message: 'Nombre demasiado corto' },
            })}
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('email', {
              required: { value: true, message: 'Email es requerido' },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Correo no válido',
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('password', {
              required: { value: true, message: 'Password es requerido' },
              minLength: { value: 8, message: 'Password demasiado corto' },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Repetir Password */}
        <div className="mb-6">
          <label
            htmlFor="repetirPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Repetir Password
          </label>
          <input
            type="password"
            id="repetirPassword"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('repetirPassword', {
              required: { value: true, message: 'Password requerido' },
              validate: (value) =>
                password === value || 'El password no coincide',
            })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Enviar
        </button>
      </form>

      {/* Indicador de seguridad */}
      <PasswordStrengthIndicator
        password={password}
        repetirPassword={repetirPassword}
      />
    </>
  );
};

export default RegisterForm;
