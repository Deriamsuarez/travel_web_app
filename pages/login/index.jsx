import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@nextui-org/react';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from '@/connection';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/customer.slice';


const schema = object().shape({
    username: string().required('Username is required'),
    password: string().required('Password is required'),
  });
const Index = () => {
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch()

  const login = useLogin()

  const onSubmit = (data) => {
    login.mutate({...data},
        {
            onSuccess: (data) => {
                dispatch(authSlice.actions.setUser(data));
                toast.success("Se ha logueado satisfactoriamente");
              },
              onError: (error) => {
                toast.error(error.message);
              },        })
    console.log(data);
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="bg-white p-8 flex flex-col gap-2 rounded-lg shadow-lg">
        <h3 className="text-center font-bold text-blue-700 text-xl">Login</h3>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
          <Input
            variant="bordered"
            label="User"
            placeholder="Ingrese su usuario"
            type="text"
            {...register('username')}
            isInvalid={Boolean(errors.username )} 
            errorMessage={errors.username?.message }          />
          <Input
            variant="bordered"
            label="Contraseña"
            placeholder="Ingrese su contraseña"
            type="password"
            {...register('password')}
            isInvalid={Boolean(errors.password )} 
            errorMessage={errors.password?.message }
          />
          <Button type="submit" color="primary">
            Ingresar
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Index;
