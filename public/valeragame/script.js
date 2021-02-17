let Valera = {  
    "hp": 100,
    "mp": 0,
    "fun": 5,
    "fatigue": 0,
    "money": 20
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

window.onload = function(){
    //main();
    console.log("hello")
}

class Info{
    clear(){
        PrintToInfo(`<b><br>Тут отображается подробная информация<br>о ваших действиях</b>`);
        PrintToInfoStat("")
    }

    goWork(){       
      PrintToInfo(`<b><br>С таким образом жизни никогда не удастся устроиться на нормальную работу<br>
          <br>Но eсли вы не болеете с утра </b><i>(MP <= 50)</i><b> и не успели устать </b><i>(Усталость <= 10)</i><b>, то эта работа точно для вас!</b>`);
      PrintToInfoStat(`<i>
                        <br>MP: -30
                        <br>Жизнерадостность: -5
                        <br>Усталость: +70
                        <br> КЭШ: +100$
                      </i>`);
    }

    chill(){
      PrintToInfo(`<b><br>Как же здорово прогуляться по парку, главное обходить стороной людей в плаще</b>`);
      PrintToInfoStat(`<i>
                          <br>MP: -10
                          <br>Жизнерадостность: +1
                          <br>Усталость: +10
                      </i>`);
    }

    drink_vine(){
      PrintToInfo(`<b><br>Если вы подкопили немного бабок <br></b><i>(КЭШ >= 20)</i><b>, можете позволить себе посмотреть сериальчик под вино, как ванильная тян</b>`);
      PrintToInfoStat(`<i>
                        <br>HP: -5
                        <br>MP: +30
                        <br>Жизнерадостность: -1
                        <br>Усталость: +10
                        <br> КЭШ: -20$
                      </i>`);
    }

    drink_in_bar(){
      PrintToInfo(`<b><br>Если вы подкопили бабла <br></b><i>(КЭШ >= 100)</i><b>, можете завалиться в бар с корешами</b>`);
      PrintToInfoStat(`<i>
                        <br>HP: -10
                        <br>MP: +60
                        <br>Жизнерадостность: +1
                        <br>Усталость: +40
                        <br> КЭШ: -100$
                      </i>`)
    }
    drink_with_marginal(){
      PrintToInfo(`<b><br>Если вы хотите спустить в унитаз свою жизнь и кучу бабла, которую вы откладывали целый месяц<br></b><i>(КЭШ >= 150)</i><b>, можете нажраться на вписке с такими же маргиналами</b>`);
      PrintToInfoStat(`<i>
                        <br>HP: -80
                        <br>MP: +90
                        <br>Жизнерадостность: +5
                        <br>Усталость: +80
                        <br>КЭШ: -150$
                      </i>`);
    }
    sing_in_metro(){
      PrintToInfo(`<b><br>Ну это уже крайние меры, дальше только просить милостыню возле храма</b>`)
      PrintToInfoStat(`<i>
                        <br>MP: +10
                        <br>Жизнерадостность: +1
                        <br>Усталость: +20
                        <br>КЭШ: +10$
                      </i>
                      <b>
                        <br><br>А если вы достаточно под "шафе" <br></b><i>(MP = 50 или 60)</i><b>, можете получить еще немного кэша</b>
                      <i>
                        <br><br>КЭШ: +50
                      </i>`);             
    }
    play_dota(){
        PrintToInfo(`<b>DOTA - это жизнь!<br>Шанс победы, если вы трезвы - 50%.<br>Если вы один из "подпивасников" </b><i><br>(MP => 50)</i><b>, шанс победы - 70%</b>`);
        PrintToInfoStat(`<b>
                          <br>При победе:
                        </b>
                        <i>
                          <br>Жизнерадостность: +3
                          <br>Усталость: +10
                        </i>
                        <b>
                          <br><br>При поражении:
                        </b>
                        <i>
                          <br>HP: -10 
                          <br>Жизнерадостность: -2
                          <br>Усталость: +10
                        </i>`);
    }
    sleep(){
        PrintToInfo(`<b>Отобрать у бомжа картонку
        <br>Если вы не пили</b><i> (MP < 30) </i><b>, то у вас есть все шансы выстоять против бомжа, но если вы пьяны</b><i> (MP > 70) </i><b>, то бомж не даст вам выспаться</b>`)
        PrintToInfoStat(`<b>
                          <br>Если трезвый:
                        </b>
                        <i>
                          <br>HP: +90
                        </i>
                        <b>
                         <br>Если пьяный:
                        </b>
                        <i>
                          <br>Жизнерадостность: -3
                        </i>
                        <b>
                          <br><br>Всегда:
                        </b>
                        <i>
                          <br>MP: -50
                          <br>Усталость: -70
                        </i>`);

    }
}

class Actions {
    goWork(valerka){
        if (valerka.mp < 50 && valerka.fatigue < 10){
            PrintToLog("<b>Вы поработали и устали</b><i><br>MP: -30<br>Жизнерадостность: -5<br>Усталость: +70<br> КЭШ: +100$</i>")
            valerka.mp -= 30;
            valerka.fun -= 5;
            valerka.fatigue += 70;
            valerka.money += 100;
        }    
        else if (valerka.mp >= 50 && valerka.fatigue >= 10)
            PrintToLog("<b>Действие недоступно: вы пьяны и устали</b>")
        else if (valerka.mp >= 50)
            PrintToLog("<b>Действие недоступно: вы пьяны</b>")
        else if(valerka.fatigue >= 10)
            PrintToLog("<b>Действие недоступно: вы устали</b>")
        return valerka;
    }
    chill(valerka){
        valerka.mp -= 10;
        valerka.fun += 1;
        valerka.fatigue += 10;
        PrintToLog("<b>Вы едины с природой</b><i><br>MP: -10<br>Жизнерадостность: +1<br>Усталость: +10</i>")
        return valerka;
    }
    drink_vine(valerka){
        if (valerka.money < 20){
            
            PrintToLog("<b>Действие недоступно: у вас недостаточно $</b>")
        }
        else{
            valerka.hp -= 5;
            valerka.mp += 30;
            valerka.fun -= 1;
            valerka.fatigue += 10;
            valerka.money -= 20;
            PrintToLog("<b>Сериал был хорош</b><i><br>HP: -5<br>MP: +30<br>Жизнерадостность: -1<br>Усталость: +10<br> КЭШ: -20$</i>")
        }
        return valerka;
    }
    drink_in_bar(valerka){
        if (valerka.money < 100){
            
            PrintToLog("<b>Действие недоступно: у вас недостаточно $</b>")
        }else{
            valerka.hp -= 10;
            valerka.mp += 60;
            valerka.fun += 1;
            valerka.fatigue += 40;
            valerka.money -= 100;
            PrintToLog("<b>Вы напились в баре</b><i><br>HP: -10<br>MP: +60<br>Жизнерадостность: +1<br>Усталость: +40<br> КЭШ: -100$</i>")
        }
        
        return valerka;
    }
    drink_with_marginal(valerka){
        if (valerka.money < 150){
            PrintToLog("<b>Действие недоступно: у вас недостаточно $</b>")
        }else{
            valerka.hp -= 80;
            valerka.mp += 90;
            valerka.fun += 5;
            valerka.fatigue += 80;
            valerka.money -= 150;
            PrintToLog("<b>Вы напились в компании маргинальных личностей</b><i><br>HP: -80<br>MP: +90<br>Жизнерадостность: +5<br>Усталость: +80<br>КЭШ: -150$</i>")
        }
        return valerka;
    }
    sing_in_metro(valerka){
        PrintToLog("<b>Вы спели в метро</b><i><br>HP: -5<br>MP: +10<br>Жизнерадостность: +1<br>Усталость: +20<br> КЭШ: +10$</i>")
        valerka.mp += 10;
        valerka.fun += 1;
        valerka.fatigue += 20;
        valerka.money += 10;
        if (valerka.mp > 40 && valerka.mp < 70){
            valerka.money += 50;
            PrintToLog("<b>Вы отлично выступили в метро и вам подкинули $</b><i><br>КЭШ: +50$</i>")
        }
        return valerka
    }
    
    play_dota(valerka){
        var chance = getRandomInt(100);
        if (valerka.mp >= 50)
            chance += 20;
        if (chance > 50){
            PrintToLog("<b>Вы тащили в соло всю команду и победили</b><i><br>Жизнерадостность: +3<br>Усталость: +10<br></i>")
          valerka.fun += 3
          valerka.fatigue += 10
        }
        else{
            PrintToLog("<b>Команда раков, фидят по миду! GGWP. В этот раз вам не удалось одержать верх.</b><i><br>HP: -10<br>Жизнерадостность: -2<br>Усталость: +10</i>")
          valerka.hp -= 10
          valerka.fun -= 2
          valerka.fatigue += 10
        }
        return valerka
    }

    sleep(valerka){
        PrintToLog("<b>Вы поспали</b>")
        if (valerka.mp < 30){
          valerka.hp += 90
          PrintToLog("<b>Чуствуете прилив сил</b><i><br>HP: 90<br>MP: -50<br>Усталость: -70</i>")
        }
        if (valerka.mp > 70){
          valerka.fun -= 3
          PrintToLog("<b>Как живой, но не живой</b><i><br>MP: -50<br>Жизнерадостность: -3<br>Усталость: -70</i>")
        }
        valerka.mp -= 50
        valerka.fatigue -= 70


        return valerka
    }
}


function PrintToInfo(text){
    var info = document.getElementById('info_table');
    info.innerHTML = `${text}`
}
function PrintToInfoStat(text){
    var info = document.getElementById('info_stat_table');
    info.innerHTML = `${text}`
}
function PrintToLog(text){
    var log = document.getElementById('log_table');
    log.innerHTML += `<tr><td>${text}</td></tr>`
}

function main(){
    console.log("DAROVA");
    var doomguy = document.getElementById('doomguy');
    var body = document.getElementById('body');
    var head = document.getElementById('head');
    head.innerHTML = `<link href="valeragame/style.css" rel="stylesheet" type="text/css" />`;
    
    var menu = document.getElementById('menu');
    var save = document.getElementById('save');
    
    var work = document.getElementById('work');
    var chill = document.getElementById('chill');
    var drink_vine = document.getElementById('drink_vine');
    var drink_in_bar = document.getElementById('drink_in_bar');
    var drink_with_marginal = document.getElementById('drink_with_marginal');
    var sing_in_metro = document.getElementById('sing_in_metro');
    var play_dota = document.getElementById('play_dota');
    var sleep = document.getElementById('sleep');
    var stat_hp = document.getElementById('stat_hp');
    var stat_mp = document.getElementById('stat_mp');
    var stat_fun = document.getElementById('stat_fun');
    var stat_fatigue = document.getElementById('stat_fatigue');
    var stat_money = document.getElementById('stat_money');

    let action = new Actions;
    let info = new Info;

    var dotka_played = 0; 

    var stat = Valera;
    Engine();

    work.onclick = function() {
        stat = action.goWork(Valera);
        Engine();
    }
    chill.onclick = function() {
        stat = action.chill(Valera);
        Engine();
    }
    drink_vine.onclick = function() {
        stat = action.drink_vine(Valera);
        Engine();
    }
    drink_in_bar.onclick = function() {
        stat = action.drink_in_bar(Valera);
        Engine();
    }
    drink_with_marginal.onclick = function() {
        stat = action.drink_with_marginal(Valera);
        Engine();
    }
    sing_in_metro.onclick = function() {
        stat = action.sing_in_metro(Valera);
        Engine();
    }
    play_dota.onclick = function() {
        stat = action.play_dota(Valera);
        Engine();
        dotka_played++; 
    }
    sleep.onclick = function() {
        stat = action.sleep(Valera);
        Engine();
    }

//Заполнение поля INFO
    work.onmouseover = function() {
        info.goWork();
    }
    chill.onmouseover = function() {
        info.chill();
    }
    drink_vine.onmouseover = function() {
        info.drink_vine();
    }

    drink_in_bar.onmouseover = function() {
        info.drink_in_bar();
    }
    drink_with_marginal.onmouseover = function() {
        info.drink_with_marginal();
    }
  
    sing_in_metro.onmouseover = function() {
        info.sing_in_metro();
    }
 
    play_dota.onmouseover = function() {
        info.play_dota();
    }
    
    sleep.onmouseover = function() {
        info.sleep();
    }

//Очистка поля INFO
    work.onmouseout = function(){
        info.clear();
    }
    chill.onmouseout = function(){
        info.clear();
    }
    drink_vine.onmouseout = function(){
        info.clear();
    }
    drink_in_bar.onmouseout = function(){
        info.clear();
    }
    drink_with_marginal.onmouseout = function(){
        info.clear();
    }
    sing_in_metro.onmouseout = function(){
        info.clear();
    }
    play_dota.onmouseout = function(){
        info.clear();
    }
    sleep.onmouseout = function(){
        info.clear();
    }

    function UpdateStat(){
        stat_hp.innerHTML = stat.hp;
        stat_mp.innerHTML = stat.mp;
        stat_fun.innerHTML = stat.fun;
        stat_fatigue.innerHTML = stat.fatigue;
        stat_money.innerHTML = stat.money + "$";
    }
let TiWiner = 0;
    function CheekStat(){
        if (stat.hp > 100) {
            stat.hp = 100
        }
        if (stat.mp < 0) {
            stat.mp = 0
        }
        if (stat.mp > 100) {
            stat.mp = 100;
        }
        if (stat.fun < -10) {
            PrintToLog("<b>Выглядишь как унылое Г<br></b><i>HP: -10</i>")
            stat.hp = stat.hp - 10;
        }
        if (stat.fun > 10) {
            stat.fun = 10;
        }
        if (stat.fatigue < 0) {
            stat.fatigue = 0
        }
        if (stat.fatigue > 100){
            PrintToLog("<b>Вы слишком устали, вам пора поспать<br></b><i>HP: -" + (stat.fatigue - 100) +"</i>")
            stat.hp = stat.hp - (stat.fatigue - 100);
            stat.fatigue = 100;
        }
        
        if (dotka_played >= 100 && TiWiner == 0){
            PrintToLog("<b>Вы победили на THE INTERNATIONAL<br>ВКЛЮЧЕН РЕЖИМ БОГА</b><i><br>КЭШ: 99999(НАВСЕГДА)</i>")
            stat.money = 99999;
            stat.hp = 100;
            stat.mp = 100;
            stat.fun = 10;
            TiWiner = 1
        }
        if (dotka_played >= 100 && TiWiner == 1){
            stat.money = 99999;
            stat.hp = 100;
            stat.mp = 100;
            stat.fun = 10;
        }
        if (stat.hp <= 0){
            body.innerHTML = '<a href="/"><div class="button reload">Выйти в главное меню</div></a>';
            body.style.backgroundImage = "url(valeragame/img/DIED.jpg)";
            //body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "100%";
            console.log("U DIED");
        }
    }

    function Doomguy(){
        if (stat.hp == 100)
            doomguy.innerHTML = '<img src="valeragame/img/normal.png"></img>';
        if (stat.hp <= 90 && stat.hp > 70)
            doomguy.innerHTML = '<img src="valeragame/img/Damaged1.png"></img>';
        if (stat.hp <= 70 && stat.hp > 50)
            doomguy.innerHTML = '<img src="valeragame/img/Damaged2.png"></img>';
        if (stat.hp <= 50 && stat.hp > 30)
            doomguy.innerHTML = '<img src="valeragame/img/Damaged3.png"></img>';
        if (stat.hp <= 30 && stat.hp > 10)
            doomguy.innerHTML = '<img src="valeragame/img/Damaged4.png"></img>';
        if (stat.hp <= 10 && stat.hp >= 5)
            doomguy.innerHTML = '<img src="valeragame/img/Damaged5.png"></img>';
        if (stat.mp >= 100)
            doomguy.innerHTML = '<img src="valeragame/img/Alcohol.png"></img>';
    }

    function Engine(){
        
        CheekStat();
        UpdateStat();
        Doomguy();
        SaveData();
        //console.log(stat);
    }

    function SaveData(){
        var xhr = new XMLHttpRequest();
        
        var body = JSON.stringify(stat); 
        
        xhr.open("PATCH", '/save-stats', true);
        token = $('meta[name=csrf-token]').attr('content');
        xhr.setRequestHeader('X-CSRF-Token', token);
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        //xhr.onreadystatechange = ...;
        
        xhr.send(body);
    }

}