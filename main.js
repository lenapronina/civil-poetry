(()=>{"use strict";var e={200:(e,t,n)=>{e.exports=n.p+"9742bdd8f7eee13cafe7.svg"},197:(e,t,n)=>{e.exports=n.p+"743a4416cb957ca0bef7.svg"},816:(e,t,n)=>{e.exports=n.p+"c27ecb4e34e28d6451ec.svg"},253:(e,t,n)=>{e.exports=n.p+"0c3828e4467a18cf9f3a.svg"}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.p="",(()=>{var e=n(200),t=n(197);const r=[{id:1,cathegory:"ЖКХ",image:e,preview:"И вот вдоль тротуара мчится",text:"И вот вдоль тротуара мчится Ручей, его вода грязна Он - знак для жителей столицы, Что где-то в эти дни весна",author:"Владимир Солоухин"},{id:2,cathegory:"Цены и налоги",image:t,preview:"И с нашей публики меж тем",text:"И с нашей публики меж тем\nБери умеренную плату,\nЗа книжку по пяти рублей -\nНалог не тягостный, ей-ей.",author:"Александр Пушкин"},{id:3,cathegory:"Дороги",image:n(816),preview:"Трагедии, представленной в провинции",text:"Трагедии, представленной в провинции,\nДо центра затруднительно дойти.\nКакие рвы и ямы на пути!\nКогда еще добьешься до правительства!",author:"Борис Слуцкий"},{id:4,cathegory:"Цены и налоги",image:t,preview:"Нас поборами царь",text:"Нас поборами царь\nИссушил, как сухарь:\nТо дороги,\nТо налоги,\nРазорили нас вконец.",author:"Кондратий Рылеев"},{id:5,cathegory:"Соседи",image:n(253),preview:"Был мой сосед",text:"Был мой сосед,\nИ, если в рай пошёл он,\nХочу я в ад,\nКоль райский сад\nТаких соседей полон.\n",author:"Роберт Бёрнс (перевод С.Я. Маршак)"},{id:6,cathegory:"ЖКХ",image:e,preview:"Весь дом одряхлел и заглох",text:"Весь дом одряхлел и заглох,\nНа стенах, на крышах, на ставнях\nУже пробивается мох.",author:"Дмитрий Кедрин"}];function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputList=Array.from(document.querySelectorAll(".popup__input")),this._buttonElement=document.querySelector(".popup__submit-button"),this._formElement=document.querySelector(".popup__form")}var t,n;return t=e,(n=[{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))})),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e.resetValidation(),alert("Жалоба отправлена кому надо, возвращайтесь на главное окно. Позже добавим для этого кнопочку. Сохранена ли жалоба в ленте, выясним позже.")}))}},{key:"_isValid",value:function(e){e.validity.valid?e.classList.remove("popup__input_invalid"):e.classList.add("popup__input_invalid")}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._buttonElement.classList.add("popup__submit-button_inactive"):this._buttonElement.classList.remove("popup__submit-button_inactive")}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){t.value="",e._isValid(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),e}(),a=document.querySelector(".claim-list"),c=document.querySelector(".popular__more");function u(e,t){e.forEach((function(e){var n=document.querySelector(".claim-template").content.cloneNode(!0),r=n.querySelector(".claim__id"),o=n.querySelector(".claim__cathegory"),i=n.querySelector(".claim__verse"),a=n.querySelector(".claim"),c=n.querySelector(".claim__author");r.src=e.image,o.textContent=e.cathegory,i.textContent=e.preview;var u=!1;a.addEventListener("click",(function(){!1===u?(i.textContent=e.text,u=!0,c.textContent=e.author):(i.textContent=e.preview,u=!1,c.textContent="")})),t.append(n)}))}u(r.slice(0,3),a);var l=document.querySelector(".popular__button");l.addEventListener("click",(function(){u(r.slice(3,6),a),c.textContent="Чуть позже добавим еще новости!",l.style.display="none"}));var s=document.querySelector(".hello__arrow-bottom"),p=document.querySelector(".problems-list");document.querySelector(".ticker").querySelector(".ticker__line"),document.querySelectorAll(".ticker").forEach((function(e){!function(e,t,n){var r=e,o=r.querySelector(".ticker__line"),i=o.offsetWidth,a=o.cloneNode(!0);r.appendChild(a);var c,u,l=performance.now();requestAnimationFrame((function e(t){(c=(t-l)/1e4)>1&&(c%=1,l=t),u=i*c,o.style.transform="translate(-".concat(u,"px, 0 )"),a.style.transform="translate(-".concat(u,"px, 0 )"),requestAnimationFrame(e)}))}(e)})),s.addEventListener("click",(function(){p.scrollIntoView()}));var d=Array.from(document.querySelectorAll(".problem")),_=Array.from(document.querySelectorAll(".problem_popup")),m=document.querySelector(".popup_result"),v=document.querySelector(".popup_subcategories"),f=document.querySelector(".popup__wrapper_subcategories"),y=document.querySelector(".popup__wrapper_result");document.querySelector(".popup__submit-button"),d.forEach((function(e){e.addEventListener("click",(function(){v.classList.add("popup_opened")}))})),_.forEach((function(e){e.addEventListener("click",(function(){m.classList.add("popup_opened"),E.resetValidation()}))})),f.addEventListener("click",(function(){v.classList.remove("popup_opened")})),y.addEventListener("click",(function(){m.classList.remove("popup_opened"),E.resetValidation()}));var h=Array.from(document.querySelectorAll(".card")),S=document.querySelector(".popup_news"),q=S.querySelector(".button");h.forEach((function(e){e.addEventListener("click",(function(){S.classList.add("popup_opened")}))})),q.addEventListener("click",(function(){S.classList.remove("popup_opened")}));var E=new i;E.enableValidation();var b=document.querySelector(".popup__poem-button_prev");document.querySelector(".popup__poem-button_next").addEventListener("click",(function(e){e.preventDefault(),alert("Стихотворение переключится на следующее")})),b.addEventListener("click",(function(e){e.preventDefault(),alert("Стихотворениме переключится на предыдущее")}))})()})();