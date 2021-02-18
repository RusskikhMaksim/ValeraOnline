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

var info_table;
var info_stat_table;
var log;

window.onload = function(){
    info_table = document.getElementById('info_table');
    info_stat_table = document.getElementById('info_stat_table');
    log = document.getElementById('log_table');
    main();
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
                        <br>Жизнерадостность: +1
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
                        <br>HP: -5
                        <br>MP: +10
                        <br>Жизнерадостность: +1
                        <br>Усталость: +20
                        <br>КЭШ: +10$
                      </i>
                      <b>
                        <br><br>А если вы достаточно под "шафе" <br></b><i>(MP от 40 до 70)</i><b>, можете получить еще немного кэша</b>
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
        <br>Если вы не пили</b><i> (MP до 30) </i><b>, то у вас есть все шансы выстоять против бомжа, но если вы пьяны</b><i> (MP от 70) </i><b>, то бомж не даст вам выспаться</b>`)
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
            valerka.fun += 1;
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
        valerka.hp -= 5;
        valerka.mp += 10;
        valerka.fun += 1;
        valerka.fatigue += 20;
        valerka.money += 10;
        if (valerka.mp >= 40 && valerka.mp <= 70){
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
        if (valerka.mp >= 70){
          valerka.fun -= 3
          PrintToLog("<b>Как живой, но не живой</b><i><br>MP: -50<br>Жизнерадостность: -3<br>Усталость: -70</i>")
        }
        valerka.mp -= 50
        valerka.fatigue -= 70


        return valerka
    }
}




function PrintToInfo(text){
    info_table.innerHTML = `${text}`
}
function PrintToInfoStat(text){
    info_stat_table.innerHTML = `${text}`
}
function PrintToLog(text){  
    log.innerHTML += `<tr><td>${text}</td></tr>`
}

function main(){


    var doomguy = document.getElementById('doomguy');
    var body = document.getElementById('body');
    
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

//Выполнение действий в игре
    work.onclick = function() {
        stat = action.goWork(stat);
        Engine();
    }
    chill.onclick = function() {
        stat = action.chill(stat);
        Engine();
    }
    drink_vine.onclick = function() {
        stat = action.drink_vine(stat);
        Engine();
    }
    drink_in_bar.onclick = function() {
        stat = action.drink_in_bar(stat);
        Engine();
    }
    drink_with_marginal.onclick = function() {
        stat = action.drink_with_marginal(stat);
        Engine();
    }
    sing_in_metro.onclick = function() {
        stat = action.sing_in_metro(stat);
        Engine();
    }
    play_dota.onclick = function() {
        stat = action.play_dota(stat);
        Engine();
        dotka_played++; 
    }
    sleep.onclick = function() {
        stat = action.sleep(stat);
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
    function CheckStat(){
        if (stat.hp > 100)
            stat.hp = 100
        if (stat.mp < 0)
            stat.mp = 0
        if (stat.mp > 100)
            stat.mp = 100;
        if (stat.fun < -10){
            PrintToLog("<b>Выглядишь как унылое Г<br></b><i>HP: -10</i>")
            stat.hp = stat.hp - 10;
        }
        if (stat.fun > 10)
            stat.fun = 10;
        if (stat.fatigue < 0)
            stat.fatigue = 0
        if (stat.fatigue > 100){
            PrintToLog("<b>Вы слишком устали, вам пора поспать<br></b><i>HP: -" + (stat.fatigue - 100) +"</i>")
            stat.hp = stat.hp - (stat.fatigue - 100);
            //stat.fatigue = 100;
        }
        
        if (dotka_played >= 100){         
            stat.hp = 100;
            stat.mp = 100;
            stat.fun = 10;
            stat.money = 99999;
            if (TiWiner == 0)
                PrintToLog("<b>Вы победили на THE INTERNATIONAL<br>ВКЛЮЧЕН РЕЖИМ БОГА</b><i><br>КЭШ: 99999(НАВСЕГДА)</i>")
            TiWiner = 1
        }
        
        
        
        if (stat.hp <= 0){
            body.innerHTML = '<a href="/"><div class="button reload">Начать заново</div></a>';
            body.style.backgroundImage = "url(valeragame/img/DIED.jpg)";
            //body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "100%";
            //console.log("U DIED");
        }
    }

    function Doomguy(){
        if (stat.hp == 100)
            doomguy.innerHTML = '<img src="valeragame/img/normal.png">';
        if (stat.hp <= 90 && stat.hp > 70)
            doomguy.innerHTML = '<img src="valeragame/img/Damaged1.png">';
        if (stat.hp <= 70 && stat.hp > 50)
            doomguy.innerHTML = '<img src="valeragame/img/Damaged2.png">';
        if (stat.hp <= 50 && stat.hp > 30)
            doomguy.innerHTML = '<img src="valeragame/img/Damaged3.png">';
        if (stat.hp <= 30 && stat.hp > 10)
            doomguy.innerHTML = '<img src="valeragame/img/Damaged4.png">';
        if (stat.hp <= 10 && stat.hp >= 5)
            doomguy.innerHTML = '<img src="valeragame/img/Damaged5.png">';
        if (stat.mp >= 70)
            doomguy.innerHTML = '<img src="valeragame/img/Alcohol.png">';
    }

    function Engine(){
        
        CheckStat();
        Doomguy();
        UpdateStat();
        //console.log(stat);
    }





    var tests = function (){
        let testNum;
        let subtestNum;
        let FailedFlag = 0;
        let TotalTests = 0;
        stat = Valera;

        //Engine tests

        //Test 1 - Function CheckStat:
        testNum = 1;
        subtestNum = 1;

        //Test 1.1
        stat.hp = 110;
        CheckStat();
        if (stat.hp == 100){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed") 
            FailedFlag++;
        }
        subtestNum++;

        //Test 1.2
        stat.mp = 110;
        CheckStat();
        if (stat.mp == 100){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++; 
        }
        subtestNum++;

        //Test 1.3
        stat.mp = -10;
        CheckStat();
        if (stat.mp == 0){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 1.4
        stat.hp = 100;
        stat.fun = -11;
        CheckStat();
        if (stat.hp == 90){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 1.5
        stat.fun = 11;
        CheckStat();
        if (stat.fun == 10){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 1.6
        stat.fatigue = -10;
        CheckStat();
        if (stat.fatigue == 0){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        
        //Test 1.7
        stat.hp = 100;
        stat.fatigue = 110;
        CheckStat();
        if (stat.hp == 90){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 1.8
        dotka_played = 100;
        CheckStat();
        if (stat.hp == 100 && stat.mp == 100 && stat.fun == 10 && stat.money == 99999){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        dotka_played = 0;

        TotalTests += subtestNum;

        //Test 2 - Function Doomguy

        stat = {  
            "hp": 100,
            "mp": 0,
            "fun": 5,
            "fatigue": 0,
            "money": 20
        }
          
        testNum = 2;
        subtestNum = 1;

        
        //Test 2.1

        stat.hp = 100;
        Doomguy();
        if (doomguy.innerHTML == '<img src="valeragame/img/normal.png">'){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 2.2
        stat.hp = 80;
        Doomguy();
        if (doomguy.innerHTML == '<img src="valeragame/img/Damaged1.png">'){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 2.3
        stat.hp = 60;
        Doomguy();
        if (doomguy.innerHTML == '<img src="valeragame/img/Damaged2.png">'){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 2.4
        stat.hp = 40;
        Doomguy();
        if (doomguy.innerHTML == '<img src="valeragame/img/Damaged3.png">'){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 2.5
        stat.hp = 20;
        Doomguy();
        if (doomguy.innerHTML == '<img src="valeragame/img/Damaged4.png">'){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 2.6
        stat.hp = 10;
        Doomguy();
        if (doomguy.innerHTML == '<img src="valeragame/img/Damaged5.png">'){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;


        //Test 2.7
        stat.mp = 80;
        Doomguy();
        if (doomguy.innerHTML == '<img src="valeragame/img/Alcohol.png">'){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }

        TotalTests += subtestNum;

        //Test 3 - Function UpdateStat

        stat = {  
            "hp": 10,
            "mp": 10,
            "fun": 10,
            "fatigue": 10,
            "money": 10
        }
          
        testNum = 3;
        subtestNum = 1;

        UpdateStat();
        
        //Test 3.1
        if (stat_hp.innerHTML == stat.hp){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 3.2
        if (stat_mp.innerHTML == stat.mp){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 3.3
        if (stat_fun.innerHTML == stat.fun){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 3.4
        if (stat_fatigue.innerHTML == stat.fatigue){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 3.5
        if (stat_money.innerHTML == stat.money + "$"){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }

        TotalTests += subtestNum;

        //Test 4 - Print functions check
        
        testNum = 4;
        subtestNum = 1;

        //Test 4.1
        PrintToInfo('Test 4.1');
        if (info_table.innerHTML == 'Test 4.1'){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 4.2
        PrintToInfoStat('Test 4.2');
        if (info_stat_table.innerHTML == 'Test 4.2'){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 4.3
        log.innerHTML = "";
        PrintToLog('Test 4.3');
        if (log.innerHTML == '<tr><td>Test 4.3</td></tr>'){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        
        TotalTests += subtestNum;

        //Test 5 - Actions check

          
        testNum = 5;
        subtestNum = 1;

        //Test 5.1
        stat = {  
            "hp": 100,
            "mp": 30,
            "fun": 5,
            "fatigue": 0,
            "money": 0
        }

        stat = action.goWork(stat);
        if (stat.mp == 0 && stat.fun == 0 && stat.fatigue == 70 && stat.money == 100){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 5.2
        stat = {  
            "hp": 100,
            "mp": 50,
            "fun": 5,
            "fatigue": 0,
            "money": 0
        }

        stat = action.goWork(stat);
        if (stat.mp == 50 && stat.fun == 5 && stat.fatigue == 0 && stat.money == 0){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 5.3
        stat = {  
            "hp": 100,
            "mp": 0,
            "fun": 5,
            "fatigue": 10,
            "money": 0
        }

        stat = action.goWork(stat);
        if (stat.mp == 0 && stat.fun == 5 && stat.fatigue == 10 && stat.money == 0){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 5.4
        stat = {  
            "hp": 100,
            "mp": 10,
            "fun": 0,
            "fatigue": 0,
            "money": 0
        }

        stat = action.chill(stat);
        if (stat.mp == 0 && stat.fun == 1 && stat.fatigue == 10 && stat.money == 0){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 5.5
        stat = {  
            "hp": 100,
            "mp": 0,
            "fun": 0,
            "fatigue": 0,
            "money": 0
        }

        stat = action.drink_vine(stat);
        if (stat.hp == 100 &&stat.mp == 0 && stat.fun == 0 && stat.fatigue == 0 && stat.money == 0){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 5.6
        stat = {  
            "hp": 100,
            "mp": 0,
            "fun": 0,
            "fatigue": 0,
            "money": 20
        }

        stat = action.drink_vine(stat);
        if (stat.hp == 95 && stat.mp == 30 && stat.fun == 1 && stat.fatigue == 10 && stat.money == 0){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        ///Test 5.7
        stat = {  
            "hp": 100,
            "mp": 0,
            "fun": 0,
            "fatigue": 0,
            "money": 0
        }

        stat = action.drink_in_bar(stat);
        if (stat.hp == 100 &&stat.mp == 0 && stat.fun == 0 && stat.fatigue == 0 && stat.money == 0){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 5.8
        stat = {  
            "hp": 100,
            "mp": 0,
            "fun": 0,
            "fatigue": 0,
            "money": 100
        }

        stat = action.drink_in_bar(stat);
        if (stat.hp == 90 && stat.mp == 60 && stat.fun == 1 && stat.fatigue == 40 && stat.money == 0){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        ///Test 5.9
        stat = {  
            "hp": 100,
            "mp": 0,
            "fun": 0,
            "fatigue": 0,
            "money": 0
        }

        stat = action.drink_with_marginal(stat);
        if (stat.hp == 100 &&stat.mp == 0 && stat.fun == 0 && stat.fatigue == 0 && stat.money == 0){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 5.10
        stat = {  
            "hp": 100,
            "mp": 0,
            "fun": 0,
            "fatigue": 0,
            "money": 150
        }

        stat = action.drink_with_marginal(stat);
        if (stat.hp == 20 && stat.mp == 90 && stat.fun == 5 && stat.fatigue == 80 && stat.money == 0){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 5.11
        stat = {  
            "hp": 100,
            "mp": 0,
            "fun": 0,
            "fatigue": 0,
            "money": 0
        }

        stat = action.sing_in_metro(stat);
        if (stat.hp == 95 && stat.mp == 10 && stat.fun == 1 && stat.fatigue == 20 && stat.money == 10){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 5.12
        stat = {  
            "hp": 100,
            "mp": 40,
            "fun": 0,
            "fatigue": 0,
            "money": 0
        }

        stat = action.sing_in_metro(stat);
        if (stat.hp == 95 && stat.mp == 50 && stat.fun == 1 && stat.fatigue == 20 && stat.money == 60){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 5.13
        stat = {  
            "hp": 100,
            "mp": 90,
            "fun": 0,
            "fatigue": 0,
            "money": 0
        }

        stat = action.sing_in_metro(stat);
        if (stat.hp == 95 && stat.mp == 100 && stat.fun == 1 && stat.fatigue == 20 && stat.money == 10){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 5.14
        stat = {  
            "hp": 100,
            "mp": 0,
            "fun": 0,
            "fatigue": 0,
            "money": 0
        }

        stat = action.play_dota(stat);
        if ((stat.fun == 3 && stat.fatigue == 10) || (stat.hp == 90 && stat.fun == -2 && stat.fatigue == 10)){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 5.15
        stat = {  
            "hp": 10,
            "mp": 20,
            "fun": 0,
            "fatigue": 70,
            "money": 0
        }

        stat = action.sleep(stat);
        CheckStat();
        if (stat.hp == 100 && stat.mp == 0 && stat.fatigue == 0){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 5.16
        stat = {  
            "hp": 10,
            "mp": 70,
            "fun": 3,
            "fatigue": 70,
            "money": 0
        }

        stat = action.sleep(stat);
        CheckStat();
        UpdateStat();
        if (stat.hp == 10 && stat.mp == 20 && stat.fun == 0 && stat.fatigue == 0){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }

        TotalTests += subtestNum;

        //Test 6 - HTML elements

        testNum = 6;
        subtestNum = 1;

        //Test 6.1
        if (body != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 6.2
        if (doomguy != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        // //Test 6.3
        // if (menu != null){
        //     console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        // }
        // else {
        //     console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
        //     FailedFlag++;  
        // }
        subtestNum++;
        
        //Test 6.4
        if (work != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 6.5
        if (chill != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 6.6
        if (drink_vine != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 6.7
        if (drink_in_bar != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 6.8
        if (drink_with_marginal != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 6.9
        if (sing_in_metro != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 6.10
        if (play_dota != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 6.11
        if (sleep != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 6.12
        if (stat_hp != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 6.13
        if (stat_mp != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 6.14
        if (stat_fun != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 6.15
        if (stat_fatigue != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 6.16
        if (stat_money != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;
        
        //Test 6.17
        if (info_table != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 6.18
        if (info_stat_table != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }
        subtestNum++;

        //Test 6.19
        if (log != null){
            console.log("Test " + testNum + "." + subtestNum + "\x1b[32m Passed")
        }
        else {
            console.log("Test " + testNum + "." + subtestNum + "\x1b[31m Failed")
            FailedFlag++;  
        }

        TotalTests += subtestNum;

        //Test 7 - DIE, BABY, DIE

        testNum = 7;
        subtestNum = 1;
        //Test 7
        stat.hp = -10;
        CheckStat();
        if (body.innerHTML == '<a href="/"><div class="button reload">Начать заново</div></a>'){
            console.log("Test DIE \x1b[32m Passed")
            testNum++;
            subtestNum++;
        }

        else {
            console.log("Test DIE \x1b[31m Failed")
            FailedFlag++;  
        }

        TotalTests += subtestNum;
        TotalTests += testNum;


        // TOTAL ALERT
        if (FailedFlag == 0){      
            console.log("\x1b[32m ALL TESTS PASSED ("+TotalTests+"/"+TotalTests+")")
            alert("ALL TESTS PASSED ("+TotalTests+"/"+TotalTests+"), TY");
        }else{
            console.log("\x1b[31m SOME TESTS FAILED ("+FailedFlag+"/"+TotalTests+")!")
            alert("SOME TESTS FAILED ("+FailedFlag+"/"+TotalTests+")! \nYou can take more information in the console.");   
        }
    }

    tests();
}

