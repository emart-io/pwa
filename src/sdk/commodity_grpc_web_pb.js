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


var user_pb = require('./user_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.zbay = require('./commodity_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zbay.CommoditiesClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

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
proto.zbay.CommoditiesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

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
 *   !proto.zbay.Commodity,
 *   !proto.zbay.Commodity>}
 */
const methodDescriptor_Commodities_Add = new grpc.web.MethodDescriptor(
  '/zbay.Commodities/Add',
  grpc.web.MethodType.UNARY,
  proto.zbay.Commodity,
  proto.zbay.Commodity,
  /**
   * @param {!proto.zbay.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Commodity.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Commodity,
 *   !proto.zbay.Commodity>}
 */
const methodInfo_Commodities_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Commodity,
  /**
   * @param {!proto.zbay.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Commodity.deserializeBinary
);


/**
 * @param {!proto.zbay.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Commodity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Commodity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommoditiesClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Commodities/Add',
      request,
      metadata || {},
      methodDescriptor_Commodities_Add,
      callback);
};


/**
 * @param {!proto.zbay.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Commodity>}
 *     A native promise that resolves to the response
 */
proto.zbay.CommoditiesPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Commodities/Add',
      request,
      metadata || {},
      methodDescriptor_Commodities_Add);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Commodity,
 *   !proto.zbay.Commodity>}
 */
const methodDescriptor_Commodities_Get = new grpc.web.MethodDescriptor(
  '/zbay.Commodities/Get',
  grpc.web.MethodType.UNARY,
  proto.zbay.Commodity,
  proto.zbay.Commodity,
  /**
   * @param {!proto.zbay.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Commodity.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Commodity,
 *   !proto.zbay.Commodity>}
 */
const methodInfo_Commodities_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Commodity,
  /**
   * @param {!proto.zbay.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Commodity.deserializeBinary
);


/**
 * @param {!proto.zbay.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Commodity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Commodity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommoditiesClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Commodities/Get',
      request,
      metadata || {},
      methodDescriptor_Commodities_Get,
      callback);
};


/**
 * @param {!proto.zbay.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Commodity>}
 *     A native promise that resolves to the response
 */
proto.zbay.CommoditiesPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Commodities/Get',
      request,
      metadata || {},
      methodDescriptor_Commodities_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Commodity,
 *   !proto.zbay.Commodity>}
 */
const methodDescriptor_Commodities_Update = new grpc.web.MethodDescriptor(
  '/zbay.Commodities/Update',
  grpc.web.MethodType.UNARY,
  proto.zbay.Commodity,
  proto.zbay.Commodity,
  /**
   * @param {!proto.zbay.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Commodity.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Commodity,
 *   !proto.zbay.Commodity>}
 */
const methodInfo_Commodities_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Commodity,
  /**
   * @param {!proto.zbay.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Commodity.deserializeBinary
);


/**
 * @param {!proto.zbay.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Commodity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Commodity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommoditiesClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Commodities/Update',
      request,
      metadata || {},
      methodDescriptor_Commodities_Update,
      callback);
};


/**
 * @param {!proto.zbay.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Commodity>}
 *     A native promise that resolves to the response
 */
proto.zbay.CommoditiesPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Commodities/Update',
      request,
      metadata || {},
      methodDescriptor_Commodities_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.User,
 *   !proto.zbay.Commodity>}
 */
const methodDescriptor_Commodities_List = new grpc.web.MethodDescriptor(
  '/zbay.Commodities/List',
  grpc.web.MethodType.SERVER_STREAMING,
  user_pb.User,
  proto.zbay.Commodity,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Commodity.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.User,
 *   !proto.zbay.Commodity>}
 */
const methodInfo_Commodities_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Commodity,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Commodity.deserializeBinary
);


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Commodity>}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommoditiesClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Commodities/List',
      request,
      metadata || {},
      methodDescriptor_Commodities_List);
};


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Commodity>}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommoditiesPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Commodities/List',
      request,
      metadata || {},
      methodDescriptor_Commodities_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.zbay.Commodity>}
 */
const methodDescriptor_Commodities_Search = new grpc.web.MethodDescriptor(
  '/zbay.Commodities/Search',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_wrappers_pb.StringValue,
  proto.zbay.Commodity,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Commodity.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.zbay.Commodity>}
 */
const methodInfo_Commodities_Search = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Commodity,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Commodity.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Commodity>}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommoditiesClient.prototype.search =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Commodities/Search',
      request,
      metadata || {},
      methodDescriptor_Commodities_Search);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Commodity>}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommoditiesPromiseClient.prototype.search =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Commodities/Search',
      request,
      metadata || {},
      methodDescriptor_Commodities_Search);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Commodity,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Commodities_Delete = new grpc.web.MethodDescriptor(
  '/zbay.Commodities/Delete',
  grpc.web.MethodType.UNARY,
  proto.zbay.Commodity,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.zbay.Commodity} request
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
 *   !proto.zbay.Commodity,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Commodities_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.zbay.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.zbay.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommoditiesClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Commodities/Delete',
      request,
      metadata || {},
      methodDescriptor_Commodities_Delete,
      callback);
};


