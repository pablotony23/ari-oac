// middleware.js
export default function middleware(context) {
    // Verifica si el contexto tiene la respuesta (res)
    if (context.res) {
      // Si es así, establece el encabezado X-Content-Type-Options
      context.res.setHeader('X-Content-Type-Options', 'nosniff');
    }
  
    // Continúa con el siguiente middleware o con la operación deseada
    return context;
}