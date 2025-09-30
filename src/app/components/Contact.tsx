"use client";

import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiCheck } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Crear asunto basado en el servicio de interés
      const subject = formData.service 
        ? `Consulta sobre ${formData.service} - ${formData.name}`
        : `Nueva consulta - ${formData.name}`;

      // Enviar email usando EmailJS
      const result = await emailjs.send(
        'service_446kk79',
        'template_orviumstudio',
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'No especificada',
          service: formData.service || 'No especificado',
          message: formData.message,
          to_email: 'orviumstudio@gmail.com',
          subject: subject
        },
        'xPBe8D7sDIw9u-vw6'
      );
      
      console.log('Email enviado exitosamente:', result);
      
      // Mostrar notificación de éxito
      setNotification({
        type: 'success',
        message: '¡Gracias por tu mensaje! Te contactaremos pronto.'
      });
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });

      // Ocultar notificación después de 5 segundos
      setTimeout(() => {
        setNotification({ type: null, message: '' });
      }, 5000);
      
    } catch (error: unknown) {
      console.error('Error detallado al enviar email:', error);
      
      // Mostrar información más específica del error
      let errorMessage = 'Hubo un error al enviar tu mensaje. ';
      
      if (error && typeof error === 'object' && 'status' in error) {
        const errorStatus = (error as { status: number }).status;
        const errorText = (error as { text?: string }).text;
        
        console.error('Código de error:', errorStatus);
        console.error('Texto del error:', errorText);
        
        if (errorStatus === 400) {
          errorMessage += 'Error de validación. Verifica que todos los campos estén completos.';
        } else if (errorStatus === 401) {
          errorMessage += 'Error de autenticación. Por favor, contáctanos directamente.';
        } else if (errorStatus === 403) {
          errorMessage += 'Error de permisos. Por favor, contáctanos directamente.';
        } else {
          errorMessage += `Error ${errorStatus || 'desconocido'}: ${errorText || 'Error desconocido'}`;
        }
      } else {
        errorMessage += 'Error desconocido. Por favor, inténtalo de nuevo.';
      }
      
      // Mostrar notificación de error
      setNotification({
        type: 'error',
        message: errorMessage
      });

      // Ocultar notificación después de 7 segundos
      setTimeout(() => {
        setNotification({ type: null, message: '' });
      }, 7000);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-3">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-3">
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="web-development">Desarrollo Web</option>
                  <option value="mobile-app">Aplicación Móvil</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="web-app">Aplicación Web</option>
                  <option value="ui-ux">Diseño UI/UX</option>
                  <option value="maintenance">Mantenimiento</option>
                  <option value="consulting">Consultoría</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 px-6 text-lg font-medium hover:bg-emerald-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>

            {/* Notificación */}
            {notification.type && (
              <div className={`mt-4 p-4 rounded-lg border-l-4 ${
                notification.type === 'success' 
                  ? 'bg-green-50 border-green-400 text-green-800' 
                  : 'bg-red-50 border-red-400 text-red-800'
              }`}>
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                    notification.type === 'success' ? 'bg-green-400' : 'bg-red-400'
                  }`}>
                    <FiCheck className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-sm font-medium">{notification.message}</p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-8">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    <FiMail className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600 font-light">info@orviumstudio.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    <FiPhone className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Teléfono</p>
                    <p className="text-gray-600 font-light">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    <FiMapPin className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Ubicación</p>
                    <p className="text-gray-600 font-light">Ciudad, País</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8">
              <h4 className="text-lg font-medium text-gray-900 mb-6">
                ¿Por qué trabajar con nosotros?
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FiCheck className="h-5 w-5 text-indigo-500 mt-0.5" />
                  <span className="text-gray-600 font-light">Respuesta en menos de 24 horas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FiCheck className="h-5 w-5 text-indigo-500 mt-0.5" />
                  <span className="text-gray-600 font-light">Cotización gratuita y sin compromiso</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FiCheck className="h-5 w-5 text-indigo-500 mt-0.5" />
                  <span className="text-gray-600 font-light">Garantía de satisfacción del 100%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FiCheck className="h-5 w-5 text-indigo-500 mt-0.5" />
                  <span className="text-gray-600 font-light">Soporte post-lanzamiento incluido</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
