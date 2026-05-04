"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FiMail, FiCheck } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setNotification({ type: null, message: '' });
    setIsSubmitting(true);

    try {
      const subject = `Nueva consulta - ${formData.name}`;

      const result = await emailjs.send(
        'service_446kk79',
        'template_orviumstudio',
        {
          from_name: formData.name,
          from_email: formData.email,
          company: 'No especificada',
          service: 'No especificado',
          message: formData.message,
          to_email: 'orviumstudio@gmail.com',
          subject: subject
        },
        'xPBe8D7sDIw9u-vw6'
      );

      console.log('Email enviado exitosamente:', result);

      setNotification({
        type: 'success',
        message: '¡Gracias por tu mensaje! Te contactaremos pronto.'
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setNotification({ type: null, message: '' });
      }, 5000);
    } catch (error: unknown) {
      console.error('Error detallado al enviar email:', error);

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

      setNotification({
        type: 'error',
        message: errorMessage
      });

      setTimeout(() => {
        setNotification({ type: null, message: '' });
      }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            Contanos sobre tu idea y te ayudamos a hacerla realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-[#fafafa] text-gray-900"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-[#fafafa] text-gray-900"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-[#fafafa] text-gray-900 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 px-6 text-sm uppercase tracking-widest font-medium transition-colors rounded-none flex items-center justify-center ${isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>
            </form>

            {/* Notificación */}
            {notification.type && (
              <div
                className={`mt-4 p-4 rounded-lg border-l-4 ${notification.type === 'success'
                    ? 'bg-gray-50 border-gray-400 text-gray-800'
                    : 'bg-red-50 border-red-400 text-red-800'
                  }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${notification.type === 'success' ? 'bg-gray-400' : 'bg-red-400'
                      }`}
                  >
                    <FiCheck className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-sm font-medium">{notification.message}</p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-8">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-[#fafafa] border border-gray-200 rounded-none flex items-center justify-center">
                    <FiMail className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email</p>
                    <p className="text-gray-900 font-light text-lg">orviumstudio@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-none p-10 border border-gray-200">
              <h4 className="text-xl font-light text-gray-900 mb-8">
                ¿Por qué trabajar con nosotros?
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheck className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-light text-sm">Respuesta en menos de 24 horas</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-light text-sm">Cotización gratuita y sin compromiso</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-light text-sm">Garantía de satisfacción del 100%</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-light text-sm">Soporte post-lanzamiento incluido</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
