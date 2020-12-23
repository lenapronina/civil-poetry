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
    return fetch(`${this._baseURL}/news`, {
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

  getAllInitialData(){
    return Promise.all([this.getNews(), this.getClaims()])
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
        type: claimData.type
      })
    })
    .then(res => this._checkResStatus(res));
  }

  addLike(newsId){
    return fetch(`${this._baseURL}/news/likes/${newsId}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(res => this._checkResStatus(res));
  }

  deleteLike(newsId){
    return fetch(`${this._baseURL}/news/likes/${newsId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._checkResStatus(res));
  }
}

export { Api };