class PostError extends Error{
    constructor(message, redirectURL, status){
        super(message);
        this.redirectURL =redirectURL;
        this.status = status;
    }
    getMessage(){
        return this.message;
    }
    getRedirectURl(){
        return this.getRedirectURl;
    }
    getStatus(){
        return this.status;
    }
    }
    module.exports = PostError;