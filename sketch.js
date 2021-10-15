let Mordecai;

function setup() {
  createCanvas(400, 400);
  Mordecai = new Birds(40, 150, "Mordecai", "mordo");
  Mordecai.sayHi();
  Rigby = new Raccoon(160, 150, "Rigby", "Mapache");
  Rigby.sayHi();
}

function draw() {
  background(53,180,45);
  Mordecai.Show();
  Rigby.Show();
}