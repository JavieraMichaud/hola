"use client";
import React, { useState, } from 'react';
import { EyeFilledIcon } from "../../components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../components/EyeSlashFilledIcon";
import { Button} from "@nextui-org/button";
import {Input,Select, SelectItem,Textarea} from "@nextui-org/react";
import styles from '../../styles/styleop.module.css'
import { motion } from "framer-motion"

export default function SoliPage() {
	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);
	const [value, setValue] = React.useState("");
	return (
		<motion.div animate={{
			backgroundColor: "#000",
		  }}
			className={styles.base}>
			Datos de alumno
			<div className={styles.boxout}>
				<Input type="name" placeholder="Nombre completo"/>
				<Input type="rut" placeholder="RUT"/>
				<Input type="email" placeholder="Email"/>
				<Input type="fono" placeholder="Telefono"/>
				<Input type="plan" placeholder="Plan de estudio"/>
				<Input type="ingreso" placeholder="Año de ingrego"/>
			</div>
			<div className={styles.select}>
			<Select 
				isRequired
				label="Asignatura"
				placeholder="Selecciona asignaturas"
				defaultSelectedKeys={["cat"]}
				className="asignaturas"
				>
				</Select>
			<Select
				isRequired
				label="Empresa"
				placeholder="Selecciona empresa"
				defaultSelectedKeys={["cat"]}
				className="empresas"
				>
				</Select>
			</div>
			
			Datos de Empresa
			<div className={styles.boxout2}>
				<div className={styles.box}>
					<Input type="razon" placeholder="Razon social"/>
					<Input type="rut_empresa" placeholder="RUT"/>
					<Input type="rubro" placeholder="Rubro"/>
				</div>
				<div className={styles.textbox}>
					<Textarea isRequired label="Descripcion" labelPlacement="outside" placeholder="Enter your description" className="descripcion"/>
				</div>
			</div>
		</motion.div>
	);
	
}