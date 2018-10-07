class Projects {
  constructor(orbitdb, onSync) {
    this.dbPath = `poball.projects`;
    this.state = 'connecting';
    this.orbitdb = orbitdb;
    this.callbacks={
      sync:[]
    }
    console.log('trying to open ');
  }

  connect(){
    return this.orbitdb
      .open('poball.projects', {
        create: true,
        overwrite: false,
        localOnly: false,
        replicate: true,
        type: 'docstore',
        indexBy:'id',
        write: ['*'],
      })
      .then(this.databaseLoaded.bind(this))
      .catch(e => {
        console.log(e);
      });
  }

  on(event,cb){
    this.callbacks[event].push(cb)
  }

  onSync(){
    this.callbacks.sync.forEach( (cb)=>{
      cb(this.getAll())
    })
  }

  databaseLoaded(db) {

    this.db = db;
    return this.db.load().then(()=>{
      this.state= 'connected';
      console.log('db id', this.db.id)

      this.db.events.on('replicated', (address)=>{
        console.log('replicated by ', address)
        console.log('now have data', this.getAll())
        this.onSync()
      })

      this.db.events.on('write',()=>{
        console.log('project db write ', this.getAll())
        this.onSync()
      })

      this.db.events.on('load',()=>{
        console.log('project db loaded ', this.getAll())
        this.onSync()
      })

       this.onSync()
      //      console.log(this.getAll())
    }).catch((err)=>{
      console.log('error loading db')
    })


  }

  getOne(id) {
    return this.db.get('id').map(e => e.payload.value);
  }

  getAll() {
    return this.db.query(() => true);
  }

  create(project) {
    return this.db.put(project);
  }

  update(id, project) {}

  delete(id) {
    return this.db.del(id)
  }
}

export default Projects;
