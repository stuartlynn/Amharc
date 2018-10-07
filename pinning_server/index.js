import IPFS from 'ipfs';
import OrbitDB from 'orbit-db';

console.log('Orbit db version ', OrbitDB.__version__)
console.log('IPFS version ', IPFS.__version__)

const ipfsOptions = {
  repo: 'data/datacollectionapp',
  start: true,
  EXPERIMENTAL: {
    pubsub: true,
  },
  config: {
    Addresses: {
      Swarm: [
        '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star',
      ],
    },
  },
};

const ipfs = new IPFS(ipfsOptions);

ipfs.on('error', e => console.error(e));
ipfs.on('ready', async () => {
  const orbitdb = new OrbitDB(ipfs);

  const projects_db = await orbitdb.open('poball.projects', {
    create: true,
    overwrite: false,
    localOnly: false,
    type: 'docstore',
    indexBy: 'id',
    write: ['*'],
  });

  const observation_template_db = await orbitdb.open(
    'poball.observation_templates',
    {
      create: true,
      overwrite: false,
      localOnly: false,
      replicate: true,
      type: 'docstore',
      indexBy: 'id',
      write: ['*'],
    },
  );

  projects_db.events.on('replicated', address => {
    console.log('projects replicated ', projects_db.query(a => true));
  });

  observation_template_db.events.on('replicated', address => {
    console.log(
      'observation templates replicated ',
      observation_template_db.query(a => true),
    );
  });

  try {
    await projects_db.load();
    await observation_template_db.load();
    console.log('projects database: ', projects_db.id);
    console.log('observation templates database: ', observation_template_db.id);
  } catch (err) {
    console.log('error ', err);
  }
});
