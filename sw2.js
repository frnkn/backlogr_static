var version = "v1::";

self.addEventListener("install", function(event){
    console.log("WORKER: install event in progress");
    event.waitUntil(
        caches
        .open(version + 'fundamentals')
        .then(function(cache){
            return cache.addAll([
                '/',
                '/css/main.css',
                '/js/main.js'
            ]);
        })
        .then(function (){
            console.log("WORKER: install completed");
        })
    )
});