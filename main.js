(()=>{"use strict";var e={200:(e,t,r)=>{e.exports=r.p+"9742bdd8f7eee13cafe7.svg"},197:(e,t,r)=>{e.exports=r.p+"743a4416cb957ca0bef7.svg"},816:(e,t,r)=>{e.exports=r.p+"c27ecb4e34e28d6451ec.svg"},253:(e,t,r)=>{e.exports=r.p+"0c3828e4467a18cf9f3a.svg"},533:(e,t,r)=>{e.exports=r.p+"4a1c0828893e2abb37fd.png"},989:(e,t,r)=>{e.exports=r.p+"d05e4951755ba295c2b6.png"},354:(e,t,r)=>{e.exports=r.p+"7f924f5ea4ab5fa5b737.svg"},480:(e,t,r)=>{e.exports=r.p+"3f621cc87bb65c681de8.svg"},855:(e,t,r)=>{e.exports=r.p+"b7336401cff32b195292.svg"},121:(e,t,r)=>{e.exports=r.p+"1b4451314a8c3a91a8ae.svg"},186:(e,t,r)=>{e.exports=r.p+"eae7dddb60ff8a0b7f96.svg"},95:(e,t,r)=>{e.exports=r.p+"7ebe59306266247968f9.svg"},931:(e,t,r)=>{e.exports=r.p+"833e87a680e72709540d.svg"},765:(e,t,r)=>{e.exports=r.p+"ec905cd240a9a902d845.svg"},390:(e,t,r)=>{e.exports=r.p+"cfdadf96c3b5d30f6c2b.png"},585:(e,t,r)=>{e.exports=r.p+"c1b47250d24eebb2a1d9.png"}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.p="",(()=>{var e=r(200),t=r(197);const n=[{id:1,cathegory:"ЖКХ",image:e,preview:"И вот вдоль тротуара мчится",text:"И вот вдоль тротуара мчится Ручей, его вода грязна Он - знак для жителей столицы, Что где-то в эти дни весна",author:"Владимир Солоухин"},{id:2,cathegory:"Цены и налоги",image:t,preview:"И с нашей публики меж тем",text:"И с нашей публики меж тем\nБери умеренную плату,\nЗа книжку по пяти рублей -\nНалог не тягостный, ей-ей.",author:"Александр Пушкин"},{id:3,cathegory:"Дороги",image:r(816),preview:"Трагедии, представленной в провинции",text:"Трагедии, представленной в провинции,\nДо центра затруднительно дойти.\nКакие рвы и ямы на пути!\nКогда еще добьешься до правительства!",author:"Борис Слуцкий"},{id:4,cathegory:"Цены и налоги",image:t,preview:"Нас поборами царь",text:"Нас поборами царь\nИссушил, как сухарь:\nТо дороги,\nТо налоги,\nРазорили нас вконец.",author:"Кондратий Рылеев"},{id:5,cathegory:"Соседи",image:r(253),preview:"Был мой сосед",text:"Был мой сосед,\nИ, если в рай пошёл он,\nХочу я в ад,\nКоль райский сад\nТаких соседей полон.\n",author:"Роберт Бёрнс (перевод С.Я. Маршак)"},{id:6,cathegory:"ЖКХ",image:e,preview:"Весь дом одряхлел и заглох",text:"Весь дом одряхлел и заглох,\nНа стенах, на крышах, на ставнях\nУже пробивается мох.",author:"Дмитрий Кедрин"}];function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputList=Array.from(document.querySelectorAll(".popup__input")),this._buttonElement=document.querySelector(".popup__submit-button"),this._formElement=document.querySelector(".popup__form")}var t,r;return t=e,(r=[{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))})),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e.resetValidation(),alert("Жалоба отправлена кому надо, возвращайтесь на главное окно. Позже добавим для этого кнопочку. Сохранена ли жалоба в ленте, выясним позже.")}))}},{key:"_isValid",value:function(e){e.validity.valid?e.classList.remove("popup__input_invalid"):e.classList.add("popup__input_invalid")}},{key:"_showInputError",value:function(e,t){var r=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),r.textContent=t,r.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._buttonElement.classList.add("popup__submit-button_inactive"):this._buttonElement.classList.remove("popup__submit-button_inactive")}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){t.value="",e._isValid(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,r),e}();function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardName=t,this._openResultPopup=n,this._poems=r}var t,r;return t=e,(r=[{key:"_getSubcategoryTemplate",value:function(){return document.querySelector(".popup-subcategory-template").content.children[0].cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.addEventListener("click",(function(){e._openResultPopup(e._poems)}))}},{key:"createElement",value:function(){return this._element=this._getSubcategoryTemplate(),this._element.querySelector(".problem__name").textContent=this._cardName,this._setEventListeners(),this._element}}])&&i(t.prototype,r),e}();function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(t,r,n,o,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._categoryTemplateSelector=o,this._name=t,this._src=r,this._subcategories=n,this._createSubcategoryPopup=a}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._categoryTemplateSelector).content.children[0].cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.addEventListener("click",(function(){e._createSubcategoryPopup(e._subcategories,e._name)}))}},{key:"createCategory",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".problem__image"),this._elementImage.src=this._src,this._elementImage.alt=this._name,this._element.id=this._id,this._element.querySelector(".problem__name").textContent=this._name,this._setEventListeners(),this._element}}])&&s(t.prototype,r),e}(),p=[{name:"Соседи",src:r(931),subcategories:[{name:"Шумят",poems:[""]}]},{name:"ЖКХ",src:r(186),subcategories:[{name:"Отопление",poems:[""]},{name:"Свет",poems:["Кто ответит мне &mdash;<br>Что за дом такой,<br>Почему во тьме,<br>Как барак чумной?<br>Свет лампад погас,<br>Воздух вылился&hellip;<br>Али жить у вас<br>Разучилися?"]},{name:"Вода",poems:["На войне, в пыли походной,<br>В летний зной и в холода,<br>Лучше нет простой, природной<br>Из колодца, из пруда,<br>Из трубы водопроводной,<br>Из копытного следа,<br>Из реки, какой угодно,<br>Из ручья, из-подо льда,<br>- Лучше нет воды холодной,<br>Лишь вода была б &mdash; вода."]},{name:"Сосульки",poems:[""]},{name:"Не убирают",poems:[""]},{name:"Не чинят",poems:["Наш старый дом встречает новый день,<br>лукаво сдвинув крышу набекрень,<br>подмигивая солнечным стеклом,<br>не зная, что назначен он на слом"]}]},{name:"Дураки",src:r(855),subcategories:[{name:"Ну дураки и дураки",poems:[""]}]},{name:"Дороги",src:r(480),subcategories:[{name:"Снег",poems:["Заметает пурга<br>Белый путь,<br>Хочет в мягких снегах<br>Потонуть.<br>Ветер резвый уснул<br>На пути;<br>Ни проехать в лесу,<br>Ни пройти."]},{name:"Ямы",poems:["С утра садимся мы в телегу;<br>Мы рады голову сломать<br>И, презирая лень и негу,<br>Кричим: пошел! Еб*на мать!"]},{name:"Пробки",poems:["Возле Каменного моста,<br>Где течет Москва-река,<br>Возле Каменного моста<br>Стала улица узка.<br>Там на улице заторы,<br>Там волнуются шоферы.<br>&mdash; Ох,&mdash; вздыхает постовой,<br>Дом мешает угловой!"]},{name:"Общественный транспорт",poems:["Когда состаришься - ходи<br>По улице пешком.<br>Не лезь в автобус, все равно<br>Стоять придется там.<br>И нынче мало дураков,<br>Чтоб место уступать,<br>А к тем далеким временам<br>Не станет их совсем."]}]},{name:"Бедствия",src:r(354),subcategories:[{name:"Мне плохо",poems:["Друг мой, друг мой,<br>Я очень и очень болен.<br>Сам не знаю, откуда взялась эта боль.<br>То ли ветер свистит<br>Над пустым и безлюдным полем,<br>То ль, как рощу в сентябрь,<br>Осыпает мозги алкоголь."]},{name:"Другому плохо",poems:["И если умирает человек,<br>с ним умирает первый его снег,<br>и первый поцелуй, и первый бой&hellip;<br>Все это забирает он с собой."]},{name:"Пожар",poems:["Огонь же &mdash; рвется от земли,<br>от Зла, Добра и прочей швали,<br>почти всегда по вертикали,<br>как это мы узнать могли.","Что за дым над головой? <br />Что за гром по мостовой? <br />Дом пылает за углом, <br />Сто зевак стоят кругом. <br />Ставит лестницы команда, <br />От огня спасает дом. <br />Весь чердак уже в огне, <br />Бьются голуби в окне."]},{name:"Потоп",poems:[""]}]},{name:"Экология",src:r(121),subcategories:[{name:"Пропали птицы",poems:["Ласточки пропали,<br>А вчера зарёй<br>Всё грачи летали<br>Да, как сеть, мелькали<br>Вон над той горой."]},{name:"Вырубают леса",poems:[""]}]},{name:"Доска объявлений",src:r(95),subcategories:[{name:"Пропала собака",poems:[""]},{name:"Пропал дом",poems:[""]}]},{name:"Гос. структуры",src:r(765),subcategories:[{name:"Медицина",poems:["Дом стоял На этом месте!\n        Он пропал С жильцами вместе!\n        — Где четвертый номер дома?\n        Он был виден за версту!\n        — Говорит тревожно Сёма\n        Постовому на мосту.\n        —Возвратился я из Крыма,\n        Мне домой необходимо!\n        Где высокий серый дом?\n        У меня там мама в нем!\n        "]},{name:"Школы",poems:[""]},{name:"Бюрократия",poems:["Я волком бы<br>выгрыз<br>бюрократизм.<br>К мандатам<br>почтения нету.<br>К любым<br>чертям с матерями<br>катись<br>любая бумажка."]}]}],l=r(390),m=r(533),b=r(585),_=r(989),d=document.querySelector(".claim-list"),v=document.querySelector(".popular__more"),f=document.querySelector(".popup_result"),h=document.querySelector(".problems-list__wrapper"),y=document.querySelector(".problems-list__wrapper_popup"),g=f.querySelector(".popup__poem-button_next"),S=f.querySelector(".popup__poem-button_prev"),q=document.querySelector(".popup_subcategories"),E=q.querySelector(".popup__heading"),x=document.querySelector(".popup__wrapper_subcategories"),L=document.querySelector(".popup__wrapper_result"),k=Array.from(document.querySelectorAll(".card")),w=document.querySelector(".popup_news"),C=w.querySelector(".button");function T(e,t){e.forEach((function(e){var r=document.querySelector(".claim-template").content.cloneNode(!0),n=r.querySelector(".claim__id"),o=r.querySelector(".claim__cathegory"),a=r.querySelector(".claim__verse"),i=r.querySelector(".claim"),c=r.querySelector(".claim__author");n.src=e.image,o.textContent=e.cathegory,a.textContent=e.preview;var s=!1;i.addEventListener("click",(function(){!1===s?(a.textContent=e.text,s=!0,c.textContent=e.author):(a.textContent=e.preview,s=!1,c.textContent="")})),t.append(r)}))}T(n.slice(0,3),d);var I=document.querySelector(".popular__button");I.addEventListener("click",(function(){T(n.slice(3,6),d),v.textContent="Чуть позже добавим еще новости!",I.style.display="none"}));var V=document.querySelector(".hello__arrow-bottom"),A=document.querySelector(".problems-list");document.querySelector(".ticker").querySelector(".ticker__line"),document.querySelectorAll(".ticker").forEach((function(e){!function(e,t,r){var n=e,o=n.querySelector(".ticker__line"),a=o.offsetWidth,i=o.cloneNode(!0);n.appendChild(i);var c,s,u=performance.now();requestAnimationFrame((function e(t){(c=(t-u)/1e4)>1&&(c%=1,u=t),s=a*c,o.style.transform="translate(-".concat(s,"px, 0 )"),i.style.transform="translate(-".concat(s,"px, 0 )"),requestAnimationFrame(e)}))}(e)})),V.addEventListener("click",(function(){A.scrollIntoView()})),x.addEventListener("click",(function(){q.querySelectorAll(".problem_popup").forEach((function(e){e.remove()})),q.classList.remove("popup_opened")})),L.addEventListener("click",(function(){f.classList.remove("popup_opened"),P.resetValidation()})),k.forEach((function(e){e.addEventListener("click",(function(){w.classList.add("popup_opened")}))})),C.addEventListener("click",(function(){w.classList.remove("popup_opened")}));var P=new a;P.enableValidation();var N=function(e,t){e.forEach((function(e){var t=new c(e.name,e.poems,j);y.append(t.createElement())})),E.textContent=t,q.classList.add("popup_opened")},j=function(e){var t=0,r=function(r){r.preventDefault(),t++,o(t,e),a(t,e),f.querySelector(".popup__text").innerHTML=e[t]},n=function(r){r.preventDefault(),t--,f.querySelector(".popup__text").innerHTML=e[t],o(t,e),a(t,e)},o=function(e,t){null==t[e+1]?(g.querySelector(".popup__poem-button-icon").src=l,g.removeEventListener("click",r)):(g.querySelector(".popup__poem-button-icon").src=b,g.addEventListener("click",r))},a=function(e,t){null==t[e-1]?(S.querySelector(".popup__poem-button-icon").src=m,S.removeEventListener("click",n)):(S.querySelector(".popup__poem-button-icon").src=_,S.addEventListener("click",n))};f.querySelector(".popup__text").innerHTML=e[t],g.addEventListener("click",r),S.addEventListener("click",n),o(t,e),a(t,e),f.classList.add("popup_opened")};p.forEach((function(e){var t=new u(e.name,e.src,e.subcategories,".problem-template",N);h.append(t.createCategory())}))})()})();