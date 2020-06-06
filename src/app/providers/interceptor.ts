//import { ClientReadableStream } from 'grpc-web';

export class StreamInterceptor {

    intercept(request, invoker) {
        const metadata = request.getMetadata();
        metadata['authorization-token'] = 'admin';
        //var reqMsg = request.getRequestMessage();
        //reqMsg.setMessage('[Intcpt Req1]'+reqMsg.getMessage());
        return new InterceptedStream(invoker(request));
    }

}

class InterceptedStream {
    stream;
    constructor(stream) {
        this.stream = stream;
    }

    on(eventType, callback) {
        if (eventType == 'data') {
            const newCallback = (response) => {
                //response.setMessage('[Intcpt Resp1]'+response.getMessage());
                console.log(response);
                callback(response);
            };
            this.stream.on(eventType, newCallback);
        } else {
            this.stream.on(eventType, callback);
        }
        return this;
    }
}