/**
 * Application service
 */
class Service {
  /**
   * Initialize the service.
   * @param {string} baseUrl - The base url of the service.
   * @param {string} token - The access token.
   */
  constructor(baseUrl, token) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  /**
   * Get entries.
   * @param {function} callback - The callback to send data to.
   */
  getEntries(callback) {
    let url = this.baseUrl + '/log';

    /* Set the token header. */
    var authentication = new Headers({
      'Authorization': 'Bearer ' + this.token,
    });

    /* Prepare fetch parameters. */
    var init = {
      headers: authentication,
      method: 'GET',
      cache: 'default',
    };

    /* Fetch data and send to callback. */
    fetch(url, init)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        callback(data);
      });
  }
}

export default Service;