/**
 * @param {!proto.zbay.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.zbay.CommoditiesPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Commodities/Delete',
      request,
      metadata || {},
      methodDescriptor_Commodities_Delete);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zbay.CouponsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

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
proto.zbay.CouponsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

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
 *   !proto.zbay.Coupon,
 *   !proto.zbay.Coupon>}
 */
const methodDescriptor_Coupons_Add = new grpc.web.MethodDescriptor(
  '/zbay.Coupons/Add',
  grpc.web.MethodType.UNARY,
  proto.zbay.Coupon,
  proto.zbay.Coupon,
  /**
   * @param {!proto.zbay.Coupon} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Coupon.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Coupon,
 *   !proto.zbay.Coupon>}
 */
const methodInfo_Coupons_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Coupon,
  /**
   * @param {!proto.zbay.Coupon} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Coupon.deserializeBinary
);


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Coupon)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Coupon>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CouponsClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Coupons/Add',
      request,
      metadata || {},
      methodDescriptor_Coupons_Add,
      callback);
};


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Coupon>}
 *     A native promise that resolves to the response
 */
proto.zbay.CouponsPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Coupons/Add',
      request,
      metadata || {},
      methodDescriptor_Coupons_Add);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Coupon,
 *   !proto.zbay.Coupon>}
 */
const methodDescriptor_Coupons_Get = new grpc.web.MethodDescriptor(
  '/zbay.Coupons/Get',
  grpc.web.MethodType.UNARY,
  proto.zbay.Coupon,
  proto.zbay.Coupon,
  /**
   * @param {!proto.zbay.Coupon} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Coupon.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Coupon,
 *   !proto.zbay.Coupon>}
 */
const methodInfo_Coupons_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Coupon,
  /**
   * @param {!proto.zbay.Coupon} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Coupon.deserializeBinary
);


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Coupon)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Coupon>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CouponsClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Coupons/Get',
      request,
      metadata || {},
      methodDescriptor_Coupons_Get,
      callback);
};


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Coupon>}
 *     A native promise that resolves to the response
 */
proto.zbay.CouponsPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Coupons/Get',
      request,
      metadata || {},
      methodDescriptor_Coupons_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Coupon,
 *   !proto.zbay.Coupon>}
 */
const methodDescriptor_Coupons_Update = new grpc.web.MethodDescriptor(
  '/zbay.Coupons/Update',
  grpc.web.MethodType.UNARY,
  proto.zbay.Coupon,
  proto.zbay.Coupon,
  /**
   * @param {!proto.zbay.Coupon} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Coupon.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Coupon,
 *   !proto.zbay.Coupon>}
 */
const methodInfo_Coupons_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Coupon,
  /**
   * @param {!proto.zbay.Coupon} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Coupon.deserializeBinary
);


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Coupon)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Coupon>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CouponsClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Coupons/Update',
      request,
      metadata || {},
      methodDescriptor_Coupons_Update,
      callback);
};


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Coupon>}
 *     A native promise that resolves to the response
 */
proto.zbay.CouponsPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Coupons/Update',
      request,
      metadata || {},
      methodDescriptor_Coupons_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Coupon,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Coupons_Delete = new grpc.web.MethodDescriptor(
  '/zbay.Coupons/Delete',
  grpc.web.MethodType.UNARY,
  proto.zbay.Coupon,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.zbay.Coupon} request
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
 *   !proto.zbay.Coupon,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Coupons_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.zbay.Coupon} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CouponsClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Coupons/Delete',
      request,
      metadata || {},
      methodDescriptor_Coupons_Delete,
      callback);
};


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.zbay.CouponsPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Coupons/Delete',
      request,
      metadata || {},
      methodDescriptor_Coupons_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.User,
 *   !proto.zbay.Coupon>}
 */
const methodDescriptor_Coupons_List = new grpc.web.MethodDescriptor(
  '/zbay.Coupons/List',
  grpc.web.MethodType.SERVER_STREAMING,
  user_pb.User,
  proto.zbay.Coupon,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Coupon.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.User,
 *   !proto.zbay.Coupon>}
 */
const methodInfo_Coupons_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Coupon,
  /**
   * @param {!proto.zbay.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Coupon.deserializeBinary
);


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Coupon>}
 *     The XHR Node Readable Stream
 */
proto.zbay.CouponsClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Coupons/List',
      request,
      metadata || {},
      methodDescriptor_Coupons_List);
};


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Coupon>}
 *     The XHR Node Readable Stream
 */
