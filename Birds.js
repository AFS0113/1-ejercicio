class Birds {
    constructor(x, y, name, last) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.last = last;
        this.diameter = 60;
    }
    sayHi() {
        console.log(this.name + " " + this.last);
    }
    Show() {
        noStroke();
        fill(0, 190, 228);
        rect(this.x, this.y, 70,70,30);
    }
}
