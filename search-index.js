var N = null;var searchIndex = {};
searchIndex["tower_h2"]={"doc":"","items":[[3,"BoxBody","tower_h2","Dynamic `Send` body object.",N,N],[3,"UnsyncBoxBody","","Dynamic `!Send` body object.",N,N],[3,"RecvBody","","Allows a stream to be read from the remote.",N,N],[3,"Data","","",N,N],[0,"client","","",N,N],[3,"Background","tower_h2::client","Task that performs background tasks for a client.",N,N],[3,"Connect","","Establishes an H2 client connection.",N,N],[3,"ConnectFuture","","Completes with a Connection when the H2 connection has been initialized.",N,N],[3,"Connection","","Exposes a request/response API on an h2 client connection..",N,N],[3,"Handshake","","In progress HTTP/2.0 client handshake.",N,N],[3,"ResponseFuture","","Drives the sending of a request (and its body) until a response is received (i.e. the initial HEADERS or RESET frames sent from the remote).",N,N],[3,"Error","","Errors produced by client `Connection` calls.",N,N],[4,"ConnectError","","Error produced when establishing an H2 client connection.",N,N],[13,"Connect","","An error occurred when attempting to establish the underlying session layer.",0,N],[13,"Handshake","","An error occurred while performing the HTTP/2.0 handshake.",0,N],[4,"HandshakeError","","Error produced when performing an HTTP/2.0 handshake.",N,N],[13,"Proto","","An error occurred when attempting to perform the HTTP/2.0 handshake.",1,N],[13,"Execute","","An error occured when attempting to execute a worker task",1,N],[11,"poll","","",2,[[["self"]],["poll"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"new","","Create a new `Connect`.",3,[[["c"],["builder"],["e"]],["self"]]],[11,"new_service","","Obtains a Connection on a single plaintext h2 connection to a remote.",3,N],[11,"poll","","",4,[[["self"]],["poll"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"description","","",0,[[["self"]],["str"]]],[11,"cause","","",0,[[["self"]],["option",["error"]]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"handshake","","Perform the HTTP/2.0 handshake, yielding a `Connection` on completion.",6,[[["t"],["e"]],["handshake"]]],[11,"clone","","",6,[[["self"]],["self"]]],[11,"poll_ready","","",6,[[["self"]],["poll"]]],[11,"call","","",6,N],[11,"poll","","",7,[[["self"]],["poll"]]],[11,"stream_id","","Returns the stream ID of the response stream, or `None` if this future does not correspond to a stream.",7,[[["self"]],["option",["streamid"]]]],[11,"poll","","",8,[[["self"]],["poll"]]],[11,"reason","","",5,[[["self"]],["option",["reason"]]]],[11,"from","","",5,[[["error"]],["self"]]],[11,"from","","",5,[[["reason"]],["self"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"cause","","",5,[[["self"]],["option",["error"]]]],[11,"description","","",5,[[["self"]],["str"]]],[11,"from","","",1,[[["error"]],["self"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"cause","","",1,[[["self"]],["option",["error"]]]],[11,"description","","",1,[[["self"]],["str"]]],[0,"server","tower_h2","",N,N],[3,"Server","tower_h2::server","Attaches service implementations to h2 connections.",N,N],[3,"Connection","","Drives connection-level I/O .",N,N],[3,"Background","","Task used to process requests",N,N],[4,"Error","","Error produced by a `Connection`.",N,N],[13,"Handshake","","Error produced during the HTTP/2.0 handshake.",9,N],[13,"Protocol","","Error produced by the HTTP/2.0 stream",9,N],[13,"NewService","","Error produced when obtaining the service",9,N],[13,"Service","","Error produced by the service",9,N],[13,"Execute","","Error produced when attempting to spawn a task",9,N],[8,"Modify","","Modify a received request",N,N],[10,"modify","","Modify a request before calling the service.",10,[[["self"],["request"]]]],[11,"new","","",11,[[["s"],["builder"],["e"]],["self"]]],[11,"serve","","Produces a future that is satisfied once the h2 connection has been initialized.",11,[[["self"],["t"]],["connection"]]],[11,"serve_modified","","",11,[[["self"],["t"],["f"]],["connection"]]],[11,"clone","","",11,[[["self"]],["self"]]],[11,"poll","","",12,[[["self"]],["poll"]]],[11,"graceful_shutdown","","Start an HTTP2 graceful shutdown.",12,[[["self"]]]],[11,"poll","","",13,[[["self"]],["poll"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"cause","","",9,[[["self"]],["option",["error"]]]],[11,"description","","",9,[[["self"]],["str"]]],[11,"new","tower_h2","Create a new `BoxBody` backed by `inner`.",14,[[["box",["body"]]],["self"]]],[11,"is_end_stream","","",14,[[["self"]],["bool"]]],[11,"poll_data","","",14,[[["self"]],["poll",["option","error"]]]],[11,"poll_trailers","","",14,[[["self"]],["poll",["option","error"]]]],[11,"fmt","","",14,[[["self"],["formatter"]],["result"]]],[11,"new","","Create a new `UnsyncBoxBody` backed by `inner`.",15,[[["box",["body"]]],["self"]]],[11,"is_end_stream","","",15,[[["self"]],["bool"]]],[11,"poll_data","","",15,[[["self"]],["poll",["option","error"]]]],[11,"poll_trailers","","",15,[[["self"]],["poll",["option","error"]]]],[11,"fmt","","",15,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",16,[[["self"],["formatter"]],["result"]]],[11,"default","","",16,[[],["recvbody"]]],[11,"fmt","","",17,[[["self"],["formatter"]],["result"]]],[11,"stream_id","","Returns the stream ID of the received stream, or `None` if this body does not correspond to a stream.",16,[[["self"]],["option",["streamid"]]]],[11,"is_end_stream","","",16,[[["self"]],["bool"]]],[11,"poll_data","","",16,[[["self"]],["poll",["option","error"]]]],[11,"poll_trailers","","",16,[[["self"]],["poll",["option","error"]]]],[11,"remaining","","",17,[[["self"]],["usize"]]],[11,"bytes","","",17,N],[11,"advance","","",17,[[["self"],["usize"]]]],[11,"drop","","",17,[[["self"]]]],[8,"Body","","A generic h2 client/server request/response body.",N,N],[16,"Data","","The body chunk type",18,N],[11,"is_end_stream","","Returns `true` when the end of stream has been reached.",18,[[["self"]],["bool"]]],[10,"poll_data","","Polls a stream of data.",18,[[["self"]],["poll",["option","error"]]]],[11,"poll_trailers","","Returns possibly one `HeaderMap` for trailers.",18,[[["self"]],["poll",["option","error"]]]],[8,"HttpService","","An HTTP service",N,N],[16,"ResponseBody","","Response payload.",19,N],[16,"Error","","Errors produced by the service.",19,N],[16,"Future","","The future response value.",19,N],[10,"poll_ready","","Returns `Ready` when the service is able to process requests.",19,[[["self"]],["poll"]]],[10,"call","","Process the request and return the response asynchronously.",19,N],[11,"lift","","Wrap the HttpService so that it implements tower_service::Service directly.",19,[[["self"]],["liftservice"]]],[11,"lift_ref","","Same as `lift` but operates on an HttpService reference.",19,[[["self"]],["liftserviceref"]]],[11,"from","","",14,[[["t"]],["t"]]],[11,"into","","",14,[[["self"]],["u"]]],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"try_into","","",14,[[["self"]],["result"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"get_type_id","","",14,[[["self"]],["typeid"]]],[11,"from","","",15,[[["t"]],["t"]]],[11,"into","","",15,[[["self"]],["u"]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"try_into","","",15,[[["self"]],["result"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"get_type_id","","",15,[[["self"]],["typeid"]]],[11,"from","","",16,[[["t"]],["t"]]],[11,"into","","",16,[[["self"]],["u"]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"try_into","","",16,[[["self"]],["result"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"get_type_id","","",16,[[["self"]],["typeid"]]],[11,"from","","",17,[[["t"]],["t"]]],[11,"into","","",17,[[["self"]],["u"]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"try_into","","",17,[[["self"]],["result"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"get_type_id","","",17,[[["self"]],["typeid"]]],[11,"into_buf","","",17,[[["self"]],["t"]]],[11,"from","tower_h2::client","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"into_future","","",2,[[["self"]],["f"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"new_service","","",3,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"into_future","","",4,[[["self"]],["f"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,N],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"into_future","","",8,[[["self"]],["f"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"into_future","","",7,[[["self"]],["f"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"to_string","","",5,[[["self"]],["string"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"to_string","","",0,[[["self"]],["string"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"to_string","","",1,[[["self"]],["string"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"to_owned","tower_h2::server","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,N],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"from","","",12,[[["t"]],["t"]]],[11,"into","","",12,[[["self"]],["u"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"into_future","","",12,[[["self"]],["f"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"into_future","","",13,[[["self"]],["f"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"to_string","","",9,[[["self"]],["string"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"is_end_stream","tower_h2","Returns `true` when the end of stream has been reached.",18,[[["self"]],["bool"]]],[11,"poll_trailers","","Returns possibly one `HeaderMap` for trailers.",18,[[["self"]],["poll",["option","error"]]]],[11,"lift","","Wrap the HttpService so that it implements tower_service::Service directly.",19,[[["self"]],["liftservice"]]],[11,"lift_ref","","Same as `lift` but operates on an HttpService reference.",19,[[["self"]],["liftserviceref"]]]],"paths":[[4,"ConnectError"],[4,"HandshakeError"],[3,"Background"],[3,"Connect"],[3,"ConnectFuture"],[3,"Error"],[3,"Connection"],[3,"ResponseFuture"],[3,"Handshake"],[4,"Error"],[8,"Modify"],[3,"Server"],[3,"Connection"],[3,"Background"],[3,"BoxBody"],[3,"UnsyncBoxBody"],[3,"RecvBody"],[3,"Data"],[8,"Body"],[8,"HttpService"]]};
initSearch(searchIndex);
