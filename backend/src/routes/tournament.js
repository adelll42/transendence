import tournamentController from '../controllers/tournamentController.js';

export default async function tournamentRoutes(fastify) {
    fastify.post('/create', tournamentController.createTournament);
    fastify.post('/:id/start', tournamentController.startTournament);
    fastify.get('/:id/next-match', tournamentController.getNextMatch);
    fastify.patch('/:id/match/:mid/winner', tournamentController.submitMatchResult);
    fastify.get('/:id/bracket', tournamentController.getBracket);
}
