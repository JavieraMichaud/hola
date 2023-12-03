"use client";
import React, { useState, } from 'react';
import { EyeFilledIcon } from "../../components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../components/EyeSlashFilledIcon";
import {Button,Input,Select, SelectItem,Textarea} from "@nextui-org/react";
import styles from '../../styles/styleop.module.css'
import Date from '../../components/datepicker'
import TodoList from '../../components/tareas';
import { motion } from "framer-motion"
export default function PricingPage() {
	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);
	const [value, setValue] = React.useState("");
	const validarRut = (value) => value.match(/^\d{7,}-[K0-9]$/i);
	const container = {
		hidden: { opacity: 0 },
		show: {
		  opacity: 1,
		  transition: {
			staggerChildren: 0.5
		  }
		}
	  }
	const validationState = React.useMemo(() => {
	  if (value === "") return undefined;
	  return validarRut(value) ? "valid" : "invalid";
	},[value]);
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className={styles.base}>
			Datos del Alumno
			<div className={styles.boxout2}>
				<div className={styles.box}>
					<Input type="name" placeholder="Nombre completo"/>
					<Input type="rut" placeholder="RUT"/>
					<Input type="email" placeholder="Email"/>
					<Input type="fono" placeholder="Telefono"/>
					<Input type="plan" placeholder="Plan de estudio"/>
					<Input type="ingreso" placeholder="Año de ingrego"/>
				</div>
			</div>
			Datos de Empresa
			<div className={styles.boxout2}>
				<div className={styles.box2}>
					<Input type="razon" placeholder="Razon social"/>
					<Input type="rut_empresa" placeholder="RUT"/>
					<Input type="rubro" placeholder="Rubro"/>
				</div>
				<div className={styles.textbox}>
					<Textarea isRequired label="Descripcion" labelPlacement="outside" placeholder="Enter your description" className="descripcion"/>
				</div>
			</div>
			Informacion de practica
			<div className={styles.boxout3}>
				<div>
					<Input type="area" placeholder="Departamento o area de desarrollo"/>
				</div>
				<div className={styles.datebox}>
					Fecha inicio
					<Date/>
					Fecha Termino
					<Date/>
					
				</div>
				Tareas o funciones asignadas al alumno
				<TodoList/>
			</div>
		</motion.div>
	);
}