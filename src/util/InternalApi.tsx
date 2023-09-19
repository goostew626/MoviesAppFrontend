// InternalApi

class InternalApi {

    url!:string;

    constructor() {
        this.init();
    }

    init() {
        this.url = "";
        return this;
    }

    setUrl(url:string) {
        this.url = url;
    }

    send() {
        let self = this;
        return new Promise((resolve:any, reject:any) => {
            const config = {
                method: "GET"
            };

            fetch(this.url, config)
                .then((res:any) => {
                    if(res.status !== 200) { throw "FAIL"; }
                    return res.json();
                })
                .then((res:any) => {
                    resolve(res);
                })
                .catch((err:any) => {
                    console.log(err);
                    reject("Internal API Request Failed");
                });
        });

    }

}

// Export

export default InternalApi;
