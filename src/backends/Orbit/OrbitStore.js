import IPFS from 'ipfs';
import OrbitDB from 'orbit-db';

export default class OrbitStore {
  constructor(
    orbitOptions = orbitOptions,
    type = 'docstore',
  ) {
    this.targetDB = targetDB;
    this.ipfsOptions = ipfsOptions;
    this.orbitOptions = orbitOptions;
  }

  updateLocalState() {
    const result = this.db.iterator({limit: -1}).collect();
    console.log({data: result.map(entry => entry.payload.value)});
  }

  handleError(e) {
    console.log(e);
  }

  addObject(object) {
    return this.db.add(data).then(hash => {
      console.log('Saved ', object, ' to database with ', hash);
    });
  }

  connnectToDatabase() {
    const fullOptions = {
      ...this.orbitOptions,
      type: 'docstore',
    };
    this.orbitdb = new OrbitDB(this.ipfs);
    this.orbitdb.open(this.targetDB, this.orbitOptions).then(() => {
      this.db.load().then(this.updateLocalState());
      this.db.events.on('replicated', address => {
        console.log(`${address} replicated the db`);
        this.updateLocalState();
      });
      this.db.on('write', address => {
        console.log(`${address} wrote to the db`);
        this.updateLocalState();
      });
      this.updateLocalState();
    });
  }

  connect() {
    this.ipfs = new IPFS(this.ipfsOptions);
    this.ipfs.on('error', this.handleError);
    this.ipfs.on('ready', () => {
      console.log('Connected to IPFS');
      this.connectToDatabase();
    });
  }
}
