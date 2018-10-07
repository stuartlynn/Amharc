import Backend from './index';

const base = 'ORBIT';
export const CONNECTED = 'connected';
export const CONNECTING = 'connecting';
export const CONNECTION_FAILED = 'connection failed';
export const PENDING = 'pending';
export const NOT_CONNECTED = 'not connected';

export const ATTEMPT_CONNECTION = `${base}/ATTEMPT_CONNECTION`;
export const CONNECTION_MADE = `${base}/CONNECTION_MADE`;
export const CONNECTION_ATTEMPT_FAILED = `${base}/CONNECTION_ATTEMPT_FAILED`;

export const ATTEMPT_FETCH_RESOURCE = `${base}/ATTEMPT_FETCH_RESOURCE`;
export const RESOURCE_FETCH_SUCCESS = `${base}/RESOURCE_FETCH_SUCCESS`;
export const RESOURCE_FETCH_FAILED = `${base}/RESOURCE_FETCH_FAILED`;

export const UPLOAD_RESOURCE = `${base}/UPLOAD_RESOURCE`;
export const UPLOAD_RESOURCE_FALIED = `${base}/UPLOAD_RESOURCE_FAILED`;
export const UPLOAD_RESOURCE_SUCCESS = `${base}/UPLOAD_RESOURCE_SUCCESS`;

export const ATTEMPT_DELETE_RESOURCE = `${base}/ATTEMPT_DELETE_RESOURCE`;
export const RESOURCE_DELETED = `${base}/RESOURCE_DELETED`;

const be = new Backend()

const initalState = {
  IPFSStatus: NOT_CONNECTED,
  ORBITStatus: NOT_CONNECTED,
  connectionError: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case ATTEMPT_CONNECTION:
      return {
        ...state,
        IPFSStatus: PENDING,
        ORBITStatus: PENDING,
        connectionError: null,
      };
    case CONNECTION_MADE:
      return {
        ...state,
        IPFSStatus: CONNECTED,
        ORBITStatus: CONNECTED,
        connectionError: null,
      };
    case CONNECTION_ATTEMPT_FAILED:
      return {
        ...state,
        IPFSStatus: CONNECTION_FAILED,
        ORBITStatus: CONNECTION_FAILED,
        connectionError: action.error,
      };
    default:
      return state;
  }
};

export const connectBackend = params => {
  return dispatch => {
    dispatch({
      type: ATTEMPT_CONNECTION,
    });

    be.on('connected', be => {
      dispatch({
        type: CONNECTION_MADE,
      });
    });

    be.on('sync', (type, records) => {
      dispatch({
        type: `data/${type}/SYNC`,
        records: records,
      });
    });

    be.on('connectFail', () => {
      dispatch({
        type: CONNECTION_ATTEMPT_FAILED,
        error: 'failed to connnect',
      });
    });

  };
};

export const loadAllResource = type => {
  console.log('load all resource');
  return dispatch => {
    be.connect().then(()=>{
      be.connection['Projects'].getAll()
    })
  };
};

export const loadResource = (id, type) => {
  return dispatch => {
    dispatch({
      type: ATTEMPT_FETCH_RESOURCE,
    });
  };
};

export const deleteResource =(type, resource)=>{
  return dispatch => {

    dispatch({
      type: ATTEMPT_DELETE_RESOURCE,
      resource: resource
    })

    console.log('resource is ', resource)
    be.connection[type]
      .delete(resource.id ? resource.id : resource._id)
      .then(()=>{
        dispatch({
          type: RESOURCE_DELETED,
          resource: resource
        })
      })
  }
}

export const saveResource = (type, resource) => {
  return dispatch => {
    dispatch({
      type: UPLOAD_RESOURCE,
      resource,
    });
    console.log('backend on save ', be)
    console.log("type ",type)
    be.connection[type]
      .create(resource)
      .then(() => {
        dispatch({
          type: UPLOAD_RESOURCE_SUCCESS,
          resource,
        });
      })
      .catch(e => {
        dispatch({
          type: UPLOAD_RESOURCE_FALIED,
          resource,
        });
      });
  };
};
