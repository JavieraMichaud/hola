"use client";
import React, { useState } from 'react';
import { EyeFilledIcon } from "../../components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../components/EyeSlashFilledIcon";
import { Input, Button, Link, Spinner } from "@nextui-org/react";
import { useRut } from "react-rut-formatter";
import { useRouter } from 'next/navigation'; // Importa el router de Next.js
import styles from '../../styles/styleop.module.css'
import { motion } from "framer-motion"
export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { rut, updateRut, isValid } = useRut();
  const [password, setPassword] = useState('');
  const router = useRouter(); // Inicializa el router de Next.js

  const backendUrl = 'http://localhost:3200';//cambiar al .env en un futuro
  const handleLogin = async () => {
    if (!isValid) {
      return; // Evitar iniciar sesión si el RUT no es válido
    }

    // Configurar los datos para la solicitud a la API
    const userData = {
      rut: rut.raw, // rut.raw=(20111111-5);rut.formatted=(20.111.111-5)
      password: password,
    };
    //router.push('/solicitud');
    // Realiza la solicitud a la API
    try {
      setIsLoading(true);

      const response = await fetch(`${backendUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Redirige al usuario a la página deseada después del inicio de sesión exitoso
        router.push('/solicitud');
      } else {
        // Maneja el caso de credenciales incorrectas
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      // Maneja errores de red o de servidor
      console.error('Error al iniciar sesión:', error);
      alert("Se produjo un error al intentar iniciar sesión. Por favor, inténtalo más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 20
      }} 
      className={styles.base} style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 480,
        height: 480,
        borderRadius: 30,
    }}>
      <div className={styles.inputs}>
        <Input
          className={styles.input}
          size='lg'
          value={rut.formatted}
          type="rut"
          label="Rut"
          variant="faded"
          labelPlacement='outside'
          errorMessage={!isValid && rut.formatted && "Please enter a valid Rut"}
          onValueChange={(newValue) => updateRut(newValue)}
          color={(!isValid && rut.formatted) ? "danger" : "default"}
        />
        <Input
          className={styles.input}
          size='lg'
          label="Password"
          variant="faded"
          labelPlacement='outside'
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>}
        />
        <div className="mt-8">
          {loginError && (
            <div className="text-danger">{loginError}</div>
          )}
          {isLoading ? (
            <Spinner size="lg" />
          ) : (
            <Button color="primary" onClick={handleLogin} disabled={isLoading}>
              {isLoading ? 'Ingresando...' : 'Ingresar'}
            </Button>
          )}
        </div>
      </div>
      
    </motion.div>
  );
}
