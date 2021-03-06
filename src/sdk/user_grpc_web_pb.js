/**
 * @fileoverview gRPC-Web generated client stub for zbay
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.zbay = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zbay.UsersClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zbay.UsersPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.User,
 *   !proto.zbay.User>}
 */
const methodDescriptor_Users_Add = new grpc.web.MethodDescriptor(
  '/zbay.Users/Add',
  grpc.web.MethodType.UNARY,
  proto.zbay.User,
  proto.zbay.User,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.User,
 *   !proto.zbay.User>}
 */
const methodInfo_Users_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.User,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.User.deserializeBinary
);


/**
 * @param {!proto.zbay.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.UsersClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Users/Add',
      request,
      metadata || {},
      methodDescriptor_Users_Add,
      callback);
};


/**
 * @param {!proto.zbay.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.User>}
 *     A native promise that resolves to the response
 */
proto.zbay.UsersPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Users/Add',
      request,
      metadata || {},
      methodDescriptor_Users_Add);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.User,
 *   !proto.zbay.User>}
 */
const methodDescriptor_Users_Get = new grpc.web.MethodDescriptor(
  '/zbay.Users/Get',
  grpc.web.MethodType.UNARY,
  proto.zbay.User,
  proto.zbay.User,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.User,
 *   !proto.zbay.User>}
 */
const methodInfo_Users_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.User,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.User.deserializeBinary
);


/**
 * @param {!proto.zbay.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.UsersClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Users/Get',
      request,
      metadata || {},
      methodDescriptor_Users_Get,
      callback);
};


/**
 * @param {!proto.zbay.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.User>}
 *     A native promise that resolves to the response
 */
proto.zbay.UsersPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Users/Get',
      request,
      metadata || {},
      methodDescriptor_Users_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.User,
 *   !proto.zbay.User>}
 */
const methodDescriptor_Users_Update = new grpc.web.MethodDescriptor(
  '/zbay.Users/Update',
  grpc.web.MethodType.UNARY,
  proto.zbay.User,
  proto.zbay.User,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.User,
 *   !proto.zbay.User>}
 */
const methodInfo_Users_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.User,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.User.deserializeBinary
);


/**
 * @param {!proto.zbay.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.UsersClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Users/Update',
      request,
      metadata || {},
      methodDescriptor_Users_Update,
      callback);
};


/**
 * @param {!proto.zbay.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.User>}
 *     A native promise that resolves to the response
 */
proto.zbay.UsersPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Users/Update',
      request,
      metadata || {},
      methodDescriptor_Users_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.User,
 *   !proto.zbay.User>}
 */
const methodDescriptor_Users_List = new grpc.web.MethodDescriptor(
  '/zbay.Users/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zbay.User,
  proto.zbay.User,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.User,
 *   !proto.zbay.User>}
 */
const methodInfo_Users_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.User,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.User.deserializeBinary
);


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.User>}
 *     The XHR Node Readable Stream
 */
proto.zbay.UsersClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Users/List',
      request,
      metadata || {},
      methodDescriptor_Users_List);
};


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.User>}
 *     The XHR Node Readable Stream
 */
proto.zbay.UsersPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Users/List',
      request,
      metadata || {},
      methodDescriptor_Users_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.User,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Users_Delete = new grpc.web.MethodDescriptor(
  '/zbay.Users/Delete',
  grpc.web.MethodType.UNARY,
  proto.zbay.User,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.User,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Users_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.zbay.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.UsersClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Users/Delete',
      request,
      metadata || {},
      methodDescriptor_Users_Delete,
      callback);
};


/**
 * @param {!proto.zbay.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.zbay.UsersPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Users/Delete',
      request,
      metadata || {},
      methodDescriptor_Users_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.User,
 *   !proto.zbay.User>}
 */
const methodDescriptor_Users_Login = new grpc.web.MethodDescriptor(
  '/zbay.Users/Login',
  grpc.web.MethodType.UNARY,
  proto.zbay.User,
  proto.zbay.User,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.User,
 *   !proto.zbay.User>}
 */
const methodInfo_Users_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.User,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.User.deserializeBinary
);


/**
 * @param {!proto.zbay.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.UsersClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Users/Login',
      request,
      metadata || {},
      methodDescriptor_Users_Login,
      callback);
};


/**
 * @param {!proto.zbay.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.User>}
 *     A native promise that resolves to the response
 */
proto.zbay.UsersPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Users/Login',
      request,
      metadata || {},
      methodDescriptor_Users_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.User,
 *   !proto.zbay.User>}
 */
