class Api {
  constructor({ baseUrl, headers }){
    this._baseURL = baseUrl;
    this._headers = headers
  }

  _checkResStatus(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getNews() {
    return fetch(`${this._baseURL}/newslists`, {
      headers: this._headers
    })
    .then(res => this._checkResStatus(res));
  }

  getClaims() {
    return fetch(`${this._baseURL}/claims`, {
      headers: this._headers
    })
    .then(res => this._checkResStatus(res));
  }

  postNewClaim(claimData){
    return fetch(`${this._baseURL}/claims`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        applicant: claimData.name,
        location: claimData.location,
        poems: claimData.poems,
        author: claimData.author,
        type: claimData.type,
        checked: claimData.checked
      })
    })
    .then(res => this._checkResStatus(res));
  }
/// Пока не работают
  // addLike(newsId, data){
  //   return fetch(`${this._baseURL}/newslists/likes/${newsId}`, {
  //     method: 'PUT',
  //     headers: this._headers,
  //     body: JSON.stringify(data)
  //   })
  //   .then(res => this._checkResStatus(res));
  // }

  // deleteLike(newsId){
  //   return fetch(`${this._baseURL}/newslists/${newsId}/likes/`, {
  //     method: 'DELETE',
  //     headers: this._headers
  //   })
  //   .then(res => this._checkResStatus(res));
  // }
}

export { Api };
