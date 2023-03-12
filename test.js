fetch('https://api.squarespace.com/1.0/commerce/orders?modifiedAfter=2023-03-01T00:00:00Z&modifiedBefore=2023-03-10T23:59:59Z&fulfillmentStatus=FULFILLED', {
  headers: {
    Authorization: '097439d0-0edb-426b-8c05-ae2bb73e8e61'
  }
}).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function(error) {
  console.error(error);
});
