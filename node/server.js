const fastify = require('fastify')({
  logger: true
})

fastify.get('/', function (request, reply) {
  console.log(request.headers);
  reply.send('ok')
})

fastify.get('/auth', function (request, reply) {
  reply
    .header('auth', 'testvalue')
    .status(200)
    .send('')
})


fastify.listen(3000, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})