const methodDescriptor_Users_Certificate = new grpc.web.MethodDescriptor(
  '/zbay.Users/Certificate',
  grpc.web.MethodType.UNARY,
  proto.zbay.User,
  proto.zbay.User,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.User,
 *   !proto.zbay.User>}
 */
const methodInfo_Users_Certificate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.User,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.User.deserializeBinary
);


/**
 * @param {!proto.zbay.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.UsersClient.prototype.certificate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Users/Certificate',
      request,
      metadata || {},
      methodDescriptor_Users_Certificate,
      callback);
};


/**
 * @param {!proto.zbay.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.User>}
 *     A native promise that resolves to the response
 */
proto.zbay.UsersPromiseClient.prototype.certificate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Users/Certificate',
      request,
      metadata || {},
      methodDescriptor_Users_Certificate);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zbay.AddressesClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zbay.AddressesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Address,
 *   !proto.zbay.Address>}
 */
const methodDescriptor_Addresses_Add = new grpc.web.MethodDescriptor(
  '/zbay.Addresses/Add',
  grpc.web.MethodType.UNARY,
  proto.zbay.Address,
  proto.zbay.Address,
  /**
   * @param {!proto.zbay.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Address.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Address,
 *   !proto.zbay.Address>}
 */
const methodInfo_Addresses_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Address,
  /**
   * @param {!proto.zbay.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Address.deserializeBinary
);


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.AddressesClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Addresses/Add',
      request,
      metadata || {},
      methodDescriptor_Addresses_Add,
      callback);
};


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Address>}
 *     A native promise that resolves to the response
 */
proto.zbay.AddressesPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Addresses/Add',
      request,
      metadata || {},
      methodDescriptor_Addresses_Add);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Address,
 *   !proto.zbay.Address>}
 */
const methodDescriptor_Addresses_Get = new grpc.web.MethodDescriptor(
  '/zbay.Addresses/Get',
  grpc.web.MethodType.UNARY,
  proto.zbay.Address,
  proto.zbay.Address,
  /**
   * @param {!proto.zbay.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Address.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Address,
 *   !proto.zbay.Address>}
 */
const methodInfo_Addresses_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Address,
  /**
   * @param {!proto.zbay.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Address.deserializeBinary
);


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.AddressesClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Addresses/Get',
      request,
      metadata || {},
      methodDescriptor_Addresses_Get,
      callback);
};


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Address>}
 *     A native promise that resolves to the response
 */
proto.zbay.AddressesPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Addresses/Get',
      request,
      metadata || {},
      methodDescriptor_Addresses_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Address,
 *   !proto.zbay.Address>}
 */
const methodDescriptor_Addresses_Update = new grpc.web.MethodDescriptor(
  '/zbay.Addresses/Update',
  grpc.web.MethodType.UNARY,
  proto.zbay.Address,
  proto.zbay.Address,
  /**
   * @param {!proto.zbay.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Address.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Address,
 *   !proto.zbay.Address>}
 */
const methodInfo_Addresses_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Address,
  /**
   * @param {!proto.zbay.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Address.deserializeBinary
);


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.AddressesClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Addresses/Update',
      request,
      metadata || {},
      methodDescriptor_Addresses_Update,
      callback);
};


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Address>}
 *     A native promise that resolves to the response
 */
proto.zbay.AddressesPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Addresses/Update',
      request,
      metadata || {},
      methodDescriptor_Addresses_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Address,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Addresses_Delete = new grpc.web.MethodDescriptor(
  '/zbay.Addresses/Delete',
  grpc.web.MethodType.UNARY,
  proto.zbay.Address,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.zbay.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Address,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Addresses_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.zbay.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.AddressesClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Addresses/Delete',
      request,
      metadata || {},
      methodDescriptor_Addresses_Delete,
      callback);
};


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.zbay.AddressesPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Addresses/Delete',
      request,
      metadata || {},
      methodDescriptor_Addresses_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.User,
 *   !proto.zbay.Address>}
 */
const methodDescriptor_Addresses_List = new grpc.web.MethodDescriptor(
  '/zbay.Addresses/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zbay.User,
  proto.zbay.Address,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Address.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.User,
 *   !proto.zbay.Address>}
 */
const methodInfo_Addresses_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Address,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Address.deserializeBinary
);


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Address>}
 *     The XHR Node Readable Stream
 */
proto.zbay.AddressesClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Addresses/List',
      request,
      metadata || {},
      methodDescriptor_Addresses_List);
};


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Address>}
 *     The XHR Node Readable Stream
 */
