(()=>{"use strict";var e={579:(e,t,r)=>{e.exports=r.p+"6461e5178a31df3542d6.svg"},311:(e,t,r)=>{e.exports=r.p+"4b8af586ae19e99f2fda.svg"},316:(e,t,r)=>{e.exports=r.p+"fda86baccce17c77af3e.svg"},17:(e,t,r)=>{e.exports=r.p+"d2f7d1789c888050f8ae.svg"},200:(e,t,r)=>{e.exports=r.p+"81a9952ff403c5ffad2b.svg"},197:(e,t,r)=>{e.exports=r.p+"790ec469a3e053e8ee11.svg"},816:(e,t,r)=>{e.exports=r.p+"f0a318768429a3085709.svg"},253:(e,t,r)=>{e.exports=r.p+"3a72ca814a52a07ef5d7.svg"},340:(e,t,r)=>{e.exports=r.p+"4d76d57aac8d48b0c09d.svg"},410:(e,t,r)=>{e.exports=r.p+"d782938887ad234b4d42.svg"},348:(e,t,r)=>{e.exports=r.p+"729ffb3c4ae97b0b06d0.jpg"},518:(e,t,r)=>{e.exports=r.p+"adafd0d91ab5ed78f81c.jpg"},857:(e,t,r)=>{e.exports=r.p+"879f3ca92841b0d7e47b.jpg"},354:(e,t,r)=>{e.exports=r.p+"7f924f5ea4ab5fa5b737.svg"},480:(e,t,r)=>{e.exports=r.p+"3f621cc87bb65c681de8.svg"},855:(e,t,r)=>{e.exports=r.p+"b7336401cff32b195292.svg"},121:(e,t,r)=>{e.exports=r.p+"1b4451314a8c3a91a8ae.svg"},186:(e,t,r)=>{e.exports=r.p+"eae7dddb60ff8a0b7f96.svg"},95:(e,t,r)=>{e.exports=r.p+"7ebe59306266247968f9.svg"},931:(e,t,r)=>{e.exports=r.p+"833e87a680e72709540d.svg"},765:(e,t,r)=>{e.exports=r.p+"ec905cd240a9a902d845.svg"},959:(e,t,r)=>{e.exports=r.p+"672b515e976fa27044aa.svg"},107:(e,t,r)=>{e.exports=r.p+"cdb73f2fb1c0e58698f8.svg"}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.p="",(()=>{function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=document.querySelector(e)}var r,n;return r=t,(n=[{key:"_showInputError",value:function(e,t){var r=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove("popup__input_initial"),e.classList.add("popup__input_invalid"),r.classList.add("popup__caption_error"),r.textContent=t}},{key:"hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove("popup__input_invalid"),t.classList.remove("popup__caption_error"),t.textContent="","email"==e.id&&(t.textContent="На почту придёт уведомление о статусе жалобы",t.classList.add("popup__caption_email"))}},{key:"_isValid",value:function(e){e.validity.valid?this.hideInputError(e):"email"==e.id?this._showInputError(e,"Проверьте правильность заполнения адреса почты"):this._showInputError(e,"Это обязательное поле")}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add("popup__submit-button_inactive"),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove("popup__submit-button_inactive"),this._buttonElement.removeAttribute("disabled",!0))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(".popup__input")),this._buttonElement=this._formElement.querySelector(".popup__submit-button"),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&e(r.prototype,n),t}();function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(t,r){var n=r.openPopupWithForm;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._heading=this._popup.querySelector(".popup__heading"),this._backButton=this._popup.querySelector(".popup__wrapper_subcategories"),this._childrenContainrer=this._popup.querySelector(".problems-list__wrapper_popup"),this._openPopupWithForm=n}var t,r;return t=e,(r=[{key:"_updateHeading",value:function(e){this._heading.textContent=e.name}},{key:"updatePopup",value:function(e){this._data=e,this._updateHeading(this._data),this.open(),this._renderElements(Array.from(this._data.subcategories),this._data),this._setEventListeners()}},{key:"open",value:function(){this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._heading.textContent="",this.deleteChildren()}},{key:"_getSubcategoryTemplate",value:function(){return document.querySelector(".popup-subcategory-template").content.cloneNode(!0)}},{key:"_createChildElement",value:function(e){return this._element=this._getSubcategoryTemplate(),this._element.querySelector(".problem__name").textContent=e.name,this._element}},{key:"_renderElements",value:function(e,t){var r=this;e.forEach((function(e){var n=r._createChildElement(e);n.querySelector(".problem").addEventListener("click",(function(){r._openPopupWithForm(e,t)})),r._childrenContainrer.append(n)}))}},{key:"_setEventListeners",value:function(){var e=this;this._backButton.addEventListener("click",(function(){e.close()}))}},{key:"deleteChildren",value:function(){for(;this._childrenContainrer.firstChild;)this._childrenContainrer.removeChild(this._childrenContainrer.firstChild)}}])&&n(t.prototype,r),e}();function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(t,r,n,o,i){var s=i.createSubcategoryPopup;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._categoryTemplateSelector=o,this._name=t,this._src=r,this._subcategories=n,this._createSubcategoryPopup=s}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._categoryTemplateSelector).content.children[0].cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.addEventListener("click",(function(){e._createSubcategoryPopup()}))}},{key:"createCategory",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".problem__image"),this._elementImage.src=this._src,this._elementImage.alt=this._name,this._element.id=this._id,this._element.querySelector(".problem__name").textContent=this._name,this._setEventListeners(),this._element}}])&&i(t.prototype,r),e}(),a=[{name:"Соседи",src:r(931),subcategories:[{name:"Шумят",poems:["Соседи наверху.<br>Опять чего-то сверлят.<br>Ребёнок, хоть и мал.<br>А топает, как слон!<br><br>Уже до беспредела<br>Натянуты все нервы!<br>Давно пробило полночь,<br>А шум со всех сторон!<br><br>Соседи справа что?<br>Пирушку затевают?<br>И будут хором петь<br>До самого утра!<br><br>Смотрели б в календарь!<br>Наверное не знают,<br>Что завтра не суббота,<br>А всё-таки среда!","Эй, соседи, бейте больше<br>В стены, в бубен, в барабан!<br>Аккомпанемент хороший<br>К песне, что поёт мой кран!"]},{name:"Плохие",poems:["У нас с соседом нелады,<br>Живем с соседом плохо.<br>В любое время жди беды,<br>Нежданного подвоха.<br><br>Белье развешу &mdash; как на грех,<br>Сосед золу выносит,<br>Сгребу ли я к забору снег &mdash;<br>Он по двору разбросит.</p><p>Муса Джалиль","Зимою всем семейством заболели,<br>Никто еды им не принес к постели.<br>Когда же дом случайно подожгли &ndash;<br>Тушить его соседи не пришли.<br><br>Кто попусту соседей раздражает,<br>Себя в час трудный помощи лишает.<br>И лишь дурак уверен, что беда<br>К нему не постучится никогда.<br><br>&copy; Автор. Олеся Емельянова. 2007 г.","Был мой сосед,<br>И, если в рай пошёл он,<br>Хочу я в ад,<br>Коль райский сад<br>Таких соседей полон.<br><br>перевод С.Я. Маршак<br>Роберт Бёрнс"]},{name:"Бесконечный ремонт",poems:["У соседей был ремонт две недели,<br>Две недели словно годы летели!<br>У соседей был ремонт две недели,<br>Молотки стучали, дрели гремели.<br>У соседей был ремонт две недели,<br>Две недели в доме стены гудели!<br>Бесконечный ремонт, и так каждый год..."]},{name:"Пьянчуги",poems:['Плевать - соседи выбили два зуба.<br>Скажи еще спасибо, что живой.<br>Да ладно - ну, уснул вчера в опилках.<br>Да ладно - в челюсть врезали ногой.<br>Да ладно - потащили на носилках.<br>Скажи еще спасибо, что живой.<br>Да, правда - тот, кто хочет, тот и может.<br>Да, правда - сам виновен, бог со мной!<br>Да, правда. Но одно меня тревожит -<br>Кому сказать "спасибо, что живой?"<br><br>Владимир Высоцкий',"Там за стеной, за стеночкою, за перегородочкой<br>Соседушка с соседушкою баловались водочкой.<br><br>Владимир Высоцкий","И кошусь на соседа-урода,—<br>Проклятый! Пьет пятую кружку!Саша Черный","Спать мешает до утра<br>Пьяное соседство.<br>Незабвенная пора,<br>Золотое детство!Демьян Бедный"]}]},{name:"ЖКХ",src:r(186),subcategories:[{name:"Отопление",poems:["Какая холодная осень!<br>        Надень свою шаль и капот.<br>        Смотри: из-за дремлющих сосен<br>        Как будто пожар восстает.<br>        Сияние северной ночи<br>        Я помню всегда близ тебя,<br>        И светят фосфорные очи,<br>        Да только не греют меня.<br>        <br>Афанасий Фет","dsdsd","ewwew"]},{name:"Освещение",poems:["Кто ответит мне &mdash;<br>Что за дом такой,<br>Почему во тьме,<br>Как барак чумной?<br>Свет лампад погас,<br>Воздух вылился&hellip;<br>Али жить у вас<br>Разучилися?<br><br>Владимир Высоцкий","Двор, как ямы мрачной дно,<br>За окном глухого склепа<br>И зловеще и темно.<br><br>Николай Клюев"]},{name:"Вода",poems:["На войне, в пыли походной,<br>В летний зной и в холода,<br>Лучше нет простой, природной<br>Из колодца, из пруда,<br>Из трубы водопроводной,<br>Из копытного следа,<br>Из реки, какой угодно,<br>Из ручья, из-подо льда,<br>- Лучше нет воды холодной,<br>Лишь вода была б &mdash; вода."]},{name:"Грязно",poems:["И вот вдоль тротуара мчится<br>Ручей, его вода грязна,<br>Он - знак для жителей столицы,<br>Что где-то в эти дни весна.<br><br>Владимир Солоухин","В прихожей пахнет капустой и мазью лыжной.<br>                Ты написал много букв; еще одна будет лишней.<br>                <br>                Иосиф Бродский"]},{name:"Нужен ремонт",poems:["Наш старый дом<br>встречает новый день,<br>лукаво сдвинув крышу набекрень,<br>подмигивая солнечным стеклом,<br>не зная, что назначен он на слом<br><br>Николай Огарев","Весь дом одряхлел и заглох,<br>На стенах, на крышах, на ставнях<br>Уже пробивается мох.<br><br>Дмитрий Кедрин","Душа — такой чудесный луг,<br>              где есть зима и лето,<br>              но коммунальных нет услуг,<br>              а также туалета.<br>              <br>              Юнна Мориц"]}]},{name:"Дураки",src:r(855),subcategories:[{name:"Ну дураки и дураки",poems:[""]}]},{name:"Дороги",src:r(480),subcategories:[{name:"Снег",poems:["Заметает пурга<br>Белый путь,<br>Хочет в мягких снегах<br>Потонуть.<br>Ветер резвый уснул<br>На пути;<br>Ни проехать в лесу,<br>Ни пройти.<br><br>Сергей Есенин"]},{name:"Ямы",poems:["С утра садимся мы в телегу;<br>Мы рады голову сломать<br>И, презирая лень и негу,<br>Кричим: пошел! Еб*на мать!<br><br>Александр Пушкин","Она терниста, нелегка,<br>              Есть тупики и повороты.<br>              Она, как жизнь, порой резка:<br>              Удар, паденье, ямы, взлёты…<br>              <br>              Мы выбираем для себя<br>              Дорогу иногда кривую,<br>              Она направит нас, любя.<br>              Свернёт на колею прямую.<br>              <br>              Лаврова Татьяна"]},{name:"Пробки",poems:["Возле Каменного моста,<br>Где течет Москва-река,<br>Возле Каменного моста<br>Стала улица узка.<br>Там на улице заторы,<br>Там волнуются шоферы.<br>&mdash; Ох,&mdash; вздыхает постовой,<br>Дом мешает угловой!<br><br>Агния Барто"]},{name:"Общественный транспорт",poems:["Когда состаришься - ходи<br>По улице пешком.<br>Не лезь в автобус, все равно<br>Стоять придется там.<br>И нынче мало дураков,<br>Чтоб место уступать,<br>А к тем далеким временам<br>Не станет их совсем.<br><br>Григорий Остер"]}]},{name:"Бедствия",src:r(354),subcategories:[{name:"Мне плохо",poems:["Друг мой, друг мой,<br>Я очень и очень болен.<br>Сам не знаю, откуда взялась эта боль.<br>То ли ветер свистит<br>Над пустым и безлюдным полем,<br>То ль, как рощу в сентябрь,<br>Осыпает мозги алкоголь.<br><br>Сергей Есенин"]},{name:"Другому плохо",poems:["И если умирает человек,<br>с ним умирает первый его снег,<br>и первый поцелуй, и первый бой&hellip;<br>Все это забирает он с собой.<br><br>Евгений Евтушенко","Если друг твой самый лучший<br>                Поскользнулся и упал,<br>                Покажи на друга пальцем<br>                И хватайся за живот.<br>                Пусть он видит, лежа в луже,<br>                Ты ничуть не огорчен –<br>                Настоящий друг не любит<br>                Огорчать своих друзей.<br>                <br>                Григорий Остер"]},{name:"Пожар",poems:["Огонь же &mdash; рвется от земли,<br>от Зла, Добра и прочей швали,<br>почти всегда по вертикали,<br>как это мы узнать могли.<br><br>Иосиф Бродский","Что за дым над головой? <br />Что за гром по мостовой? <br />Дом пылает за углом, <br />Сто зевак стоят кругом. <br />Ставит лестницы команда, <br />От огня спасает дом. <br />Весь чердак уже в огне, <br />Бьются голуби в окне.<br><br>Сергей Михалков","И если видел он пожар,<br>                Плывущий дым угарный,<br>                Он поднимал сигнальный шар<br>                Над каланчой пожарной.<br>                И два шара, и три шара<br>                Взвивались вверх, бывало.<br>                И вот с пожарного двора<br>                Команда выезжала.<br>                <br>                Самуил Маршак","Эй, пожарная бригада, <br>                Поторапливаться надо! <br>                Запрягайте десять пар.<br>                Едем, едем на пожар.<br>                Поскорей, без проволочки,<br>                Наливайте воду в бочки. <br>                Тили-тили-тили-бом! <br>                Загорелся кошкин дом!<br>                Стой, свинья! Постой, коза!<br>                Что таращите глаза? <br>                Воду ведрами носите.<br>                <br>Самуил Маршак"]},{name:"Потоп",poems:["Ну и дождь! Потоп кругом!<br>Барабанит в небе гром.<br>Спрятаться куда бы?<br>До чего же ливень зол!<br><br>Фридрих Шиллер","Сколько сору прибило к березам<br>Разыгравшейся полой водой!<br>Трактора, волокуши с навозом,<br>Жеребята с проезжим обозом,<br>Гуси, лошади, шар золотой,<br>Яркий шар восходящего солнца,<br>Куры, свиньи, коровы, грачи,<br>Горький пьяница с новым червонцем<br>У прилавка<br>и куст под оконцем -<br>Все купается, тонет, смеется,<br>Пробираясь в воде и в грязи!<br><br>Николай Рубцов","Ледоходов больше нет,<br>Но извечны половодья!<br><br>Леонид Мартынов","Вокруг вода, одна вода —<br>                Когда, откуда и куда.<br>                Пришла негаданно беда —<br>                В пучине сгинуть навсегда.<br>                <br>                Вода шальною бьет волной,<br>                Волна сюда идет войной.<br>                Не видно шлюпки ни одной.<br>                В потоп счастливее был Ной.<br>                <br>                И бесконечен водный путь.<br>                До берега не дотянуть.<br>                Вокруг одна сырая жуть —<br>                И так не хочется тонуть.<br>                <br>                Панченко С.","Дождь — компаньон гробовщика —<br>                Льет не переставая.<br>                Вот-вот разбухшая река<br>                Рванется, все сметая.<br>                <br>                И, как назло, закрыты все<br>                Прибрежные кафешки…<br>                Ты пьян, ты — в черной полосе,<br>                Скорей вставай, не мешкай!<br>                <br>                Беги к домам и барабань<br>                В ворота, в окна, в двери —<br>                Предупреди, что дело — дрянь,<br>                Не избежать потери…<br>                Взбесившийся водоворот<br>                Накроет город сонный —<br>                Никто, поверьте, не уйдет<br>                Из катастрофы зоны!"]},{name:"Ураган",poems:["От недуга, от могилы,<br>В бурю, в грозный ураган,<br>Головы твоей, мой милый,<br>Не спасет мой талисман.<br><br>Александр Пушкин"]},{name:"Пропал без вести",poems:["Потерявшийся ребенок<br>                Должен помнить, что его<br>                Отведут домой, как только<br>                Назовет он адрес свой.<br>                Надо действовать умнее,<br>                Говорите: «Я живу<br>                Возле пальмы с обезьяной<br>                На Гавайских островах».<br>                Потерявшийся ребенок,<br>                Если он не дурачок,<br>                Не упустит верный случай<br>                В дальних странах побывать!<br>                <br>                Григорий Остер"]}]},{name:"Экология",src:r(121),subcategories:[{name:"Пропали птицы",poems:["Ласточки пропали,<br>А вчера зарёй<br>Всё грачи летали<br>Да, как сеть, мелькали<br>Вон над той горой.<br><br>Афанасий Фет"]},{name:"Загрязнения",poems:["Мне плевать на выбросы и вбросы<br>                Несусветно пахнущих АХОВ,<br>                К Д.И. Менделееву вопросы <br>                Все давно закрыты на засов.<br>                И пускай в меня вдувает с ветром<br>                Химия соляной кислотой,<br>                Укрываться – чепуха и ретро,<br>                Стиль не современный и не мой."]},{name:"Вырубают леса",poems:[""]}]},{name:"Цены и налоги",src:r(95),subcategories:[{name:"Рост цен",poems:["И с нашей публики меж тем<br>Бери умеренную плату,<br>За книжку по пяти рублей -<br>Налог не тягостный, ей-ей.<br><br>Александр Пушкин","Когда народу не хватало хлеба,<br>А юнкер цены был удвоить рад,<br>Я правдолюбцам объяснял без гнева:<br>Хороший хлеб, хотя дороговат.<br><br>Бертольт Брехт"]},{name:"Налоги",poems:["Нас поборами царь<br>Иссушил, как сухарь:<br>То дороги,<br>То налоги,<br>Разорили нас вконец.<br><br>Кондратий Рылеев"]}]},{name:"Гос. структуры",src:r(765),subcategories:[{name:"Медицина",poems:["Минздрав нас вечно убеждает,<br>                Что надо быть всегда в строю,<br>                Пожарный лишь предупреждает:<br>                Огонь опасен, мать твою!"]},{name:"Образование",poems:["Черный человек<br>                Водит пальцем по мерзкой книге<br>                И, гнусавя надо мной,<br>                Как над усопшим монах,<br>                Читает мне жизнь<br>                Какого-то прохвоста и забулдыги,<br>                Нагоняя на душу тоску и страх.<br>                Черный человек<br>                Черный, черный…<br>                <br>                «Слушай, слушай,-<br>                Бормочет он мне,-<br>                В книге много прекраснейших<br>                Мыслей и планов.<br>                Этот человек<br>                Проживал в стране<br>                Самых отвратительных<br>                Громил и шарлатанов.<br>                <br>Сергей Есенин"]},{name:"Бюрократия",poems:["Я волком бы<br>выгрыз<br>бюрократизм.<br>К мандатам<br>почтения нету.<br>К любым<br>чертям с матерями<br>катись<br>любая бумажка.<br><br>Владимир Маяковский"]},{name:"Взятки",poems:['Размышлял - за что ж России<br>                Выпала такая масть?<br>                А потом вдруг осенило -<br>                "Власть" рифмуется и "красть".',"«У каждого – своя дорога!<br>                Она ему дана от Бога!»<br>                Инспектор думал, отложив радар,<br>                Деля с напарником сегодняшний навар.<br>                <br>                Олег Петров<br>                ","Поздравляю с Днём ГАИ<br>                Каждого водителя:<br>                Профи, дальнобойщика и автолюбителя!<br>                Вам желаю от души:<br>                Редких встреч с нашим ГАИ!"]}]}],c=r(200),u=r(197),b=r(816),p=r(253),l=r(579),_=r(311),h=r(17),m=r(316);function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateSelector=document.querySelector(t),this._data=r,this._opened=!1}var t,r;return t=e,(r=[{key:"_imageCondition",value:function(e){var t="";switch(e){case"Соседи":t=p;break;case"ЖКХ":t=c;break;case"Дураки":t=h;break;case"Дороги":t=b;break;case"Бедствия":t=_;break;case"Экология":t=m;break;case"Цены и налоги":t=u;break;case"Гос. структуры":t=l;break;default:t=c}return t}},{key:"_getTemplate",value:function(){return this._templateSelector.content.cloneNode(!0)}},{key:"_setEventListeners",value:function(e,t,r){var n=this,o=e.querySelector(".claim__open-button"),i=e.querySelector(".claim__verse");o.addEventListener("click",(function(){return 0==n._opened?(o.style.transform="rotate(0deg)",i.innerHTML=t.poems,n._opened=!0):(o.style.transform="rotate(180deg)",i.innerHTML=r[0],n._opened=!1),n._opened}))}},{key:"createClaimElement",value:function(){return this._element=this._getTemplate(),this._poemsArray=this._data.poems.split("<br>"),this._poemView=this._element.querySelector(".claim__verse"),this._poemView.innerHTML=this._poemsArray[0],this._element.querySelector(".claim__cathegory").textContent="".concat(this._data.applicant,","),this._element.querySelector(".claim__city").innerHTML=this._data.location,this._element.querySelector(".claim__id").src=this._imageCondition(this._data.type),this._setEventListeners(this._element,this._data,this._poemsArray),this._element}}])&&d(t.prototype,r),e}();function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y=function(){function e(t){var r=t.baseUrl,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseURL=r,this._headers=n}var t,r;return t=e,(r=[{key:"_checkResStatus",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getNews",value:function(){var e=this;return fetch("".concat(this._baseURL,"/newslists"),{headers:this._headers}).then((function(t){return e._checkResStatus(t)}))}},{key:"getClaims",value:function(){var e=this;return fetch("".concat(this._baseURL,"/claims"),{headers:this._headers}).then((function(t){return e._checkResStatus(t)}))}},{key:"getAllInitialData",value:function(){return Promise.all([this.getNews(),this.getClaims()])}},{key:"postNewClaim",value:function(e){var t=this;return fetch("".concat(this._baseURL,"/claims"),{method:"POST",headers:this._headers,body:JSON.stringify({applicant:e.name,location:e.location,poems:e.poems,author:e.author,type:e.type,checked:e.checked})}).then((function(e){return t._checkResStatus(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseURL,"/news/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResStatus(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseURL,"/news/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResStatus(e)}))}}])&&v(t.prototype,r),e}(),g=r(959),k=r(340),S=r(107),E=r(410);function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var x=function(){function e(t,r){var n=r.submitForm,o=r.hideErrors,i=r.closeAllPopup;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._submitForm=n,this._hideErrors=o,this._closeAllPopup=i,this._form=this._popup.querySelector(".popup__form"),this._inputList=this._form.querySelectorAll(".popup__input"),this._backButton=this._popup.querySelector(".popup__wrapper_result"),this._backToMainPageButton=this._popup.querySelector(".popup__go-to-main-button"),this._submitButton=this._popup.querySelector(".popup__submit-button"),this._checkbox=this._popup.querySelector(".popup__checkbox"),this._poem=this._form.querySelector(".popup__text"),this._popupTextSwitch=this._form.querySelector(" .popup__text_switch"),this._prevPoemButton=this._form.querySelector(".popup__poem-button_prev"),this._nextPoemButton=this._form.querySelector(".popup__poem-button_next"),this.count=0,this._setNextPoem=this.setNewPoem.bind(this),this._setPrevPoem=this.setPrevPoem.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(e,t){this._item=e,this._poems=this._item.poems,this._inputList.forEach((function(e){e.classList.add("popup__input_initial")})),this._submitButton.classList.add("popup__submit-button_inactive"),this._checkedPoemsLength(this._poems),this._setPoem(e.poems,this.count),this._popup.classList.add("popup_opened"),this.setEventListeners(this._item.poems,t)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._nextPoemButton.removeEventListener("click",this._setNextPoem),this._prevPoemButton.removeEventListener("click",this._setPrevPoem),this._popupTextSwitch.classList.remove("popup__text_switch_inactive"),this.count=0,this._form.reset()}},{key:"_checkedPoemsLength",value:function(e){e.length<=1?(this._disableNextButton(),this._disablePrevButton(),this._popupTextSwitch.classList.add("popup__text_switch_inactive")):(this._disablePrevButton(),this._enableNextButton())}},{key:"_setPoem",value:function(e,t){this._poem.innerHTML=e[t]}},{key:"_disablePrevButton",value:function(){this._prevPoemButton.disabled=!0,this._prevPoemButton.querySelector(".popup__poem-button-icon").src=k}},{key:"_disableNextButton",value:function(){this._nextPoemButton.disabled=!0,this._nextPoemButton.querySelector(".popup__poem-button-icon").src=g}},{key:"_enablePrevButton",value:function(){this._prevPoemButton.disabled=!1,this._prevPoemButton.querySelector(".popup__poem-button-icon").src=E}},{key:"_enableNextButton",value:function(){this._nextPoemButton.disabled=!1,this._nextPoemButton.querySelector(".popup__poem-button-icon").src=S}},{key:"_isChecked",value:function(){return this._checkbox.checked?"checked":"none"}},{key:"_getInputValues",value:function(e,t){var r=this,n=e,o=t;return this._formValues={},this._inputList.forEach((function(e){return r._formValues[e.name]=e.value})),this._formValues.poems=o[this.count],this._formValues.type=n.name,this._formValues.checked=this._isChecked(),this._formValues}},{key:"setNewPoem",value:function(){this._poems.length>this.count&&this._poems.length>this.count+2?(this._enablePrevButton(),this._setPoem(this._poems,this.count+1)):(this._setPoem(this._poems,this.count+1),this._enablePrevButton(),this._disableNextButton()),this._setPoem(this._poems,this.count+1),this.count=this.count+1}},{key:"setPrevPoem",value:function(){this.count<=1?(this._setPoem(this._poems,this.count-1),this._disablePrevButton(),this._enableNextButton()):(this._setPoem(this._poems,this.count-1),this._enableNextButton()),this.count=this.count-1}},{key:"setEventListeners",value:function(e){var t=this;this._backButton.addEventListener("click",(function(){t._form.reset(),t.close(),t._inputList.forEach((function(e){t._hideErrors(e)}))})),this._backToMainPageButton.addEventListener("click",(function(){t._closeAllPopup(),t._form.reset(),t._inputList.forEach((function(e){t._hideErrors(e)}))})),this._form.addEventListener("submit",(function(r){r.preventDefault(),t._submitForm(t._getInputValues(e,t._poems)),t._form.reset(),t._inputList.forEach((function(e){t._hideErrors(e)}))})),this._nextPoemButton.addEventListener("click",this._setNextPoem),this._prevPoemButton.addEventListener("click",this._setPrevPoem)}}])&&L(t.prototype,r),e}(),P=r(857),q=r(348),w=r(518),C=document.querySelector(".popup_cookies"),B=new y({baseUrl:"https://civil-poetry-app.herokuapp.com",headers:{"Content-Type":"application/json"}}),T=document.querySelector(".popular__button"),N=document.querySelector(".popular__more"),I=new t(".popup__form"),A=document.querySelector(".popup_submit-success"),V=document.querySelectorAll(".popup"),j=document.querySelector(".popup__link"),R=document.querySelector(".claim-list"),F=document.querySelector(".problems-list__wrapper"),U=document.querySelector(".hello__arrow-bottom"),M=document.querySelector(".problems-list"),O=document.querySelectorAll(".ticker"),H=document.querySelector(".popup_news"),W=H.querySelector(".button"),D=document.querySelector(".card-list");sessionStorage.getItem("id")||(sessionStorage.setItem("id","_"+Math.random().toString(36).substr(2,9)),C.classList.add("popup_opened")),I.enableValidation(),j.addEventListener("click",(function(){V.forEach((function(e){G(e)}))}));var J,z=new x(".popup_result",{submitForm:function(e){!function(e){B.postNewClaim(e).then((function(e){if("checked"===e.checked){var t=new f(".claim-template",e);R.prepend(t.createClaimElement())}A.classList.add("popup_opened")})).catch((function(e){return console.log(e)}))}(e),K.deleteChildren()},hideErrors:function(e){I.hideInputError(e)},closeAllPopup:function(){K.close(),z.close()}});J=R,B.getClaims().then((function(e){var t=e.filter((function(e){return"checked"===e.checked})),r=t.length-3,n=t.length;t.slice(r,n).forEach((function(e){var t=new f(".claim-template",e);J.prepend(t.createClaimElement())})),T.addEventListener("click",(function(){r<=0?N.textContent="Всё!":(t.slice(r-3,n-3).reverse().forEach((function(e){var t=new f(".claim-template",e);J.append(t.createClaimElement())})),r-=3,n-=3)}))})).catch((function(e){return console.log(e)})),O.forEach((function(e){!function(e,t,r){var n=e,o=n.querySelector(".ticker__line"),i=o.offsetWidth,s=o.cloneNode(!0);n.appendChild(s);var a,c,u=performance.now();requestAnimationFrame((function e(t){(a=(t-u)/1e4)>1&&(a%=1,u=t),c=i*a,o.style.transform="translate(-".concat(c,"px, 0 )"),s.style.transform="translate(-".concat(c,"px, 0 )"),requestAnimationFrame(e)}))}(e)})),U.addEventListener("click",(function(){M.scrollIntoView()}));var G=function(e){e.classList.remove("popup_opened")};B.getNews().then((function(e){Array.from(e).forEach((function(e){var r=function(e,t){var r=document.querySelector(".card-template").content.cloneNode(!0);return r.querySelector(".card__heading").textContent=e.title,r.querySelector(".card__city").textContent=e.city,r}(e),n=r.querySelector(".card");n.style.backgroundImage="linear-gradient(1turn,#191919,#000 .01%,hsla(0,0%,62%,0) 82.21%),\n    url(".concat(e.link,")"),n.addEventListener("click",(function(r){r.target.classList.contains("card")&&(t(e),H.classList.add("popup_opened"))}));var o=r.querySelector(".card__like-button"),i=r.querySelector(".card__like-counter").textContent;o.addEventListener("click",(function(){o.classList.toggle("card__like-button_active"),i=o.classList.contains("card__like-button_active")?Number(i)+1:Number(i)-1,r.querySelector(".card__like-counter").textContent=i})),D.append(r)})),W.addEventListener("click",(function(){H.classList.remove("popup_opened")}));var t=function(e){var t=H.querySelector(".popup__heading"),r=H.querySelector(".popup__news-info"),n=H.querySelector(".popup__news-city");t.textContent=e.title,r.textContent=e.description,n.textContent=e.city,function(e){var t=H.querySelector(".popup__news-image");"5fe38d0d1b8497bea49b2772"==e.id?t.src=P:"5fe38dac1b8497bea49b2773"==e.id?t.src=q:"5fe38dda1b8497bea49b2774"==e.id&&(t.src=w)}(e)}})).catch((function(e){return console.log(e)}));var K=new o(".popup_subcategories",{openPopupWithForm:function(e,t){z.open(e,t)}});a.forEach((function(e){var t=new s(e.name,e.src,e.subcategories,".problem-template",{createSubcategoryPopup:function(){var t;t=e,K.updatePopup(t)}});F.append(t.createCategory())})),C.querySelector(".popup__go-button").addEventListener("click",(function(){G(C)}))})()})();