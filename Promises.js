/*Here we can see how promises are better than callbacks,
 first by understanding how callbacks work then to promises
 to see the best out of promise.  Not fully explained*/

 const fetchData = (callback) => {
        setTimeout(() => {
            callback('data')
        },2000)
 }
 fetchData((data) =>{
    console.log(data)
 })



