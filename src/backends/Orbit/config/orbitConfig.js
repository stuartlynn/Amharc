export default {
  init:{
    create: false,
    overwrite: false,
    replicate: true,
    // Load only the local version of the database,
    // don't load the latest from the network yet
    localOnly: false,
    // If "Public" flag is set, allow anyone to write to the database,
    // otherwise only the creator of the database can write
    write: ['*'],
  },
  baseDB: '/orbitdb/QmRHAK8nFdjK1FGnV2r22DUCUaE5QshJPwoCiknKciSn18/datacollectionapp'
};