proto.zbay.AddressesPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Addresses/List',
      request,
      metadata || {},
      methodDescriptor_Addresses_List);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zbay.MemosClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zbay.MemosPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Memo,
 *   !proto.zbay.Memo>}
 */
const methodDescriptor_Memos_Add = new grpc.web.MethodDescriptor(
  '/zbay.Memos/Add',
  grpc.web.MethodType.UNARY,
  proto.zbay.Memo,
  proto.zbay.Memo,
  /**
   * @param {!proto.zbay.Memo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Memo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Memo,
 *   !proto.zbay.Memo>}
 */
const methodInfo_Memos_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Memo,
  /**
   * @param {!proto.zbay.Memo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Memo.deserializeBinary
);


/**
 * @param {!proto.zbay.Memo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Memo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Memo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.MemosClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Memos/Add',
      request,
      metadata || {},
      methodDescriptor_Memos_Add,
      callback);
};


/**
 * @param {!proto.zbay.Memo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Memo>}
 *     A native promise that resolves to the response
 */
proto.zbay.MemosPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Memos/Add',
      request,
      metadata || {},
      methodDescriptor_Memos_Add);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Memo,
 *   !proto.zbay.Memo>}
 */
const methodDescriptor_Memos_Get = new grpc.web.MethodDescriptor(
  '/zbay.Memos/Get',
  grpc.web.MethodType.UNARY,
  proto.zbay.Memo,
  proto.zbay.Memo,
  /**
   * @param {!proto.zbay.Memo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Memo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Memo,
 *   !proto.zbay.Memo>}
 */
const methodInfo_Memos_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Memo,
  /**
   * @param {!proto.zbay.Memo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Memo.deserializeBinary
);


/**
 * @param {!proto.zbay.Memo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Memo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Memo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.MemosClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Memos/Get',
      request,
      metadata || {},
      methodDescriptor_Memos_Get,
      callback);
};


/**
 * @param {!proto.zbay.Memo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Memo>}
 *     A native promise that resolves to the response
 */
proto.zbay.MemosPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Memos/Get',
      request,
      metadata || {},
      methodDescriptor_Memos_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Memo,
 *   !proto.zbay.Memo>}
 */
const methodDescriptor_Memos_Update = new grpc.web.MethodDescriptor(
  '/zbay.Memos/Update',
  grpc.web.MethodType.UNARY,
  proto.zbay.Memo,
  proto.zbay.Memo,
  /**
   * @param {!proto.zbay.Memo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Memo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Memo,
 *   !proto.zbay.Memo>}
 */
const methodInfo_Memos_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Memo,
  /**
   * @param {!proto.zbay.Memo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Memo.deserializeBinary
);


/**
 * @param {!proto.zbay.Memo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Memo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Memo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.MemosClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Memos/Update',
      request,
      metadata || {},
      methodDescriptor_Memos_Update,
      callback);
};


/**
 * @param {!proto.zbay.Memo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Memo>}
 *     A native promise that resolves to the response
 */
proto.zbay.MemosPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Memos/Update',
      request,
      metadata || {},
      methodDescriptor_Memos_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Memo,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Memos_Delete = new grpc.web.MethodDescriptor(
  '/zbay.Memos/Delete',
  grpc.web.MethodType.UNARY,
  proto.zbay.Memo,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.zbay.Memo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Memo,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Memos_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.zbay.Memo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.zbay.Memo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.MemosClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Memos/Delete',
      request,
      metadata || {},
      methodDescriptor_Memos_Delete,
      callback);
};


/**
 * @param {!proto.zbay.Memo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.zbay.MemosPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Memos/Delete',
      request,
      metadata || {},
      methodDescriptor_Memos_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.User,
 *   !proto.zbay.Memo>}
 */
const methodDescriptor_Memos_List = new grpc.web.MethodDescriptor(
  '/zbay.Memos/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zbay.User,
  proto.zbay.Memo,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Memo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.User,
 *   !proto.zbay.Memo>}
 */
const methodInfo_Memos_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Memo,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Memo.deserializeBinary
);


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Memo>}
 *     The XHR Node Readable Stream
 */
proto.zbay.MemosClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Memos/List',
      request,
      metadata || {},
      methodDescriptor_Memos_List);
};


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Memo>}
 *     The XHR Node Readable Stream
 */
proto.zbay.MemosPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Memos/List',
      request,
      metadata || {},
      methodDescriptor_Memos_List);
};


module.exports = proto.zbay;

