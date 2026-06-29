📝 Bitácora de Mantenimiento y Cambios Recientes (La Bianca Tropical)
Fecha de actualización: 29 de Junio, 2026
Motivo: Pivot estratégico basado en feedback del cliente (Simplificación de flujos de pago y reservas).
🎯 Contexto del Pivot
El cliente solicitó eliminar la fricción en la terminal de pagos y cambiar el sistema de reservas. Se migró de Cal.com a un Bot de Telegram, y de Blink/Mercado Pago a BTCPay Server (self-hosted en Elestio). Se eliminó la pestaña Fiat para centralizar la experiencia crypto y reducir redundancia con sus terminales físicas.
🛠️ Desglose de Cambios (Changelog)
1. 🧭 Navegación y UX (Quick Wins)
Botón Flotante de WhatsApp (components/ui/whatsapp-float.tsx):
Añadido en la esquina inferior derecha.
Enlaza a wa.me/5219997503458.
Usa animación pulse-slow y tooltip en hover.
Botón "Paga Aquí" (components/ui/paga-aqui-float.tsx):
Aparece tras 300px de scroll para no saturar el Hero.
Ejecuta scrollIntoView({ behavior: 'smooth' }) hacia el id="pagos".
Integración en Layout: Ambos componentes inyectados en app/page.tsx justo antes del cierre del <main>.
2. ⚡ Terminal de Pagos (components/landing/LightningQR.tsx)
Amputación Fiat: Se eliminó por completo la pestaña de "Tarjeta / SPEI" (Mercado Pago) y su lógica de estado. El type TabId ahora solo acepta 'lightning' | 'onchain'.
Migración a BTCPay Server:
Se reemplazó el link de Blink POS por el POS nativo de BTCPay.
Se actualizó la dirección On-Chain a bc1qrqcmlp7sxjk5gvs7umpfudr4gn393xcmj4xtac.
Se actualizó la Lightning Address a la-bianca@btcpay-c092a-u74190.vm.elestio.app.
Unificación Visual (TropicalQR): Se eliminó el QRCodeSVG nativo de la pestaña Lightning para usar el componente TropicalQR en ambas pestañas (Lightning y On-Chain), manteniendo la consistencia del Design System (cambio de colores dinámico día/noche).
Marquesina de Lujo "15% OFF": Se añadió un badge con gradiente perla (#FFF8DC), glow animado y tipografía Playfair para incentivar pagos en Bitcoin.
3. 📅 Sistema de Reservas (components/landing/BookingSection.tsx)
RIP Cal.com: Se eliminó toda la dependencia de @calcom/embed-react, sus useEffect de inicialización, el MutationObserver de temas y el contenedor calContainerRef.
Integración Telegram Bot:
Se rediseñó la columna derecha (7 cols) como una "Tarjeta de Invitación Digital".
Se implementó un Mockup de Chat en vivo (UI estática con Framer Motion) para mostrar la UX del bot.
Se integró TropicalQR apuntando al link del bot.
Se añadió un CTA gigante con gradiente oficial de Telegram (#0088cc) y un botón secundario para copiar el @username.
⚙️ Configuración y Endpoints (La "Caja Negra")
Para evitar tener que buscar en el historial de Slack/WhatsApp, aquí están las credenciales y URLs críticas hardcodeadas en el frontend:
Servicio
Configuración / URL
Ubicación en Código
BTCPay POS Web
https://btcpay-c092a-u74190.vm.elestio.app/apps/4WjfKdWs7Ss37HKntGvRYF8TuH9c/pos
LightningQR.tsx (CONFIG)
Lightning Address
la-bianca@btcpay-c092a-u74190.vm.elestio.app
LightningQR.tsx (CONFIG)
Bitcoin On-Chain
bc1qrqcmlp7sxjk5gvs7umpfudr4gn393xcmj4xtac
LightningQR.tsx (CONFIG)
Telegram Bot
https://t.me/transaccioneslabianca_bot
BookingSection.tsx
WhatsApp Business
https://wa.me/5219997503458
whatsapp-float.tsx
📌 Notas para el Próximo Dev (o tu yo del futuro)
Dominio BTCPay Pendiente: La Lightning Address actual usa el dominio vm.elestio.app. El socio está en proceso de configurar el dominio personalizado (ej. pagos.labiancatropical.com) en Elestio. Cuando lo haga, actualizar el CONFIG.lightningAddress.
Plugin de Telegram en BTCPay: El cliente instaló un plugin de Telegram en el servidor BTCPay. Si en el futuro se quiere automatizar la confirmación de pagos directamente en el chat de reservas, se puede usar la API de BTCPay para conectar ambos flujos.
Design System Compliance: Todos los nuevos componentes respetan el DESIGN_SYSTEM.md. Se usan las variables de color #E07A5F (Terracota), #FFB347 (Amber Salsa), #2C2419 (Café) y #3D5A51 (Verde Tropical). El modo oscuro se detecta automáticamente por hora (18:00 - 06:00) o por preferencia del sistema.
Vercel Deployments: Los cambios son 100% client-side ('use client'), por lo que no requieren cambios en middleware.ts ni en las Edge Configs de Vercel. El build time debería mantenerse estable.
