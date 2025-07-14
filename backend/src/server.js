import Fastify from 'fastify';
import cors from '@fastify/cors'; // 👈

const fastify = Fastify({ logger: true });

fastify.register(cors, {
  origin: true,
  credentials: true
});

// other plugins and routes...
fastify.register(formbody);
fastify.register(websocket);
fastify.register(multipart);
fastify.register(jwtPlugin);
fastify.register(registerRoutes);

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err) => {
  if (err) throw err;
});
