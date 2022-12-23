var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var mas = [];
var count = 0;
var stop = 0;
var population = 0;
var stop = 0;
var level = 0;
ctx.fillStyle = 'orange';

canvas.onclick = function (event) {
  var x = event.offsetX;
  var y = event.offsetY;
  //console.log(x);
  //console.log(y);
  x = Math.floor(x / 10);
  y = Math.floor(y / 10);
  mas[y][x] = 1;
  //console.log(y,x);
  //console.log(mas);
  drawField();
};
function goLife() {
  var n = 30,
    m = 30;
  for (var i = 0; i < m; i++) {
    mas[i] = [];
    for (var j = 0; j < n; j++) {
      mas[i][j] = [0];
    }
  }

}
goLife();
function stopLife() {
  stop = 1;
  //console.log(stop);
}

function clearField() {
  ctx.clearRect(0, 0, 300, 300);
  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      mas[i][j] = [0];
    }
  }
  count = 0;
  document.getElementById('count').innerHTML = count;
  stop = 0;
  population = 0;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML = 'EMPTY';
}

function drawField() {
  ctx.clearRect(0, 0, 300, 300);

  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      if (mas[i][j] == 1) {
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
    
  count_population();
  document.getElementById('popul').innerHTML = population;
}
function startLife() {
  var mas2 = [];
  //console.log(mas);
  for (var i = 0; i < 30; i++) {
    mas2[i] = [];

		for (var j=0; j<30; j++){
			var neighbors = 0;
			if (mas[fpm(i)-1][j]==1) neighbors++;//up
			if (mas[i][fpp(j)+1]==1) neighbors++;//right
			if (mas[fpp(i)+1][j]==1) neighbors++;//bottom
			if (mas[i][fpm(j)-1]==1) neighbors++;//left
			if (mas[fpm(i)-1][fpp(j)+1]==1) neighbors++;
			if (mas[fpp(i)+1][fpp(j)+1]==1) neighbors++;
			if (mas[fpp(i)+1][fpm(j)-1]==1) neighbors++;
			if (mas[fpm(i)-1][fpm(j)-1]==1) neighbors++;
			(neighbors==2 || neighbors==3) ? mas2[i][j]=1 : mas2[i][j]==0;
		}
	}
  mas = mas2;
  drawField();
  count++;

  if (level == 1) {
    check1level();
  }

  if (level == 2) {
    check2level();
  }

  if (level == 3) {
    check3level();
  }

  if (level == 4) {
    check4level();
  }

  if (level == 5) {
    check5level();
  }

  document.getElementById('count').innerHTML = count;
  document.getElementById('popul').innerHTML = population;
  if (stop == 0) timer = setTimeout(startLife, 700);
}
function fpm(i) {
  if (i == 0) return 30;
  else return i;
}
function fpp(i) {
  if (i == 29) return -1;
  else return i;
}

function level1() {
  mas[14][4] = 1;
  mas[16][4] = 1;
  mas[18][4] = 1;
  mas[16][6] = 1;
  mas[16][2] = 1;

  level = 1;
  population = 2;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 8 к 3 поколению';
  drawField();
}

function level2() {
  mas[14][8] = 1;
  mas[14][7] = 1;
  mas[14][6] = 1;
  mas[13][5] = 1;
  mas[13][9] = 1;
  mas[10][6] = 1;
  mas[10][8] = 1;
  level = 2;
  population = 2;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 30 к 4 поколению';
  drawField();
}

function level3() {
  mas[2][3] = 1;
  mas[3][3] = 1;
  mas[2][25] = 1;
  mas[2][26] = 1;
  mas[27][3] = 1;
  mas[27][4] = 1;
  mas[26][26] = 1;
  mas[27][26] = 1;
  mas[15][16] = 1;
  mas[15][14] = 1;
  mas[14][15] = 1;
  mas[16][15] = 1;
  level = 3;
  population = 8;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 74 к 3 поколению';
  drawField();
}

function level4() {
  mas[1][1] = 1;
  mas[3][1] = 1;
  mas[3][2] = 1;
  mas[3][3] = 1;
  mas[2][3] = 1;
  mas[1][28] = 1;
  mas[3][28] = 1;
  mas[3][27] = 1;
  mas[3][26] = 1;
  mas[2][26] = 1;
  mas[28][1] = 1;
  mas[26][1] = 1;
  mas[26][2] = 1;
  mas[26][3] = 1;
  mas[27][3] = 1;
  mas[28][28] = 1;
  mas[26][28] = 1;
  mas[26][27] = 1;
  mas[26][26] = 1;
  mas[27][26] = 1;
  mas[14][14] = 1;
  mas[15][15] = 1;
  level = 4;
  population = 22;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 134 к 6 поколению';
  drawField();
}

function level5() {
  mas[15][1] = 1;
  mas[14][2] = 1;
  mas[13][3] = 1;
  mas[12][4] = 1;
  mas[11][5] = 1;
  mas[11][6] = 1;
  mas[12][7] = 1;
  mas[13][8] = 1;
  mas[14][7] = 1;
  mas[15][6] = 1;
  mas[16][7] = 1;
  mas[17][8] = 1;
  mas[18][7] = 1;
  mas[19][6] = 1;
  mas[19][5] = 1;
  mas[18][4] = 1;
  mas[17][3] = 1;
  mas[16][2] = 1;
  level = 5;
  population = 22;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 60 к 4 поколению';
  drawField();
}

function count_population() {
  population=0;
  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      if (mas[i][j] == 1) {
        population++;
      }
    }
  }
  console.log(population);
}

function check1level() {
  count_population();
  if (count == 3 && population == 8) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 3 && population != 8) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}

function check2level() {
  count_population();
  if (count == 4 && population == 30) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 4 && population != 30) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}

function check3level() {
  count_population();
  if (count == 3 && population == 74) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 3 && population != 74) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}

function check4level() {
  count_population();
  if (count == 6 && population == 134) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 6 && population != 134) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}

function check5level() {
  count_population();
  if (count == 4 && population == 60) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 4 && population != 60) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}

document.getElementById('start').onclick = startLife;
document.getElementById('level1').onclick = level1;
document.getElementById('level2').onclick = level2;
document.getElementById('level3').onclick = level3;
document.getElementById('level4').onclick = level4;
document.getElementById('level5').onclick = level5;
document.getElementById('clearF').onclick = clearField;
document.getElementById('stop').onclick = stopLife;