proto.zbay.CouponsPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Coupons/List',
      request,
      metadata || {},
      methodDescriptor_Coupons_List);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zbay.CommentsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

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
proto.zbay.CommentsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

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
 *   !proto.zbay.Comment,
 *   !proto.zbay.Comment>}
 */
const methodDescriptor_Comments_Add = new grpc.web.MethodDescriptor(
  '/zbay.Comments/Add',
  grpc.web.MethodType.UNARY,
  proto.zbay.Comment,
  proto.zbay.Comment,
  /**
   * @param {!proto.zbay.Comment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Comment.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Comment,
 *   !proto.zbay.Comment>}
 */
const methodInfo_Comments_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Comment,
  /**
   * @param {!proto.zbay.Comment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Comment.deserializeBinary
);


/**
 * @param {!proto.zbay.Comment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Comment)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Comment>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommentsClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Comments/Add',
      request,
      metadata || {},
      methodDescriptor_Comments_Add,
      callback);
};


/**
 * @param {!proto.zbay.Comment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Comment>}
 *     A native promise that resolves to the response
 */
proto.zbay.CommentsPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Comments/Add',
      request,
      metadata || {},
      methodDescriptor_Comments_Add);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Comment,
 *   !proto.zbay.Comment>}
 */
const methodDescriptor_Comments_Get = new grpc.web.MethodDescriptor(
  '/zbay.Comments/Get',
  grpc.web.MethodType.UNARY,
  proto.zbay.Comment,
  proto.zbay.Comment,
  /**
   * @param {!proto.zbay.Comment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Comment.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Comment,
 *   !proto.zbay.Comment>}
 */
const methodInfo_Comments_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Comment,
  /**
   * @param {!proto.zbay.Comment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Comment.deserializeBinary
);


/**
 * @param {!proto.zbay.Comment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Comment)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Comment>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommentsClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Comments/Get',
      request,
      metadata || {},
      methodDescriptor_Comments_Get,
      callback);
};


/**
 * @param {!proto.zbay.Comment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Comment>}
 *     A native promise that resolves to the response
 */
proto.zbay.CommentsPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Comments/Get',
      request,
      metadata || {},
      methodDescriptor_Comments_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Comment,
 *   !proto.zbay.Comment>}
 */
const methodDescriptor_Comments_Update = new grpc.web.MethodDescriptor(
  '/zbay.Comments/Update',
  grpc.web.MethodType.UNARY,
  proto.zbay.Comment,
  proto.zbay.Comment,
  /**
   * @param {!proto.zbay.Comment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Comment.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Comment,
 *   !proto.zbay.Comment>}
 */
const methodInfo_Comments_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Comment,
  /**
   * @param {!proto.zbay.Comment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Comment.deserializeBinary
);


/**
 * @param {!proto.zbay.Comment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Comment)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Comment>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommentsClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Comments/Update',
      request,
      metadata || {},
      methodDescriptor_Comments_Update,
      callback);
};


/**
 * @param {!proto.zbay.Comment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Comment>}
 *     A native promise that resolves to the response
 */
proto.zbay.CommentsPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Comments/Update',
      request,
      metadata || {},
      methodDescriptor_Comments_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Comment,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Comments_Delete = new grpc.web.MethodDescriptor(
  '/zbay.Comments/Delete',
  grpc.web.MethodType.UNARY,
  proto.zbay.Comment,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.zbay.Comment} request
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
 *   !proto.zbay.Comment,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Comments_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.zbay.Comment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.zbay.Comment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommentsClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Comments/Delete',
      request,
      metadata || {},
      methodDescriptor_Comments_Delete,
      callback);
};


/**
 * @param {!proto.zbay.Comment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.zbay.CommentsPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Comments/Delete',
      request,
      metadata || {},
      methodDescriptor_Comments_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zbay.Commodity,
 *   !proto.zbay.Comment>}
 */
const methodDescriptor_Comments_List = new grpc.web.MethodDescriptor(
  '/zbay.Comments/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zbay.Commodity,
  proto.zbay.Comment,
  /**
   * @param {!proto.zbay.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Comment.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Commodity,
 *   !proto.zbay.Comment>}
 */
const methodInfo_Comments_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Comment,
  /**
   * @param {!proto.zbay.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Comment.deserializeBinary
);


/**
 * @param {!proto.zbay.Commodity} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Comment>}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommentsClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Comments/List',
      request,
      metadata || {},
      methodDescriptor_Comments_List);
};


/**
 * @param {!proto.zbay.Commodity} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Comment>}
 *     The XHR Node Readable Stream
 */
proto.zbay.CommentsPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Comments/List',
      request,
      metadata || {},
      methodDescriptor_Comments_List);
};


module.exports = proto.zbay;

