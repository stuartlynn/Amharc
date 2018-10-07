import IPFS from 'ipfs';
import OrbitDB from 'orbit-db';
import ipfsConfig from './config/ipfsConfig.js';
import orbitDBConfig from './config/orbitConfig.js';

import Projects from './Projects';

export default class Backend {
  constructor() {
    this.callbacks = {
      connected: [],
      sync: [],
      connectFail: [],
    };
    this.connected = false;
  }

  on(event, cb) {
    console.log('this is ', this);
    this.callbacks[event].push(cb);
  }

  uploadImage(image){
    return new Promise( (resolve,reject) => {
      this.ipfs.files.add(image,(err,result)=>{
        if(err){
          alert('issues with upload')
          reject('issue with upload')
        }
        console.log('result hash ', result[0].hash)
        resolve(result[0].hash)
      })
    })
  }

  didConnect() {
    this.connected = true;
    this.callbacks.connected.forEach(cb => {
      cb();
    });
  }

  collectionSynced(collectionName, collection) {
    this.callbacks.sync.forEach(cb => {
      cb(collectionName, collection);
    });
  }

  connect() {
    console.log('attempting to connect')
    return new Promise( (resolve, reject)=>{
      this.ipfs = new IPFS(ipfsConfig);
      this.ipfs.on('error', e => reject(e));
      this.ipfs.on('ready', () => {
        console.log('ipfs connected succestully')

        const orbitdb = new OrbitDB(this.ipfs);

        const projects = new Projects(orbitdb);
        projects.on('sync', collection => {
          this.collectionSynced('Projects', collection);
        });

        this.connection = {
          Projects: projects,
        };

        Promise.all(
          Object.values(this.connection).map(model => model.connect()),
        ).then(() => {
          console.log('All models connected')
          this.didConnect();
          resolve()
        });
      });
    });
  }
}

