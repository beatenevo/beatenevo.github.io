var posts=["2024/11/06/hello-world/","2024/04/30/alg/","2024/09/27/crawler/","2024/11/25/acm1/","2024/09/30/acm2/","2024/11/25/huawei/","2024/12/07/selenium/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };